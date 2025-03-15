import "@radix-ui/themes/styles.css";
import './globals.css'
import './theme-config.css'
import NavBar from './NavBar'
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={inter.variable}>
        <body>
          <Theme accentColor="blue">
            <NavBar />
            {children}
          </Theme>
        </body>
      </html>
    )
  }
