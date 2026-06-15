import { Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter mb-4 text-white">KOUDMAIN</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {`La solution hybride entre l'intérim et le modèle Uber pour la restauration. Mise en
              relation en temps réel pour sauver vos services.`}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-secondary">
              Plateforme
            </h3>
            <ul className="space-y-3 text-zinc-300 text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Espace Worker
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Espace Employeur
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Comment ça marche ?
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-secondary">
              Légal
            </h3>
            <ul className="space-y-3 text-zinc-300 text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  CGU / CGV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-secondary">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:koudmain.admin@gmail.com"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-secondary transition-colors"
              >
                <Mail size={16} />
                koudmain.admin@gmail.com
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="bg-zinc-700 p-2 rounded-full hover:bg-[#0077b5] transition-all"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center md:text-center">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Koudmain. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
