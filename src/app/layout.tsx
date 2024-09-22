import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "tumbl3resque web app",
  description: "An image upload site with social features",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b bg-black p-4 text-white">
      <a href="/" className="text-xl font-bold">
        tumbl3resque
      </a>
      <ul className="flex gap-4">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign up</a>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
