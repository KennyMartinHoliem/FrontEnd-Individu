import type { Metadata } from "next"; 
import "./globals.css"; 
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PT Maju Bersama",
  description: "Website company profile sederhana dengan Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
