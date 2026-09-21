import { Metadata } from 'next';
import { questions } from '@/constant/marketing';
import HomeClient from './HomeClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.koudmain.fr';

export const metadata: Metadata = {
  title: 'Recrutement Express en Restauration',
  description:
    'La plateforme de recrutement express en restauration. Que vous soyez restaurateur ayant un imprévu ou extra qualifié (serveur, barman, cuisinier), inscrivez-vous pour un accès prioritaire.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Koudmain | Recrutement Express en Restauration',
    description:
      'L’application de mise en relation express pour la restauration. Trouvez un extra qualifié en moins d’une heure ou travaillez en toute liberté avec CDDU automatisé.',
    url: '/',
    images: [
      {
        url: '/images/waitlist-phone-v3.png',
        width: 1479,
        height: 2160,
        alt: 'Application Koudmain - Recrutement express restauration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koudmain | Recrutement Express en Restauration',
    description:
      'L’application de mise en relation express pour la restauration. Trouvez un extra qualifié en moins d’une heure.',
    images: ['/images/waitlist-phone-v3.png'],
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Koudmain',
    url: siteUrl,
    logo: `${siteUrl}/images/logo_black_transparant.png`,
    email: 'koudmain.admin@gmail.com',
    description:
      'Plateforme de recrutement express pour la restauration. Mise en relation d’employeurs et d’extras qualifiés avec gestion automatique des CDDU et DPAE.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Koudmain',
    url: siteUrl,
    description: 'Recrutement express pour la restauration',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient />
    </>
  );
}
