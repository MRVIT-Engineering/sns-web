'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  showSearchBar?: boolean;
};

export default function Navbar({ showSearchBar = false }: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
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
                <input
                  type="search"
                  placeholder="Caută știri..."
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
                  onChange={(e) => handleSearch(e.target.value)}
                  defaultValue={searchParams.get('query')?.toString()}
                />
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
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Devino Membru</button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
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
            <button className="p-2 rounded-md text-gray-600 hover:text-blue-600 ml-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {isSearchOpen && (
          <div className="md:hidden px-2 pb-3">
            <input
              type="search"
              placeholder="Caută știri..."
              className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              onChange={(e) => handleSearch(e.target.value)}
              defaultValue={searchParams.get('query')?.toString()}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
