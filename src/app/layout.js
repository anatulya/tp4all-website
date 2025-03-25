import { Inconsolata, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
})

export const metadata = {
  title: "ThinkPads4All",
  description: "E-Waste & Educational Non-Profit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased bg-stone-900 py-8 max-w-screen-xl mx-auto`}
      > 
        <Nav font={inconsolata.className} />
        {children}
      </body>
    </html>
  );
}
