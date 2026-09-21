'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Clock, FileCheck, Loader2, Mail, ShieldCheck } from 'lucide-react';
import { createElement, useState, type SubmitEvent } from 'react';
import { questions, steps } from '@/constant/marketing';

export const benefits = [
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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || status === 'loading') return;

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Format d’adresse email invalide.');
      return;
    }

    if (honeypot && honeypot.trim() !== '') {
      setStatus('success');
      setEmail('');
      setHoneypot('');
      return;
    }

    try {
      const storageKey = `kdm_waitlist_${trimmedEmail}`;
      const lastSent = localStorage.getItem(storageKey);
      if (lastSent && Date.now() - Number(lastSent) < 5 * 60 * 1000) {
        setStatus('success');
        setEmail('');
        return;
      }
    } catch {
      // LocalStorage might be unavailable in some private windows
    }

    setStatus('loading');
    setErrorMessage('');

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || '';

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          source: compact ? 'bottom_cta' : 'hero',
        }),
        mode: 'no-cors',
      });

      try {
        localStorage.setItem(`kdm_waitlist_${trimmedEmail}`, Date.now().toString());
      } catch {
        // Ignore
      }

      setStatus('success');
      setEmail('');
      setHoneypot('');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.',
      );
    }
  };

  if (status === 'success')
    return (
      <div className="rounded-lg bg-secondary/10 px-5 py-4 text-center text-sm font-semibold text-secondary">
        Merci ! Vous êtes bien inscrit sur la liste d’attente.
      </div>
    );

  return (
    <form
      onSubmit={submit}
      className={`flex w-full flex-col gap-3 sm:flex-row ${compact ? '' : 'max-w-[480px]'}`}
    >
      <div className="absolute -left-[9999px] -top-[9999px] opacity-0" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      <div className="w-full sm:w-auto sm:flex-1">
        <label className="flex h-[52px] w-full min-w-0 shrink-0 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/15">
          <Mail size={20} className="shrink-0 text-zinc-400" />
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === 'error') setStatus('idle');
            }}
            required
            disabled={status === 'loading'}
            placeholder="Votre adresse email..."
            aria-label="Votre adresse email"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-primary outline-none placeholder:text-zinc-400 disabled:opacity-50"
          />
        </label>
        {status === 'error' && (
          <p className="mt-2 text-left text-xs font-medium text-error">{errorMessage}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex h-[52px] w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(216,74,34,0.20)] transition hover:bg-secondary-600 disabled:opacity-75 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Envoi...</span>
          </>
        ) : (
          'Rejoindre'
        )}
      </button>
    </form>
  );
}

export default function HomeClient() {
  const [openQuestion, setOpenQuestion] = useState(-1);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden"
    >
      <section
        id="liste-attente"
        className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 py-16 sm:px-10 lg:min-h-[700px] lg:flex-row lg:gap-16 lg:px-[7.65%] lg:py-20"
      >
        <div className="order-2 flex-1 w-full text-center lg:order-1 lg:text-left">
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
          <div className="mx-auto mt-8 w-full max-w-[480px] lg:mx-0">
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
              src="/images/waitlist-phone-v3.png"
              alt="Aperçu de l’application Koudmain"
              width={1479}
              height={2160}
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
          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-12">
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
                <article
                  key={question}
                  className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left text-base font-semibold text-primary sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span>{question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-zinc-400 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-180 text-secondary' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.2, ease: 'easeInOut' },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-5 text-base font-normal leading-relaxed text-zinc-600 sm:px-6 sm:pb-6">
                          {answer}
                        </p>
                      </motion.div>
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
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-[40px] sm:leading-tight">
            Prêt à révolutionner votre gestion RH ?
          </h2>
          <p className="mt-4 text-lg font-medium leading-[26px] text-zinc-500">
            Ne laissez plus un imprévu couler votre prochain service ou limiter votre liberté.
            Rejoignez la liste d’attente fondatrice dès aujourd’hui.
          </p>
          <div className="mx-auto mt-10 w-full max-w-[520px]">
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
