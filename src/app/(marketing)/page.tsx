'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Clock, FileCheck, Mail, ShieldCheck } from 'lucide-react';
import { createElement, FormEvent, useState } from 'react';

const benefits = [
  {
    title: 'Zéro Administratif',
    icon: FileCheck,
    text: (
      <>
        Oubliez la paperasse. Nous automatisons le <strong>CDDU</strong>, la <strong>DPAE</strong>{' '}
        et la signature électronique sécurisée.
      </>
    ),
  },
  {
    title: 'Urgence Maîtrisée',
    icon: Clock,
    text: (
      <>
        Un désistement à 11h ? Trouvez un remplaçant qualifié en{' '}
        <strong>moins d&apos;une heure</strong> pour sauver votre service.
      </>
    ),
  },
  {
    title: 'Confiance Totale',
    icon: ShieldCheck,
    text: (
      <>
        Recrutez sereinement grâce à notre système de <strong>notation bidirectionnelle</strong> et
        la vérification rigoureuse des profils.
      </>
    ),
  },
];

const steps = [
  [
    'Rejoignez la liste',
    'Saisissez votre email en haut de cette page. Nous vous positionnerons sur notre file d’attente en fonction de votre zone géographique.',
  ],
  [
    'Recevez votre invitation',
    'Dès qu’une opportunité ou qu’un vivier d’extras s’ouvre près de chez vous, vous recevez une invitation VIP de validation.',
  ],
  [
    'Commencez l’aventure',
    'Configurez votre profil d’employeur ou d’extra en 2 minutes chrono et commencez vos missions express en toute sécurité.',
  ],
];

const questions = [
  [
    'Qu’est-ce que Koudmain ?',
    'Koudmain est l’outil de mise en relation express pour la restauration. Nous mettons en relation les restaurateurs qui font face à des imprévus avec des extras de confiance, qualifiés et disponibles en moins d’une heure.',
  ],
  [
    'Quand la plateforme sera-t-elle lancée ?',
    'Le lancement officiel est prévu pour le deuxième trimestre 2026. L’accès sera ouvert progressivement, ville par ville, en commençant par l’Île-de-France.',
  ],
  [
    'L’inscription sur la liste d’attente m’engage-t-elle à quelque chose ?',
    'Pas du tout. L’inscription est gratuite et sans engagement. Elle nous permet uniquement de déployer le service rapidement là où le besoin est le plus fort.',
  ],
  [
    'Comment se passe la gestion administrative et légale ?',
    'Koudmain prend tout en charge : génération automatisée des CDDU, déclaration préalable à l’embauche auprès de l’URSSAF, facturation et signatures électroniques sécurisées.',
  ],
];

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };
  if (submitted)
    return (
      <p className="rounded-lg bg-secondary/10 px-5 py-4 text-center text-sm font-semibold text-secondary">
        Merci ! Nous vous recontacterons très bientôt.
      </p>
    );
  return (
    <form onSubmit={submit} className={`flex gap-3 ${compact ? 'w-full' : 'w-full max-w-[480px]'}`}>
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/15">
        <Mail size={20} className="shrink-0 text-zinc-400" />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Votre adresse email..."
          aria-label="Votre adresse email"
          className="min-w-0 flex-1 bg-transparent text-[15px] text-primary outline-none placeholder:text-zinc-400"
        />
      </label>
      <button
        type="submit"
        className="h-[52px] shrink-0 rounded-lg bg-secondary px-5 text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(216,74,34,0.20)] transition hover:bg-secondary-600"
      >
        Rejoindre
      </button>
    </form>
  );
}

function HomePage() {
  const [openQuestion, setOpenQuestion] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden"
    >
      <section
        id="liste-attente"
        className="mx-auto flex min-h-[700px] max-w-[1440px] flex-col items-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-16 lg:px-[7.65%] lg:py-20"
      >
        <div className="order-2 flex-1 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-[578px] text-4xl font-bold leading-[1.18] tracking-tight text-primary sm:text-5xl lg:text-[52px] lg:leading-[62px]"
          >
            Soyez les premiers à rejoindre{' '}
            <span className="font-extrabold text-secondary">Koudmain.</span>
          </motion.h1>
          <p className="mt-4 max-w-[578px] text-lg font-medium leading-7 text-zinc-500 lg:text-xl lg:leading-[30px]">
            La plateforme de recrutement express en restauration. Que vous soyez restaurateur ou
            extra qualifié, inscrivez-vous pour un accès prioritaire à notre lancement.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 flex flex-1 justify-center lg:order-2"
        >
          <div className="h-[400px] w-[296px] rounded-[32px] border-4 border-zinc-200 bg-zinc-50 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:h-[500px] sm:w-[370px] sm:rounded-[40px] sm:p-4 lg:h-[540px] lg:w-[400px]">
            <Image
              src="/images/figma/waitlist-phone.png"
              alt="Aperçu de l’application Koudmain"
              width={864}
              height={1184}
              priority
              className="size-full rounded-[23px] object-cover sm:rounded-[28px]"
            />
          </div>
        </motion.div>
      </section>
      <section className="bg-black/[0.035] px-6 py-16 lg:px-10 lg:py-11">
        <div className="mx-auto max-w-[1118px]">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-primary sm:text-[40px]">
            Pourquoi choisir <span className="text-secondary">Koudmain ?</span>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map(({ title, icon, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="min-h-[226px] rounded-[20px] bg-white p-7 shadow-[0_2px_0_rgba(49,49,49,0.18)]"
              >
                {createElement(icon, { size: 24, className: 'text-secondary', strokeWidth: 1.8 })}
                <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-[25px] text-zinc-400">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="comment-ca-marche" className="px-6 py-20 sm:px-10 lg:px-[7.65%] lg:py-[100px]">
        <div className="mx-auto max-w-[1220px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Votre intégration en{' '}
              <span className="font-extrabold text-secondary">3 étapes simples</span>
            </h2>
            <p className="mt-4 text-lg font-medium text-zinc-500">
              Une fois inscrit, voici le parcours d’accès exclusif à notre réseau.
            </p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {steps.map(([title, text], index) => (
              <div key={title}>
                <div className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-xl font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-primary">{title}</h3>
                </div>
                <p className="mt-5 text-sm font-medium leading-[22px] text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-zinc-50 px-6 py-20 sm:px-10 lg:px-[15.25%] lg:py-[100px]">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">Questions Fréquentes</h2>
            <p className="mt-4 text-lg font-medium text-zinc-500">
              Tout ce qu’il faut savoir sur notre liste d’attente.
            </p>
          </div>
          <div className="mt-14 space-y-4">
            {questions.map(([question, answer], index) => {
              const isOpen = openQuestion === index;
              return (
                <article key={question} className="rounded-xl border border-zinc-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left text-base font-semibold text-primary"
                  >
                    <span>{question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-6 pb-6 text-sm font-medium leading-[22px] text-zinc-500"
                      >
                        {answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 text-center sm:px-10 lg:px-[7.65%] lg:py-[100px]">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-[40px]">
            Prêt à révolutionner votre gestion RH ?
          </h2>
          <p className="mt-4 text-lg font-medium leading-[26px] text-zinc-500">
            Ne laissez plus un imprévu couler votre prochain service ou limiter votre liberté.
            Rejoignez la liste d’attente fondatrice dès aujourd’hui.
          </p>
          <div className="mx-auto mt-10 max-w-[520px]">
            <WaitlistForm compact />
          </div>
        </div>
        <div className="mt-10 text-sm text-zinc-400">
          <Link href="/worker" className="font-semibold text-secondary hover:underline">
            Je suis travailleur
          </Link>
          <span className="mx-3">ou</span>
          <Link href="/employer" className="font-semibold text-secondary hover:underline">
            je recrute
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;
