import { Suspense } from 'react';
import Navbar from '@/components/navigation/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense>
        <Navbar showSearchBar={false} />
      </Suspense>

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Contact</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suntem aici pentru a vă ajuta. Nu ezitați să ne contactați pentru orice întrebare sau asistență.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Office Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">Sediul Central</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Colonia Faget nr. 10i</p>
                  <p>Cluj-Napoca, Cluj</p>
                  <p>Cod Poștal: 400497</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">Program</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Luni - Vineri: 09:00 - 17:00</p>
                  <p>Sâmbătă - Duminică: Închis</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-playfair font-semibold mb-4">Contact Direct</h2>
                <div className="space-y-2 text-gray-600">
                  <p>
                    Telefon:{' '}
                    <a href="tel:+40123456789" className="text-blue-600 hover:text-blue-700">
                      +40 732 717 194
                    </a>
                  </p>
                  <p>
                    Email:{' '}
                    <a href="mailto:sindicatul@solidaritatea.com" className="text-blue-600 hover:text-blue-700">
                      sindicatul@solidaritatea.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          {/* <div className="mt-16 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-playfair font-semibold mb-4">Asistență de Urgență</h2>
            <p className="text-gray-600 mb-4">
              Pentru situații urgente în afara programului de lucru, vă rugăm să ne contactați la:
            </p>
            <p className="text-blue-600 font-semibold">
              Telefon Urgență:{' '}
              <a href="tel:+40123456789" className="hover:text-blue-700">
                +40 123 456 789
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
