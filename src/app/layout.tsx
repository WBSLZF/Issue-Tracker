import "@radix-ui/themes/styles.css";
import './globals.css'
import NavBar from './NavBar'
import { Theme } from "@radix-ui/themes";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <Theme> 
            <NavBar />
            {children}
          </Theme>
        </body>
      </html>
    )
  }
