'use client';

import { Suspense } from 'react';
import Navbar from '@/components/navigation/Navbar';

export default function ProtestePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <Suspense>
        <Navbar showSearchBar={false} />
      </Suspense>

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold mb-6 text-center">Acțiuni de protest</h1>
        <p className="text-gray-700 text-lg mb-10 text-center">
          În scopul apărării drepturilor membrilor săi, SNS a inițiat și a participat la numeroase acțiuni de protest,
          precum:
        </p>

        <h2 className="text-2xl font-semibold mb-4">Tipuri de acțiuni</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-10">
          <li>Greve de tip japonez, fără întreruperea programului de lucru;</li>
          <li>Pichetări ale diverselor instituții, printre care consiliile județene și ministerele;</li>
          <li>Mitinguri de protest în fața diverselor ministere sau a clădirii guvernului;</li>
          <li>
            Grevă cu întreruperea programului de lucru și cu suspendarea contractelor de muncă pe durata acesteia
            <span className="block text-gray-500 text-sm mt-1">
              (precizăm faptul că SNS este singurul sindicat din cadrul ANAF care a făcut grevă, în întreaga istorie a
              acestei instituții)
            </span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Galerie foto proteste</h2>
        <p className="mb-4 text-gray-700">Aici trebuie să adăugăm poze de la proteste:</p>
        <div className="flex gap-4 flex-wrap">
          <div className="w-48 h-36 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">Poza 1</div>
          <div className="w-48 h-36 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">Poza 2</div>
          {/* Adaugă mai multe poze aici */}
        </div>
      </div>
    </div>
  );
}
