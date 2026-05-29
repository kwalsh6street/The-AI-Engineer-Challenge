# 🧠 Mental Coach AI — Frontend

> A clean, minimal Next.js chat interface for your AI-powered mental coach backend. Ask it anything — stress, motivation, confidence, habits. It's got you. 💪

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** — [download here](https://nodejs.org/)
- The **FastAPI backend** running locally (see [`/api/README.md`](../api/README.md))

---

### 1. Install dependencies

From inside the `frontend/` directory:

```bash
npm install
```

### 2. Set up your environment

Copy the example env file and edit it if your backend runs on a different port:

```bash
cp .env.example .env.local
```

The default value in `.env.example` is:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

You only need to change this if your backend runs somewhere other than `localhost:8000`.

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser — you should see the chat UI! 🎉

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

This frontend is built to deploy seamlessly on [Vercel](https://vercel.com/):

1. Push your repo to GitHub.
2. Import the project in Vercel — set the **root directory** to `frontend`.
3. Add the environment variable `NEXT_PUBLIC_API_BASE_URL` pointing to your deployed backend URL.
4. Hit **Deploy** and share your link!

---

## 🗂️ Project Structure

```
frontend/
├── app/
│   ├── layout.tsx      # Root HTML shell + metadata
│   ├── page.tsx        # Chat UI (client component)
│   └── globals.css     # All styles
├── .env.example        # Template for local env vars
├── next.config.ts      # Next.js config
├── tsconfig.json       # TypeScript config
└── package.json
```

---

## ✨ Features

- **Message history** — see the full conversation in the session
- **Typing indicator** — animated dots while the coach is "thinking"
- **Error handling** — friendly banner if the backend is unreachable
- **Enter to send** — `Shift+Enter` adds a new line instead
- **Clear chat** — wipe the slate and start fresh
- **Responsive** — works great on mobile too