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
        <div className="flex flex-col sm:mx-[0%] lg:mx-[10%] shadow-lg shadow-black bg-neutral-800  py-16 min-h-screen">
          <Nav />
          <div className=" pt-8 px-4 sm:px-16 " >
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
