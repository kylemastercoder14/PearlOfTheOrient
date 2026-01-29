This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Pearl Assistant (Vapi chat)

The site’s chat assistant uses [Vapi](https://vapi.ai). Configure it via environment variables:

- **`VAPI_API_KEY`** – Your Vapi **private** API key (not the public key). In the [dashboard](https://dashboard.vapi.ai): Profile → Vapi API Keys → copy the **Private API Key**.
- **`VAPI_ASSISTANT_ID`** – The assistant ID from your Vapi assistant (from the assistant URL or details).

Add these to `.env.local` (never commit real keys). If they’re missing, the chat API returns a “not configured” message.

**Voice Assistant (Web SDK)** uses the **public** key and assistant ID in the browser:

- **`NEXT_PUBLIC_VAPI_PUBLIC_KEY`** – Your Vapi **public** API key (Profile → Vapi API Keys → **Public API Key**).
- **`NEXT_PUBLIC_VAPI_ASSISTANT_ID`** – Same assistant ID as above.

These are safe to expose in the client; the voice widget uses the [Vapi Web SDK](https://docs.vapi.ai/quickstart/web).

**Testing voice on a phone:** Microphone only works on **secure contexts** (HTTPS or `localhost`). If you open the site from your phone using `http://YOUR_IP:3000`, the browser will block the mic without showing a permission prompt. To test voice on mobile:

1. Run the dev server with HTTPS: `bun run dev:https` (or `npm run dev:https`).
2. On your computer, get your local IP (e.g. `192.168.1.100`).
3. On your phone (same Wi‑Fi), open **https://YOUR_IP:3000** (use `https`, not `http`).
4. Accept the browser’s self-signed certificate warning if it appears, then try Start call again.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
