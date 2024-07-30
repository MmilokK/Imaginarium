import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ruRU } from "@clerk/localizations";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "Imaginarium",
  description: "Продвинутый ИИ-генератор картинок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl='/' localization={ruRU} appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang="ru">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>

          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
