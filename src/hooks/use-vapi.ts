import Vapi from "@vapi-ai/web";
import { useEffect, useRef, useState } from "react";

export interface TranscriptMessage {
  role: "user" | "assistant";
  text: string;
}

const getPublicKey = () =>
  typeof process !== "undefined" ? "0894881a-46eb-4b0f-b2c9-bfe038988ae3" : "";
const getAssistantId = () =>
  typeof process !== "undefined" ? "d4654454-01db-4236-bb0e-762015aae773" : "";

export type UseVapiOptions = {
  publicKey?: string;
  assistantId?: string;
};

export const useVapi = (options: UseVapiOptions = {}) => {
  const publicKey = options.publicKey ?? getPublicKey();
  const assistantId = options.assistantId ?? getAssistantId();

  const vapiRef = useRef<Vapi | null>(null);

  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!publicKey || !assistantId) {
      return;
    }
    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    vapi.on("call-start", () => {
      setIsConnected(true);
      setIsConnecting(false);
      setTranscript([]);
    });

    vapi.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
    });

    vapi.on("speech-start", () => {
      setIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setIsSpeaking(false);
    });

    vapi.on("error", (err) => {
      console.error("VAPI_ERROR", err);
      setIsConnecting(false);
      setError(err?.message ?? "Voice connection error");
    });

    vapi.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role === "user" ? "user" : "assistant",
            text: message.transcript,
          },
        ]);
      }
    });

    return () => {
      vapi.stop();
      vapiRef.current = null;
    };
  }, [publicKey, assistantId]);

  const startCall = () => {
    if (!publicKey || !assistantId) {
      setError(
        "Voice is not configured. Set NEXT_PUBLIC_VAPI_PUBLIC_KEY and NEXT_PUBLIC_VAPI_ASSISTANT_ID.",
      );
      return;
    }
    setError(null);
    setIsConnecting(true);
    vapiRef.current?.start(assistantId);
  };

  const endCall = () => {
    vapiRef.current?.stop();
  };

  return {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    error,
    startCall,
    endCall,
  };
};
