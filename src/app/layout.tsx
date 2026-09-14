import { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Koudmain',
  description: "L'intérim version Uber pour la restauration",
  icons: {
    icon: [
      {
        url: '/images/logo_black_transparant.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/logo_white_transparant.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-white text-primary font-sans">{children}</body>
    </html>
  );
}

export default RootLayout;
