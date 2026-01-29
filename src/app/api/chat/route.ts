import { NextResponse } from "next/server";

const VAPI_CHAT_URL = "https://api.vapi.ai/chat";

type VapiChatBody = {
  assistantId: string;
  input: string;
  previousChatId?: string;
};

type VapiOutputMessage = { role: string; content: string };

type VapiChatResponse = {
  id: string;
  output: VapiOutputMessage[];
  [key: string]: unknown;
};

export async function POST(request: Request) {
  const apiKey = "f9487e13-1c30-4c87-8332-f2cdd75e40cf";
  const assistantId = "d4654454-01db-4236-bb0e-762015aae773";

  if (!apiKey || !assistantId) {
    return NextResponse.json(
      {
        error:
          "Chat is not configured. Missing VAPI_API_KEY or VAPI_ASSISTANT_ID.",
      },
      { status: 503 },
    );
  }

  let body: { input?: string; previousChatId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const input = typeof body.input === "string" ? body.input.trim() : "";
  if (!input) {
    return NextResponse.json(
      { error: "Missing or empty input" },
      { status: 400 },
    );
  }

  // Test error UI: send "/test-error" in the chat to trigger this
  if (input === "/test-error") {
    return NextResponse.json(
      { error: "This is a test error. Remove the /test-error check in the API route when done." },
      { status: 500 },
    );
  }

  const payload: VapiChatBody = {
    assistantId,
    input,
    ...(body.previousChatId && { previousChatId: body.previousChatId }),
  };

  try {
    const response = await fetch(VAPI_CHAT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as
      | VapiChatResponse
      | { error?: string };

    if (!response.ok) {
      const vapiError =
        typeof (data as { error?: string }).error === "string"
          ? (data as { error: string }).error
          : null;
      const message =
        response.status === 401
          ? "Chat requires your Vapi private API key (not the public key). In the Vapi dashboard: Profile → Vapi API Keys → copy the Private API Key and set it as VAPI_API_KEY in .env.local."
          : (vapiError ?? `Vapi API error: ${response.status}`);
      return NextResponse.json(
        { error: message },
        { status: response.status >= 500 ? 502 : response.status },
      );
    }

    const chat = data as VapiChatResponse;
    const firstOutput = Array.isArray(chat.output) ? chat.output[0] : null;
    const responseText =
      firstOutput && typeof firstOutput.content === "string"
        ? firstOutput.content
        : "I couldn't generate a response. Please try again.";

    return NextResponse.json({
      chatId: chat.id,
      response: responseText,
    });
  } catch (err) {
    console.error("[chat] Vapi request failed:", err);
    return NextResponse.json(
      { error: "Failed to reach the chat service. Please try again." },
      { status: 502 },
    );
  }
}
