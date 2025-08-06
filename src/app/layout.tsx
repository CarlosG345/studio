import type { Metadata } from 'next';
import './globals.css';
import { Sidebar, SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import Chatbot from '@/components/chatbot';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Aura Coffee Companion',
  description: 'Your personal guide to the world of coffee.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,700;1,7..72,400;1,7..72,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
          <Sidebar>
            <Chatbot />
          </Sidebar>
          <SidebarInset>
            <Header />
            <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
