'use client';

import Navbar from '@/components/navigation/Navbar';

const affiliations = [
  {
    name: 'Federatia Solidaritatea',
    description: 'Federatie reprezentativa la nivelul ANAF si al unitatilor subordonate',
  },
  {
    name: 'Blocul National Sindical',
    description: 'Confederatie reprezentativa la nivel national',
  },
  {
    name: 'Confederatia Europeana a Sindicatelor',
    description: 'Afiliere internationala',
  },
  {
    name: 'Confederatia Internationala a Sindicatelor',
    description: 'Afiliere internationala',
  },
];

export default function AffiliationsPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="pt-16">
        <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <h1 className="text-2xl sm:text-3xl font-playfair font-bold mb-6 sm:mb-8 text-center">Afiliere</h1>

          <div className="prose prose-sm sm:prose-lg mb-8 sm:mb-16 max-w-none">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              SNS este afiliat la Federatia Solidaritatea, federatie reprezentativa la nivelul ANAF si al unitatilor
              subordonate.
            </p>

            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Federatia Solidaritatea este afiliata la Confederatia Blocul National Sindical, confederatie
              reprezentativa la nivel national.
            </p>

            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Blocul National Sindical este afiliat international la Confederatia Europeana a Sindicatelor si la
              Confederatia Internationala a Sindicatelor.
            </p>
          </div>

          {/* Affiliations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {affiliations.map((affiliation, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2 text-center">{affiliation.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base text-center">{affiliation.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
