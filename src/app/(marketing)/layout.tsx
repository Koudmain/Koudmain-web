"use client";
import React from 'react';
import Footer from '@/components/showcase/Footer';
import Header from '@/components/showcase/Header';

function MarketingLayout({ children }: { children: React.ReactNode })
{
  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      <Header />
      <main className="grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
