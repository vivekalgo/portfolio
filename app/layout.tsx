import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Yadav | AI Engineer • Full Stack Developer • Startup Builder",
  description: "Portfolio of Vivek Yadav. I build AI-powered products, scalable web applications, and real-world digital solutions that solve meaningful problems.",
  keywords: [
    "Vivek Yadav",
    "Developer Portfolio",
    "AI Engineer",
    "Full Stack Developer",
    "Startup Builder",
    "Next.js 15",
    "Three.js Portfolio",
    "Framer Motion Website"
  ],
  authors: [{ name: "Vivek Yadav" }],
  creator: "Vivek Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivek.dev",
    title: "Vivek Yadav | AI Engineer • Full Stack Developer • Startup Builder",
    description: "Discover Vivek Yadav's premium portfolio: combining AI-powered models with scalable full-stack products.",
    siteName: "Vivek Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Yadav | AI Engineer & Full Stack Builder",
    description: "Discover Vivek Yadav's premium portfolio: combining AI-powered models with scalable full-stack products.",
    creator: "@vivekyadav",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
