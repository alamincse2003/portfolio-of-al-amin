import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al Amin Portfolio",
  description: "Frontend Developer Portfolio using Next.js & Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ThemeProvider>
        <body className="antialiased">
          <Navbar />
          <main className="mt-15">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
