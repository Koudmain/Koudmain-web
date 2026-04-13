import Footer from '@/components/showcase/Footer';
import React from 'react';

export default function MarketingLayout({ children }: { children: React.ReactNode })
{
  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black tracking-tighter text-primary">KOUDMAIN</span>

            <div className="hidden items-center gap-1 rounded-full bg-zinc-100 p-1 md:flex">
              <button className="rounded-full bg-white px-6 py-1.5 text-sm font-bold shadow-sm">Travailleur</button>
              <button className="rounded-full px-6 py-1.5 text-sm font-medium text-zinc-500 hover:text-primary">Employeur</button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-sm font-bold">Connexion</button>
            <button className="rounded-full bg-secondary px-6 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition-transform hover:scale-105">
              S'inscrire
            </button>
          </div>
        </div>
      </nav>
      <main className="grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}