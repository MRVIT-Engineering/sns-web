'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 text-center md:text-left">
            <Link href="/" className="flex items-center mb-4 justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Sindicatul Național Solidaritatea Logo"
                width={250}
                height={250}
                className="w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              Sindicatul Național Solidaritatea - Pentru drepturile și bunăstarea membrilor noștri.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Link-uri Rapide</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 hover:text-blue-600 text-sm">
                  Știri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resurse</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.open('/adeziune.pdf', '_blank')}
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Formular Adeziune
                </button>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-blue-600 text-sm">
                  Documente Utile
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">
                  Întrebări Frecvente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start justify-center md:justify-start">
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Colonia Faget nr. 10i, Cluj-Napoca</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:sindicatul@solidaritatea.com" className="hover:text-blue-600">
                  sindicatul@solidaritatea.com
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+40732717194" className="hover:text-blue-600">
                  +40 732 717 194
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sindicatul Național Solidaritatea. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm">
                Politica de Confidențialitate
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
