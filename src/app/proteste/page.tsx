import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { IPost } from '@/models/post';
import Navbar from '@/components/navigation/Navbar';
import { NewsPagination } from '@/components/pagination/NewsPagination';

type SearchParams = {
  page?: string;
  query?: string;
};

export default async function ProtestePage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const searchQuery = params.query || '';
  const page = params.page || 1;
  const CATEGORIES = [6];

  const fetchPosts = async () => {
    try {
      const categories = JSON.stringify(CATEGORIES);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/post?page=${page}&limit=25&query=${searchQuery}&categories=${categories}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return {
        data: [],
        total: 0,
      };
    }
  };

  const { data = [], total = 0 } = await fetchPosts();

  const calculateReadTime = (post: IPost) => {
    const wordsPerMinute = 200;
    const wordCount = post.content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min de lectură`;
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <Suspense>
        <Navbar showSearchBar />
      </Suspense>

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-6">Acțiuni de protest</h1>
          <p className="text-gray-700 text-lg mb-6 max-w-4xl mx-auto">
            În scopul apărării drepturilor membrilor săi, SNS a inițiat și a participat la numeroase acțiuni de protest,
            precum:
          </p>

          <div className="text-left max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold mb-4">Tipuri de acțiuni</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Greve de tip japonez, fără întreruperea programului de lucru;</li>
              <li>Pichetări ale diverselor instituții, printre care consiliile județene și ministerele;</li>
              <li>Mitinguri de protest în fața diverselor ministere sau a clădirii guvernului;</li>
              <li>
                Grevă cu întreruperea programului de lucru și cu suspendarea contractelor de muncă pe durata acesteia
                <span className="block text-gray-500 text-sm mt-1">
                  (precizăm faptul că SNS este singurul sindicat din cadrul ANAF care a făcut grevă, în întreaga istorie
                  a acestei instituții)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {data.map((post: IPost) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.headerImageUrl || '/images/default-post.jpg'}
                    alt={`Protest action thumbnail ${post.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 2000px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                      Acțiune de protest
                    </span>
                  </div>
                  <h2 className="text-xl font-playfair font-semibold mb-3 hover:text-blue-600">
                    <Link href={`/news/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{calculateReadTime(post)}</span>
                    <Link href={`/news/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      Citește mai mult →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Nu există acțiuni de protest disponibile momentan.</p>
          </div>
        )}

        <div className="pb-16">
          <NewsPagination count={total} />
        </div>
      </div>
    </div>
  );
}
