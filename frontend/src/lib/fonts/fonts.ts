import { Inter as FontSans, Syne as FontDisplay } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});
