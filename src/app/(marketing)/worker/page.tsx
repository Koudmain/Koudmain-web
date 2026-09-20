import { Metadata } from 'next';
import WorkerClient from './WorkerClient';

export const metadata: Metadata = {
  title: 'Missions Extra en Restauration Rémunérées Rapidement | Travailleurs',
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
    title: 'Missions Extra en Restauration Payées Rapidement | Koudmain',
    description:
      'Un cours annulé ? Un week-end de libre ? Trouvez une mission d’extra en 1 clic et soyez payé rapidement en toute légalité.',
    url: '/worker',
    images: [
      {
        url: '/images/figma/waitlist-phone.png',
        width: 864,
        height: 1184,
        alt: 'Application Koudmain pour les extras en restauration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Missions Extra en Restauration Payées Rapidement | Koudmain',
    description: 'Trouvez une mission d’extra en restauration en 1 clic et soyez payé rapidement.',
    images: ['/images/figma/waitlist-phone.png'],
  },
};

export default function WorkerPage() {
  return <WorkerClient />;
}
