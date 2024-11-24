import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/service/mongo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EasyLearing Profetional Courses",
  description: "Generated by create next app",
};

const poppins = Inter({subsets: ['latin'], variable: "--font-poppins"});

export default async function RootLayout({ children }) {

  const conn = await dbConnect();
  console.log(conn)


  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased, poppins.className`) }
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
