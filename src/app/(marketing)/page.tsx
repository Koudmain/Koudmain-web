'use client';
import { Clock, ShieldCheck, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col"
    >
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
            Trouvez votre remplaçant <br />
            <span className="text-secondary">en un instant.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-500">
            {`Koudmain est la solution hybride entre l'intérim et le modèle Uber pour la restauration.
            Mise en relation en temps réel pour sauver vos services.`}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/employer"
              className="rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-black text-center"
            >
              Je recrute (Employeur)
            </Link>
            <Link
              href="/worker"
              className="rounded-xl border-2 border-zinc-200 bg-white px-8 py-4 font-bold transition-all hover:border-secondary-300 text-center"
            >
              Je travaille (Travailleur)
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-black tracking-tight text-primary">
            Pourquoi choisir <span className="text-secondary">Koudmain</span> ?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-[20px] bg-white p-10 shadow-sm border border-zinc-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-secondary">
                <FileCheck size={32} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Zéro Administratif</h3>
              <p className="text-zinc-500 leading-relaxed">
                Oubliez la paperasse. Nous automatisons le <strong>CDDU</strong>, la{' '}
                <strong>DPAE</strong> et la signature électronique sécurisée.
              </p>
            </div>

            <div className="group rounded-[20px] bg-white p-10 shadow-sm border border-zinc-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Clock size={32} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Urgence Maîtrisée</h3>
              <p className="text-zinc-500 leading-relaxed">
                {`Un désistement à 11h ? Trouvez un remplaçant qualifié en{' '}
                <strong>moins d'une heure</strong> pour sauver votre service.`}
              </p>
            </div>

            <div className="group rounded-[20px] bg-white p-10 shadow-sm border border-zinc-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-secondary">
                <ShieldCheck size={32} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Confiance Totale</h3>
              <p className="text-zinc-500 leading-relaxed">
                Recrutez sereinement grâce à notre système de{' '}
                <strong>notation bidirectionnel</strong> et la vérification rigoureuse des profils.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;
