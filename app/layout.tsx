import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins(
  { 
    subsets: ["latin"],
    style: "normal",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  }
)

export const metadata: Metadata = {
  title: "Francisco Araújo Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
