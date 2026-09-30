import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Lao } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { MotionProvider } from "./context/MotionContext";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansLao = Noto_Sans_Lao({
  variable: "--font-noto-sans-lao",
  subsets: ["lao"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alic Portfolio",
  description: "Minimal, formal portfolio site for Alic",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansLao.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <MotionProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
