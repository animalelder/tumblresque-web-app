import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "tumbl3resque web app",
  description: "An image upload site with social features",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
