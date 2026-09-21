import { Metadata } from 'next';
import WorkerClient from './WorkerClient';

export const metadata: Metadata = {
  title: 'Missions Extra en 1 Clic',
  description:
    'Travaillez quand vous voulez, où vous voulez. Trouvez des missions d’extra en restauration (service en salle, bar, cuisine) payées rapidement et déclarées avec contrat CDDU automatisé.',
  keywords: [
    'mission extra restauration',
    'trouver extra barman serveur',
    'job extra cuisine',
    'contrat CDDU restauration',
    'job étudiant serveur barman',
    'intérim restauration rapide',
    'Koudmain travailleur',
  ],
  alternates: {
    canonical: '/worker',
  },
  openGraph: {
    title: 'Missions Extra en 1 Clic',
    description:
      'Un cours annulé ? Un week-end de libre ? Trouvez une mission d’extra en 1 clic et soyez payé rapidement en toute légalité.',
    url: '/worker',
    images: [
      {
        url: '/images/waitlist-phone-v3.png',
        width: 1479,
        height: 2160,
        alt: 'Application Koudmain pour les extras en restauration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Missions Extra en 1 Clic',
    description: 'Trouvez une mission d’extra en restauration en 1 clic et soyez payé rapidement.',
    images: ['/images/waitlist-phone-v3.png'],
  },
};

export default function WorkerPage() {
  return <WorkerClient />;
}
