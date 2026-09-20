import { Metadata } from 'next';
import './global.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://koudmain.fr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Koudmain | Recrutement Express en Restauration en Moins d’1h',
    template: '%s | Koudmain',
  },
  description:
    'L’outil de mise en relation express pour la restauration. Trouvez un extra qualifié (serveur, barman, cuisinier) en moins d’une heure ou décrochez vos missions en toute liberté avec CDDU automatisé.',
  keywords: [
    'extra restauration',
    'recrutement restauration',
    'remplacement serveur',
    'extra barman',
    'extra cuisine',
    'CDDU restauration',
    'DPAE automatique',
    'job étudiant restauration',
    'intérim restauration',
    'Koudmain',
  ],
  authors: [{ name: 'Koudmain' }],
  creator: 'Koudmain',
  publisher: 'Koudmain',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'Koudmain',
    title: 'Koudmain | Recrutement Express en Restauration',
    description:
      'Trouvez un extra qualifié en moins d’une heure ou travaillez en toute liberté. CDDU et DPAE 100% automatisés.',
    images: [
      {
        url: '/images/figma/waitlist-phone.png',
        width: 864,
        height: 1184,
        alt: 'Application Koudmain - Recrutement express restauration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koudmain | Recrutement Express en Restauration',
    description:
      'Trouvez un extra qualifié en moins d’une heure ou travaillez en toute liberté. CDDU et DPAE 100% automatisés.',
    images: ['/images/figma/waitlist-phone.png'],
  },
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
    apple: [
      {
        url: '/images/logo_black_transparant.png',
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
