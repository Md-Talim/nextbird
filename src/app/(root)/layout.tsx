import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Topbar from '@/components/shared/Topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Threads Clone App By Talim.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <section className="main-container">
            {/* LeftSideBar */}
            <div className="w-full max-w-4xl">{children}</div>
            {/* RightSideBar */}
          </section>
          {/* BottomBar */}
        </body>
      </html>
    </ClerkProvider>
  );
}
