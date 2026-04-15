"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

function Header()
{
  const pathname = usePathname();

  const tabs = [
    { id: '/', label: <Home size={18} />, href: '/' },
    { id: '/worker', label: 'Travailleur', href: '/worker' },
    { id: '/employer', label: 'Employeur', href: '/employer' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">

          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo_black_transparant.png"
              alt="Logo Koudmain"
              width={40}
              height={40}
              className="h-8 w-8 object-contain transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-2xl font-black tracking-tighter text-primary">
              KOUDMAIN
            </span>
          </Link>

          <div className="relative hidden items-center gap-1 rounded-full bg-zinc-100 p-1 md:flex">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`relative z-10 rounded-full px-6 py-1.5 text-sm font-medium transition-colors ${
                  pathname === tab.href ? 'text-primary' : 'text-zinc-500'
                }`}
              >
                {pathname === tab.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 z-[-1] rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm font-bold hover:text-secondary transition-colors">
            Connexion
          </button>
          <button className="rounded-full bg-secondary px-6 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition-transform hover:scale-105 active:scale-95">
            S'inscrire
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
