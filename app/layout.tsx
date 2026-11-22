import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Samarth × Riddhi — The Unending Story',
  description: 'One Office. A Thousand Memories. An Unending Story.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased selection:bg-terracotta/20 selection:text-terracotta-dark">
        {children}
      </body>
    </html>
  );
}
