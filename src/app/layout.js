import { Fira_Code, Inconsolata, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";

const firaCode = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "ThinkPads4All Foundation",
  description: "E-waste & Educational Non-profit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={firaCode.className}>
        <div className="flex flex-col lg2:mx-60 xl:mx-72 shadow-lg shadow-black bg-neutral-800 border-2 border-t-0 border-b-0 border-stone-700 py-16 min-h-screen">
          <Nav />
          <div className=" pt-8 px-16 " >
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
