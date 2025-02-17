import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Despre Noi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sindicatul Național Solidaritatea este dedicat protejării
            drepturilor și îmbunătățirii condițiilor de muncă pentru membrii
            săi.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Misiunea Noastră
              </h2>
              <p className="text-gray-600">
                Misiunea noastră este să reprezentăm și să protejăm interesele
                membrilor noștri, asigurând condiții de muncă echitabile și
                drepturi fundamentale pentru toți.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Valorile Noastre
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    Integritate și transparență în toate acțiunile noastre
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Solidaritate și sprijin reciproc între membri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Profesionalism și excelență în reprezentare</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-full rounded-lg overflow-hidden">
            <Image
              src="https://picsum.photos/800/600"
              alt="About us image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600">Membri Activi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Ani de Activitate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Dedicare</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-playfair font-semibold mb-4">
            Alătură-te Sindicatului Nostru
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Împreună suntem mai puternici. Devino membru al Sindicatului
            Național Solidaritatea și beneficiază de protecție și suport
            profesional.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Devino Membru
          </button>
        </div>
      </div>
    </div>
  );
}
