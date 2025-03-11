import { Suspense } from 'react';
import Image from 'next/image';

import Navbar from '@/components/navigation/Navbar';
import { AboutCallToAction } from '@/components/common/AboutCallToAction';

export default function AboutPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense>
        <Navbar showSearchBar={false} />
      </Suspense>

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Despre Noi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sindicatul Național Solidaritatea este dedicat protejării drepturilor și îmbunătățirii condițiilor de muncă
            pentru membrii săi.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">Misiunea Noastră</h2>
              <p className="text-gray-600">
                Sindicatul National Solidaritatea s-a infiintat in anul 2017, la solicitarea mai multor angajati din
                ANAF, angajati nemultumiti de reprezentarea sindicala oferita de alte organizatii pana in acel moment.
                <br />
                <br />
                Este un sindicat cu acoperire nationala, care reuneste in principal angajati din cadrul Ministerului
                Finantelor, ANAF si institutiile subordonate acestora.
                <br />
                <br />
                In anul 2022 SNS a realizat o fuziune prin absorbtie cu Sindicatul Finantistilor din Administratia
                Fiscala. SNS este membru fondator al Federatiei Solidaritatea, federatie care este reprezentativa la
                nivelul ANAF si a unitatilor subordonate,iar aceasta este afiliata la Confederatia Blocul National
                Sindical.
                <br />
                <br />
                Suntem un sindicat dinamic, care pune pe primul loc membrul si drepturile acestuia. Pe parcursul
                activitatii noastre am initiat si finalizat mai multe procese la nivel national. In prezent avem
                aproximativ 100 actiuni pe rolul instantelor de judecata.
                <br />
                <br />
                SNS isi propune sa devina cea mai importanta organizatie de profil din sistemul administrativ. Daca si
                tu doresti acest lucru, poti sa ni te alaturi completand adeziunea de la sectiunea Devino membru. Cu
                ajutorul tau vom fi mai puternici, ceea ce inseamna ca iti vom putea apara mult mai bine drepturile.
              </p>
            </section>

            {/* <section>
              <h2 className="text-2xl font-playfair font-semibold mb-4">Valorile Noastre</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Integritate și transparență în toate acțiunile noastre</span>
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
            </section> */}
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-full rounded-lg overflow-hidden">
            <Image
              src="/about.jpeg"
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
              <div className="text-4xl font-bold text-blue-600 mb-2">{new Date().getFullYear() - 2017}</div>
              <div className="text-gray-600">Ani de Activitate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Dedicare</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <AboutCallToAction />
      </div>
    </div>
  );
}
