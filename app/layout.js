import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Al Amin — Frontend Developer",
  description:
    "Portfolio of Al Amin, a Frontend Developer specialising in React, Next.js and Tailwind CSS. Building fast, accessible, and pixel-perfect web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <ThemeProvider>
        <body className="font-sans antialiased">
          <CustomCursor />
          <Navbar />
          <main className="mt-16">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
