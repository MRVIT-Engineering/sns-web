import { Suspense } from 'react';
import Navbar from '@/components/navigation/Navbar';

export default function LeadershipPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense>
        <Navbar showSearchBar={false} />
      </Suspense>

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-center">Conducerea SNS</h1>

        <div className="space-y-8">
          {/* Adunarea Generala */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Adunarea Generală</h2>
            <p className="text-gray-700 leading-relaxed">
              Adunarea Generala a SNS este organul de conducere suprem si are un caracter deliberativ si decizional.
              Adunarea Generală a S.N.S. este alcătuită din delegaţii grupelor sindicale, membrii Biroului Executiv si
              membrii comisiei de cenzori.
            </p>
          </section>

          {/* Consiliul National */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Consiliul Național</h2>
            <p className="text-gray-700 leading-relaxed">
              Consiliul National al SNS este organul de conducere cu caracter deliberativ şi decizional care organizează
              întreaga activitate a S.N.S. în perioada dintre două adunări generale, în conformitate cu hotararile
              adoptate de Adunarea Generală. Consiliul National este alcătuit din liderii judeteni si regionali ai SNS
              si membrii Biroului Executiv.
            </p>
          </section>

          {/* Biroul Executiv */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Biroul Executiv</h2>
            <p className="text-gray-700 leading-relaxed">
              Biroul Executiv al SNS este organul de conducere executiv, permanent, ce realizează conducerea operativă a
              S.N.S. şi duce la îndeplinire hotararile Adunării Generale a S.N.S. si ale Consiliului Naţional. Biroul
              Executiv este format din preşedinte, trei vicepreşedinţi si secretarul general.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
