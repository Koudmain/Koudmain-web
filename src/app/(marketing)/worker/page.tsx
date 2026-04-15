"use client";
import { motion } from 'framer-motion';
import { Zap, Wallet, Calendar, ShieldCheck } from 'lucide-react';

function WorkerPage()
{
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col"
    >
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl text-primary">
            Travaillez quand vous voulez, <br />
            <span className="text-secondary">où vous voulez.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-500">
            Un cours annulé ? Un week-end de libre ? Connectez-vous sur Koudmain, trouvez une mission en 1 clic et soyez payé rapidement.
          </p>
          <div className="flex justify-center">
            <button className="rounded-xl bg-secondary px-8 py-4 font-bold text-white transition-all hover:bg-black hover:text-white text-center">
              Devenir Worker Koudmain
            </button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-[20px] bg-white p-8 border border-zinc-100 shadow-sm">
              <div className="mb-4 text-secondary"><Zap size={28} /></div>
              <h3 className="mb-2 text-xl font-bold text-primary">Missions Flash</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Trouvez des missions pour le jour-même. Idéal pour rentabiliser un imprévu dans votre emploi du temps.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-8 border border-zinc-100 shadow-sm">
              <div className="mb-4 text-secondary"><Wallet size={28} /></div>
              <h3 className="mb-2 text-xl font-bold text-primary">Rémunération Juste</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Des tarifs transparents et attractifs. Vous connaissez votre gain avant même d'accepter la mission.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-8 border border-zinc-100 shadow-sm">
              <div className="mb-4 text-secondary"><ShieldCheck size={28} /></div>
              <h3 className="mb-2 text-xl font-bold text-primary">Protection Totale</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Pas de travail au noir. Chaque mission est couverte par un contrat CDDU généré automatiquement.
              </p>
            </div>

            <div className="rounded-[20px] bg-white p-8 border border-zinc-100 shadow-sm">
              <div className="mb-4 text-secondary"><Calendar size={28} /></div>
              <h3 className="mb-2 text-xl font-bold text-primary">Liberté Absolue</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Pas de patron, pas d'engagement. Vous choisissez vos horaires, vos lieux et vos missions.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-16 text-center text-4xl font-black text-primary">Encaisser vos premiers euros en <span className="text-secondary">3 étapes</span></h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">1</div>
              <div>
                <h4 className="text-2xl font-bold text-primary">Créez votre profil</h4>
                <p className="text-zinc-500 mt-2">Renseignez vos expériences et vos spécialités (service, bar, cuisine). Nous vérifions votre profil pour garantir la qualité du réseau.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">2</div>
              <div>
                <h4 className="text-2xl font-bold text-primary">Postulez en un éclair</h4>
                <p className="text-zinc-500 mt-2">Recevez des notifications dès qu'un restaurant autour de vous a besoin d'un Koudmain. Un clic pour manifester votre intérêt.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">3</div>
              <div>
                <h4 className="text-2xl font-bold text-primary">Travaillez et encaissez</h4>
                <p className="text-zinc-500 mt-2">Réalisez votre mission. Une fois terminée, le contrat est signé numériquement et votre paiement est déclenché via Stripe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-center text-white">
        <h2 className="mb-6 text-3xl font-black">Prêt à reprendre le contrôle de votre emploi du temps ?</h2>
        <button className="rounded-xl bg-secondary px-10 py-5 text-lg font-black text-primary transition-all hover:scale-105 active:scale-95">
          Rejoindre la liste d'attente
        </button>
      </section>
    </motion.div>
  );
}

export default WorkerPage;