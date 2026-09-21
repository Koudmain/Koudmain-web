import { Metadata } from 'next';
import EmployerClient from './EmployerClient';

export const metadata: Metadata = {
  title: 'Recrutez un Extra en 1h',
  description:
    'Ne laissez plus un imprévu couler votre service. Trouvez des extras qualifiés et notés (serveurs, barmans, commis, cuisiniers) disponibles en moins d’une heure. CDDU et DPAE URSSAF 100% automatisés.',
  keywords: [
    'recrutement extra restauration',
    'trouver extra restaurant',
    'remplacement serveur urgence',
    'extra cuisine bar',
    'CDDU automatique',
    'DPAE URSSAF restauration',
    'recrutement hôtellerie restauration',
    'Koudmain employeur',
  ],
  alternates: {
    canonical: '/employer',
  },
  openGraph: {
    title: 'Recrutez un Extra en 1h',
    description:
      'Fini les désistements de dernière minute. Trouvez un extra qualifié en moins d’une heure et déléguez toute la paperasse administrative.',
    url: '/employer',
    images: [
      {
        url: '/images/restaurateur-souriant.png',
        width: 1140,
        height: 1524,
        alt: 'Restaurateur souriant recrutant avec Koudmain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recrutez un Extra en 1h',
    description:
      'Fini les désistements de dernière minute. Trouvez un extra qualifié en moins d’une heure.',
    images: ['/images/restaurateur-souriant.png'],
  },
};

export default function EmployerPage() {
  return <EmployerClient />;
}
