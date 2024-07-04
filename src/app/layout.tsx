import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokemon ✨',
  description: 'pokemon collenctions book',
  icons: {
		icon: "/pokemon.ico",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-400 text-white`}>
        <header className="flex justify-center items-center font-bold text-3xl font-dalmoori p-5 bg-black">
          ✨ 포켓몬 도감 ✨
        </header>
        {children}
      </body>
    </html>
  );
}
