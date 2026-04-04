import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import GlobalShell from "@/components/GlobalShell";

export const metadata: Metadata = {
  title: "Just Jamil",
  description:
    "Software Engineer passionate about creating impactful digital solutions that address real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-1">
          <GlobalShell>{children}</GlobalShell>
        </main>
        <Footer />
      </body>
    </html>
  );
}
