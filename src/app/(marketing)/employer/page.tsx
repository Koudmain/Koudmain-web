'use client';
import Counter from '@/components/utils/Counter';
import { motion } from 'framer-motion';
import { Users, FileText, TrendingUp, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

function EmployerPage() {
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
            {`Ne laissez plus un imprévu`}
            <br />
            <span className="text-secondary">{'couler votre service.'}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-500">
            {`Un désistement à 11h ? Un rush terrasse imprévu ? Trouvez un extra qualifié en moins
            d'une heure et déléguez toute la paperasse à Koudmain.`}
          </p>
          <div className="flex justify-center">
            <button className="rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-black text-center">
              {`Publier une mission d'urgence`}
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {/* 1h */}
            <div>
              <div className="text-3xl font-black text-primary">
                <Counter value={1} />h
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">
                Délai moyen de matching
              </div>
            </div>

            {/* 0 */}
            <div>
              <div className="text-3xl font-black text-primary">
                <Counter value={0} />
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Papier à remplir</div>
            </div>

            {/* 100% */}
            <div>
              <div className="text-3xl font-black text-primary">
                <Counter value={100} />%
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">Profils vérifiés</div>
            </div>

            {/* 1275€ */}
            <div>
              <div className="text-3xl font-black text-secondary">
                <Counter value={1275} />€
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">
                Amende évitée (DPAE auto)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-black text-primary">
            La gestion RH, <span className="text-secondary">en mode pilotage automatique</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-[20px] bg-white p-10 shadow-sm border border-zinc-100 transition-all hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-secondary">
                <FileText size={32} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Conformité Totale</h3>
              <p className="text-zinc-500 leading-relaxed">
                {`Koudmain génère instantanément le <strong>CDDU</strong> et réalise la{' '}
                <strong>DPAE</strong> auprès de l'URSSAF. Vous êtes protégé, sans lever le petit
                doigt.`}
              </p>
            </div>

            <div className="group rounded-[20px] bg-white p-10 shadow-sm border border-zinc-100 transition-all hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-primary">
                <Users size={32} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Qualité Garantie</h3>
              <p className="text-zinc-500 leading-relaxed">
                {`Accédez à des profils notés par vos confrères. Fini les "no-shows" : notre système
                de notation bidirectionnel assure le sérieux des extras.`}
              </p>
            </div>

            <div className="group rounded-[20px] bg-white p-10 shadow-sm border border-zinc-100 transition-all hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-secondary">
                <TrendingUp size={32} strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">Maîtrise des Coûts</h3>
              <p className="text-zinc-500 leading-relaxed">
                Pas de frais fixes cachés. Une commission transparente uniquement sur les missions
                réalisées. Rentabilisez chaque heure de travail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-black text-primary mb-6">
                Reprenez le contrôle sur <span className="text-secondary">votre planning</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Publication d'annonce en 30 secondes",
                  'Algorithme de matching temps réel',
                  'Signature électronique via Yousign intégrée',
                  'Paiement sécurisé et facturation automatisée',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-zinc-700">
                    <CheckCircle2 className="text-secondary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/restaurateur-souriant.png"
                alt="Un restaurateur serein utilisant l'application Koudmain en cuisine"
                width={1800}
                height={1524}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-4xl font-black text-white">
            Prêt à sauver votre prochain service ?
          </h2>
          <p className="mb-10 text-zinc-400 text-lg">
            {`Rejoignez les premiers restaurateurs qui testent Koudmain et simplifiez votre gestion
            dès aujourd'hui.`}
          </p>
          <button className="rounded-xl bg-secondary px-10 py-5 text-lg font-black text-primary transition-all hover:scale-105 active:scale-95">
            {`Créer un compte établissement`}
          </button>
        </div>
      </section>
    </motion.div>
  );
}

export default EmployerPage;
