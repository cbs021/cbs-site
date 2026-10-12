import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centro Brasileiro de Sustentabilidade",
  description:
    "Site institucional do Centro Brasileiro de Sustentabilidade, com foco em soluções sustentáveis, educação e impacto social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
