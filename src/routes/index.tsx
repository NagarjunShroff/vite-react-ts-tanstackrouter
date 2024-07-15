import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="p-4 text-xl">
      This App is built using Vite, React, TypeScript, @tanstack/router,
      tailwindcss, Prettier.
    </div>
  ),
});
