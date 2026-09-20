'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, FileCheck, Wallet, Zap } from 'lucide-react';
import { createElement } from 'react';

const benefits = [
  {
    title: 'Missions Flash',
    text: 'Trouvez des missions pour le jour-même. Idéal pour rentabiliser un imprévu dans votre emploi du temps.',
    icon: Zap,
  },
  {
    title: 'Rémunération Juste',
    text: 'Des tarifs transparents et attractifs. Vous connaissez votre gain avant même d’accepter la mission.',
    icon: Wallet,
  },
  {
    title: 'Protection Totale',
    text: 'Pas de travail au noir. Chaque mission est couverte par un contrat CDDU généré automatiquement.',
    icon: FileCheck,
  },
  {
    title: 'Liberté Absolue',
    text: 'Pas de patron, pas d’engagement. Vous choisissez vos horaires, vos lieux et vos missions.',
    icon: CalendarDays,
  },
];
const steps = [
  [
    'Créez votre profil',
    'Renseignez vos expériences et vos spécialités (service, bar, cuisine). Nous vérifions votre profil pour garantir la qualité du réseau.',
  ],
  [
    'Postulez en un éclair',
    'Recevez des notifications dès qu’un restaurant autour de vous a besoin d’un Koudmain. Un clic pour manifester votre intérêt.',
  ],
  [
    'Travaillez et encaissez',
    'Réalisez votre mission. Une fois terminée, le contrat est signé numériquement et votre paiement est déclenché via Stripe.',
  ],
];

function WorkerPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <section className="px-6 py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl lg:text-[44px]">
            Travaillez quand vous voulez, <br />
            <span className="text-secondary">où vous voulez.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[561px] text-base font-medium leading-6 text-zinc-400">
            Un cours annulé ? Un week-end de libre ? Connectez-vous sur Koudmain, trouvez une
            mission en 1 clic et soyez payé rapidement.
          </p>
          <Link
            href="/#liste-attente"
            className="mt-10 inline-flex w-full justify-center rounded bg-secondary px-10 py-5 text-base font-semibold text-white shadow-[0_4px_12px_rgba(216,74,34,0.20)] transition hover:bg-secondary-600 sm:w-auto"
          >
            Rejoindre la liste d&apos;attente
          </Link>
        </div>
      </section>
      <section className="bg-black/[0.035] px-6 py-14">
        <div className="mx-auto grid max-w-[1312px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, icon }) => (
            <article
              key={title}
              className="min-h-[226px] rounded-[20px] bg-white p-7 shadow-[0_2px_0_rgba(49,49,49,0.18)]"
            >
              {createElement(icon, { size: 24, className: 'text-secondary', strokeWidth: 1.8 })}
              <h2 className="mt-4 text-xl font-semibold text-primary">{title}</h2>
              <p className="mt-3 text-sm font-medium leading-[25px] text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[730px]">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Encaisser vos premiers euros en <span className="text-secondary">3 étapes</span>
          </h2>
          <div className="mt-10 space-y-10 md:mt-16">
            {steps.map(([title, text], index) => (
              <article key={title} className="flex gap-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-xl font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-primary sm:text-2xl">{title}</h3>
                  <p className="mt-3 text-sm font-medium leading-[25px] text-zinc-400">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black/[0.035] px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-primary sm:text-[32px]">
          Prêt à reprendre le contrôle de votre emploi du temps ?
        </h2>
        <Link
          href="/#liste-attente"
          className="mt-10 inline-flex w-full justify-center rounded bg-secondary px-10 py-5 text-base font-semibold text-white shadow-[0_4px_12px_rgba(216,74,34,0.20)] transition hover:bg-secondary-600 sm:w-auto"
        >
          Rejoindre la liste d&apos;attente
        </Link>
      </section>
    </motion.div>
  );
}

export default WorkerPage;
