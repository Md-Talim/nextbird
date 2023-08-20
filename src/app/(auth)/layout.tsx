import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import '../globals.css';

export const metadata = {
  title: 'Threads',
  description: 'Threads app using built with next13',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <main className="flex items-center justify-center min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
