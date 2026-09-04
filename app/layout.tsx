import type { Metadata } from 'next';
import { Inter_Tight, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({ variable: '--font-sans', subsets: ['latin'] });
const sourceSerif = Source_Serif_4({ variable: '--font-serif', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guanyu Liu — Research',
  description: 'Guanyu Liu studies reliable self-evolving agents, language-model reasoning, and learning under imperfect feedback.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${interTight.variable} ${sourceSerif.variable}`}>{children}</body></html>;
}
