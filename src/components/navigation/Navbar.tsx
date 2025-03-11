'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Image from 'next/image';
import { useDownload } from '@/hooks/useDownload';

type Props = {
  showSearchBar?: boolean;
};

// Add a type for dropdown items
type DropdownItem = {
  text: string;
  href: string;
};

// Add a type for navigation items that can be either simple links or dropdowns
type NavItem = {
  text: string;
  href: string;
  dropdown?: DropdownItem[];
};

// Create a dropdown component
function NavDropdown({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-gray-600 hover:text-blue-600">
        {item.text}
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          {item.dropdown?.map((dropdownItem, index) => (
            <Link
              key={index}
              href={dropdownItem.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {dropdownItem.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

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

  const navItems: NavItem[] = [
    {
      text: 'Prezentare',
      href: '/wip',
      dropdown: [
        { text: 'Despre Noi', href: '/about' },
        { text: 'Conducere SNS', href: '/wip' },
        { text: 'Grupe sindicale', href: '/wip' },
        { text: 'Afilieri', href: '/wip' },
      ],
    },
    {
      text: 'Activitate sindicală',
      href: '/wip',
      dropdown: [
        { text: 'Actiuni in instantele de judecata', href: '/wip' },
        { text: 'Actiuni de protest', href: '/wip' },
        { text: 'Altele ( statut )', href: '/wip' },
        { text: 'Altele', href: '/wip' },
      ],
    },
    {
      text: 'Știri',
      href: '/news',
      dropdown: [
        { text: 'Informatii pentru membrii', href: '/wip' },
        { text: 'Altele', href: '/news' },
      ],
    },
    {
      text: 'Contact',
      href: '/contact',
      dropdown: [
        { text: 'Intreaba SNS', href: '/contact' },
        { text: 'Altele', href: '/contact' },
      ],
    },
  ];

  const { download } = useDownload('/adeziune.pdf');

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
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center pl-2 sm:pl-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="SNS Logo" width={40} height={40} className="object-contain" />
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
            {navItems.map((item, index) =>
              item.dropdown ? (
                <NavDropdown key={index} item={item} />
              ) : (
                <Link key={index} href={item.href} className="text-gray-600 hover:text-blue-600">
                  {item.text}
                </Link>
              ),
            )}
            <button onClick={download} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Devino Membru
            </button>
          </div>

          <div className="flex items-center sm:hidden pr-2">
            {showSearchBar && (
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {isSearchOpen && showSearchBar && (
          <div className="md:hidden px-2 pb-3">
            <Suspense>
              <SearchInput />
            </Suspense>
          </div>
        )}
      </div>

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

        <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] space-y-8 overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: '0ms' }}
            className="text-3xl font-playfair text-gray-800 hover:text-blue-600
              transform transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
          >
            Acasă
          </Link>

          {navItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.dropdown ? (
                <>
                  <div
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    className="text-3xl font-playfair text-gray-800 mb-2
                      transform transition-all duration-300 ease-in-out
                      ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
                  >
                    {item.text}
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    {item.dropdown.map((dropdownItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        href={dropdownItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ transitionDelay: `${(index + 1) * 100 + 50}ms` }}
                        className="text-xl font-playfair text-gray-600 hover:text-blue-600
                          transform transition-all duration-300 ease-in-out
                          ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
                      >
                        {dropdownItem.text}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  className="text-3xl font-playfair text-gray-800 hover:text-blue-600
                    transform transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
                >
                  {item.text}
                </Link>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              download();
              setIsMenuOpen(false);
            }}
            style={{ transitionDelay: `${(navItems.length + 1) * 100}ms` }}
            className="text-3xl font-playfair text-blue-600 hover:text-blue-700
              transform transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}"
          >
            Devino Membru
          </button>
        </div>
      </div>
    </nav>
  );
}
