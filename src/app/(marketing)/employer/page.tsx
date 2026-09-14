'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, TrendingUp, Users } from 'lucide-react';
import { createElement } from 'react';

const metrics = [
  ['1h', 'Délai moyen de matching'],
  ['0', 'Papier à remplir'],
  ['100%', 'Profils vérifiés'],
  ['1 275 €', 'Amende évitée par embauche'],
];
const benefits = [
  {
    title: 'Conformité Totale',
    text: 'Koudmain génère instantanément le CDDU et réalise la DPAE auprès de l’URSSAF. Vous êtes protégé, sans lever le petit doigt.',
    icon: FileText,
  },
  {
    title: 'Qualité Garantie',
    text: 'Accédez à des profils notés par vos confrères. Fini les no-shows : notre système de notation assure le sérieux des extras.',
    icon: Users,
  },
  {
    title: 'Maîtrise des Coûts',
    text: 'Pas de frais fixes cachés. Une commission transparente uniquement sur les missions réalisées. Rentabilisez chaque heure de travail.',
    icon: TrendingUp,
  },
];
const features = [
  'Publication d’annonce en 30 secondes',
  'Algorithme de matching temps réel',
  'Signature électronique intégrée',
  'Paiement sécurisé et facturation automatisée',
];

function EmployerPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <section className="px-6 py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl lg:text-[44px]">
            Ne laissez plus un imprévu
            <br />
            <span className="text-secondary">couler votre service.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-base font-medium leading-6 text-zinc-400">
            Un désistement à 11h ? Un rush terrasse imprévu ? Trouvez un extra qualifié en moins
            d’une heure et déléguez toute la paperasse à Koudmain.
          </p>
          <Link
            href="/#liste-attente"
            className="mt-10 inline-flex rounded bg-secondary px-10 py-5 text-base font-semibold text-white shadow-[0_4px_12px_rgba(216,74,34,0.20)] transition hover:bg-secondary-600"
          >
            Rejoindre la liste d&apos;attente
          </Link>
        </div>
      </section>
      <section className="border-y border-zinc-100 px-6 py-10">
        <div className="mx-auto grid max-w-[1045px] grid-cols-2 gap-8 text-center md:grid-cols-4">
          {metrics.map(([value, label], index) => (
            <div key={label}>
              <p
                className={`text-2xl font-semibold ${index === 3 ? 'text-secondary' : 'text-primary'}`}
              >
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-black/[0.035] px-6 py-16">
        <div className="mx-auto max-w-[1148px]">
          <h2 className="text-center text-3xl font-semibold text-primary sm:text-4xl">
            La gestion RH, <span className="text-secondary">en mode pilotage automatique</span>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map(({ title, text, icon }) => (
              <article
                key={title}
                className="min-h-[226px] rounded-[20px] bg-white p-7 shadow-[0_2px_0_rgba(49,49,49,0.18)]"
              >
                {createElement(icon, { size: 24, className: 'text-secondary', strokeWidth: 1.8 })}
                <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-[25px] text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 lg:py-[70px]">
        <div className="mx-auto flex max-w-[858px] flex-col items-center gap-12 md:flex-row md:gap-24">
          <div className="max-w-[469px]">
            <h2 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              Reprenez le contrôle sur <span className="text-secondary">votre planning</span>
            </h2>
            <ul className="mt-10 space-y-5">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 text-sm font-medium text-zinc-500"
                >
                  <CheckCircle2 size={24} className="shrink-0 text-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/restaurateur-souriant.png"
            alt="Restaurateur souriant"
            width={1140}
            height={1524}
            className="h-[360px] w-[240px] rounded-sm object-cover shadow-lg md:h-[427px] md:w-[285px]"
          />
        </div>
      </section>
      <section className="bg-black/[0.035] px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-primary sm:text-[32px]">
          Prêt à sauver votre prochain service ?
        </h2>
        <p className="mx-auto mt-5 max-w-[659px] text-base font-medium text-zinc-400">
          Rejoignez les premiers restaurateurs qui testent Koudmain et simplifiez votre gestion dès
          aujourd’hui.
        </p>
        <Link
          href="/#liste-attente"
          className="mt-10 inline-flex rounded bg-secondary px-10 py-5 text-base font-semibold text-white shadow-[0_4px_12px_rgba(216,74,34,0.20)] transition hover:bg-secondary-600"
        >
          Rejoindre la liste d&apos;attente
        </Link>
      </section>
    </motion.div>
  );
}

export default EmployerPage;
