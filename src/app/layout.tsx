import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "@/components/sidebar";
import Menubar2 from "@/components/menubar"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <AppRouterCacheProvider options={{ enableCssLayer: true }}>
       <body className={`${inter.className} bg-background`}>
        <div className="sticky-sidebar">
          <Sidebar/>
        </div>
        <Menubar2/>
        <div className="flex flex-col h-screen">
          <CssBaseline />
          {children}
        </div>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
