import { Inter, Fira_Code, Lora, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

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

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "Al Amin — Frontend Developer",
  description:
    "Portfolio of Al Amin, a Frontend Developer specialising in React, Next.js and Tailwind CSS. Building fast, accessible, and pixel-perfect web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} ${lora.variable} ${dancingScript.variable}`}
    >
      <ThemeProvider>
        <body className="font-sans antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
