import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Layout/Navigation/Navigation";
import Player from "@/components/Layout/Player/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Platform",
  description: "Browse and listen to your favorite music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className='grid gap-3 grid-cols-[27rem_1fr] grid-rows-[1fr_6rem] bg-black p-3 h-screen text-white'>
          <Navigation />
          <main className='bg-zinc-900 rounded-xl overflow-auto'>{children}</main>
          <Player />
        </div>
      </body>
    </html >
  );
}
