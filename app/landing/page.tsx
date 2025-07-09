import React from "react";
import ImageWithGridBg from "@/components/markdown/image-bg";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 flex flex-col">
      {/* Header */}
      <header className="w-full py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          NebulaBot
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Le bot Discord tout-en-un pour la modération, l’automatisation et l’animation de votre communauté.
        </p>
        <Link
          href="https://discord.com/oauth2/authorize?client_id=TON_ID_BOT&scope=bot"
          className="mt-8 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg transition-colors"
        >
          Inviter sur mon serveur
        </Link>
      </header>

      {/* Fonctionnalités */}
      <section className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        <div className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🛡️</span>
          <h2 className="font-bold text-lg mb-1">Modération avancée</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm text-center">Filtres automatiques, logs, anti-spam, gestion des rôles et bien plus.</p>
        </div>
        <div className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🤖</span>
          <h2 className="font-bold text-lg mb-1">Automatisations</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm text-center">Réponses automatiques, messages de bienvenue, gestion des salons, rappels…</p>
        </div>
        <div className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🎉</span>
          <h2 className="font-bold text-lg mb-1">Animation & Fun</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm text-center">Jeux, sondages, giveaways, commandes fun et outils communautaires.</p>
        </div>
      </section>

      {/* Aperçu visuel */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-200">Aperçu du bot</h2>
        <ImageWithGridBg src="/public-og.png" alt="Aperçu du bot Discord" />
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-neutral-500 text-sm mt-auto">
        © {new Date().getFullYear()} NebulaBot — Non affilié à Discord.
      </footer>
    </main>
  );
} 