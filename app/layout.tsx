<<<<<<< HEAD
import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
=======
import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'          // 👈 importa Script
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
>>>>>>> f5ebc5e (Updates Chat & Carrousel)

export const metadata: Metadata = {
  title: 'AlmaIA',
  description: 'AlmaIA - Plataforma para el bienestar infantil',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
<<<<<<< HEAD
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import './globals.css';
=======
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "s6q2hcb7x7");`,
    }}
  />
</head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
>>>>>>> f5ebc5e (Updates Chat & Carrousel)
