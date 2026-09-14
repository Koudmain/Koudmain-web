'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Home, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { createElement, useState } from 'react';

const navigation = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/worker', label: 'Travailleur' },
  { href: '/employer', label: 'Employeur' },
];

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/6 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[71px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-[7.65%]">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Koudmain, accueil">
          <Image src="/images/logo_black_transparant.png" alt="" width={32} height={38} priority />
          <span className="text-[22px] font-semibold tracking-tight text-primary sm:text-2xl">
            KOUD<span className="text-secondary">MAIN</span>
          </span>
        </Link>
        <nav
          className="hidden rounded-full bg-black/4.5 p-1 md:flex"
          aria-label="Navigation principale"
        >
          {navigation.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative flex h-[34px] items-center justify-center rounded-full px-4 text-sm font-semibold transition-colors lg:px-5 ${active ? 'text-primary' : 'text-zinc-400 hover:text-primary'}`}
              >
                {active && (
                  <motion.span
                    layoutId="active-navigation"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_4px_4px_rgba(0,0,0,0.10)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {icon ? createElement(icon, { size: 18, strokeWidth: 1.8 }) : label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/#comment-ca-marche"
            className="text-sm font-bold text-primary transition-colors hover:text-secondary"
          >
            En savoir plus
          </Link>
          <Link
            href="/#liste-attente"
            className="rounded-full bg-secondary px-5 py-3 text-sm font-bold text-white shadow-[0_4px_12px_rgba(216,74,34,0.20)] transition hover:-translate-y-0.5 hover:bg-secondary-600"
          >
            Liste d&apos;attente
          </Link>
        </div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full text-primary md:hidden"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-[71px] border-b border-zinc-100 bg-white px-5 py-5 shadow-lg md:hidden"
            aria-label="Navigation mobile"
          >
            <div className="mx-auto flex max-w-md flex-col gap-1">
              {navigation.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-primary hover:bg-zinc-50"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/#liste-attente"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-secondary px-4 py-3 text-center font-bold text-white"
              >
                Liste d&apos;attente
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
