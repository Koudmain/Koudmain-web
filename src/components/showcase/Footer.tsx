import Link from 'next/link';
import { Link as LinkIcon, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary px-6 py-14 text-white lg:px-[7.65%] lg:py-[56px]">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              KOUD<span className="text-secondary">MAIN</span>
            </Link>
            <p className="mt-5 max-w-[285px] text-[15px] leading-5 text-zinc-400">
              Votre allié recrutement express pour la restauration. Trouvez un extra qualifié en
              moins d&apos;une heure, en toute conformité.
            </p>
          </div>
          <div className="col-span-1">
            <FooterColumn
              title="Plateforme"
              links={[
                ['Pour les travailleurs', '/worker'],
                ['Pour les employeurs', '/employer'],
                ['Comment ça marche ?', '/#comment-ca-marche'],
              ]}
            />
          </div>
          <div className="col-span-1">
            <FooterColumn
              title="Légal"
              links={[
                ['Mentions légales', '#'],
                ['CGU / CGV', '#'],
                ['Confidentialité', '#'],
              ]}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-medium text-secondary">Contact</h2>
            <a
              href="mailto:koudmain.admin@gmail.com"
              className="mt-5 flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
            >
              <Mail size={20} /> koudmain.admin@gmail.com
            </a>
            <a
              href="#"
              aria-label="Koudmain sur LinkedIn"
              className="mt-6 grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-secondary"
            >
              <LinkIcon size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/15 pt-6 text-center text-sm text-white/30 md:mt-12 md:pt-10">
          © 2026 Koudmain. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h2 className="text-lg font-medium text-secondary">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm text-white/75">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="transition hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
