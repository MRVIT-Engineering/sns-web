'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navigation/Navbar';

const affiliations = [
  {
    name: 'Federatia Solidaritatea',
    logo: '/logos/federatia-solidaritatea.png',
    description: 'Federatie reprezentativa la nivelul ANAF si al unitatilor subordonate',
  },
  {
    name: 'Blocul National Sindical',
    logo: '/logos/bns.png',
    description: 'Confederatie reprezentativa la nivel national',
  },
  {
    name: 'Confederatia Europeana a Sindicatelor',
    logo: '/logos/ces.png',
    description: 'Afiliere internationala',
  },
  {
    name: 'Confederatia Internationala a Sindicatelor',
    logo: '/logos/ituc.png',
    description: 'Afiliere internationala',
  },
];

export default function AffiliationsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % affiliations.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Get the three items to display
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % affiliations.length;
      items.push(affiliations[index]);
    }
    return items;
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="pt-16">
        <main className="max-w-6xl mx-auto w-full px-4 py-16">
          <h1 className="text-3xl font-playfair font-bold mb-8 text-center">Afiliere</h1>

          <div className="prose prose-lg mb-16">
            <p className="mb-4">
              SNS este afiliat la Federatia Solidaritatea, federatie reprezentativa la nivelul ANAF si al unitatilor
              subordonate.
            </p>

            <p className="mb-4">
              Federatia Solidaritatea este afiliata la Confederatia Blocul National Sindical, confederatie
              reprezentativa la nivel national.
            </p>

            <p className="mb-4">
              Blocul National Sindical este afiliat international la Confederatia Europeana a Sindicatelor si la
              Confederatia Internationala a Sindicatelor.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="relative overflow-hidden">
            <div className="flex justify-center gap-8 transition-all duration-500 ease-in-out">
              {getVisibleItems().map((affiliation, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={affiliation.logo}
                      alt={affiliation.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 128px"
                    />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold mb-2 text-center">{affiliation.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{affiliation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
