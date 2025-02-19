'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  showSearchBar?: boolean;
};

function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="search"
      placeholder="Caută știri..."
      className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
}

export default function Navbar({ showSearchBar = false }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleDownload = () => {
    const pdfUrl = '/adeziune.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'adeziune.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-playfair text-blue-600">SnS</span>
              </Link>
            </div>

            {showSearchBar && (
              <div className="flex-1 max-w-xl px-8 hidden md:flex items-center justify-center">
                <div className="w-full">
                  <Suspense fallback={<div className="w-full h-10 bg-gray-100 rounded-full animate-pulse" />}>
                    <SearchInput />
                  </Suspense>
                </div>
              </div>
            )}

            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                Despre Noi
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-blue-600">
                Știri
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <button
                onClick={handleDownload}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Devino Membru
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              {showSearchBar && (
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-md text-gray-600 hover:text-blue-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 ml-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          {isSearchOpen && showSearchBar && (
            <div className="md:hidden px-2 pb-3">
              <Suspense>
                <SearchInput />
              </Suspense>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Full-screen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-16 flex justify-end items-center px-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] space-y-8">
          {[
            { href: '/', text: 'Acasă' },
            { href: '/about', text: 'Despre Noi' },
            { href: '/news', text: 'Știri' },
            { href: '/contact', text: 'Contact' },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-playfair text-gray-800 hover:text-blue-600
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                delay-[${index * 100}ms]`}
            >
              {link.text}
            </Link>
          ))}
          <button
            onClick={handleDownload}
            className={`text-3xl font-playfair text-blue-600 hover:text-blue-700
              transform transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              delay-[400ms]`}
          >
            Devino Membru
          </button>
        </div>
      </div>
    </>
  );
}
