import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "./theme-config.css";
import { SessionProvider } from "next-auth/react";
import QueryClientProvider from "./components/QueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <QueryClientProvider>
          <SessionProvider>
            <Theme accentColor="blue">
              <NavBar />
              {children}
            </Theme>
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
