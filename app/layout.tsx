import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Risk Management PME",
  description: "Gestion des risques et contrôle interne pour PME au Burkina Faso",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
