import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-sans', subsets: ['latin'] });
const newsreader = Newsreader({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Guanyu Liu — Research',
  description: 'Guanyu Liu studies reliable self-evolving agents, language-model reasoning, and learning under imperfect feedback.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${newsreader.variable}`}>{children}</body></html>;
}
