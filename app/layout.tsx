import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-sans', subsets: ['latin'] });
const inter = Inter({ variable: '--font-serif', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guanyu Liu — Research',
  description: 'Guanyu Liu studies reliable self-evolving agents, language-model reasoning, and learning under imperfect feedback.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${inter.variable}`}>{children}</body></html>;
}
