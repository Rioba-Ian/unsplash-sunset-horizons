import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunsets and Sunrises",
  description: "Share your sunrises and sunsets with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div
            id="body-container"
            className="m-auto my-4 min-h-screen w-4/5 max-w-[1280px] bg-background text-accent-foreground"
          >
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
