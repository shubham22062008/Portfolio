// src/app/_app.tsx
"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Smooth scrolling for all anchor links
    const handleLinkClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement && e.target.hash) {
        e.preventDefault();
        const targetId = e.target.hash;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          window.history.pushState({}, '', targetId);
        }
      }
    };

    // Add click handlers
    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [pathname, searchParams]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}