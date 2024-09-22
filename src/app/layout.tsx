import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "~/app/api/uploadthing/core";

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
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <TopNav />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
