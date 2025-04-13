import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
import ClientWrapper from './components/ClientWrapper'; // New component for client-side logic

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les Batar | Web Development Experts",
  description: "Professional portfolio of a team of 3 software engineers specializing in web development with expertise in TypeScript, JavaScript, Next.js, Express, Nest.js, Django, Python, MongoDB, and PostgreSQL.",
  keywords: "software engineers, web development, TypeScript, JavaScript, Next.js, Express, Nest.js, Django, Python, MongoDB, PostgreSQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col`}>
        <ClientWrapper>
          <ThemeProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
