import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from "@/components/theme-provider";
import CssBaseline from '@mui/material/CssBaseline';
import { ModeToggle } from "@/components/mode-toggle";
import Sidebar from "@/components/sidebar/sidebar";
import { Menu, Sheet } from "lucide-react";
import Menubar2 from "@/components/sidebar/menubar"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <body className={inter.className}>
        <Sidebar/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
        >
            <ModeToggle />
          {children}
        </ThemeProvider>
        <Menubar2/>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
