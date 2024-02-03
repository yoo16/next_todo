import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next TODO",
  description: "This is Next.js TODO Application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <main className="mx-auto w-1/2">
          {children}
        </main>
      </body>
    </html>
  );
}
