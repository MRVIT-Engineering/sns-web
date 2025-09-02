import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '@/models/post';
import Navbar from '@/components/navigation/Navbar';
import { NewsPagination } from '@/components/pagination/NewsPagination';
import CategoryFilter from '@/components/news/CategoryFilter';

export const revalidate = 3600;

interface SearchParams {
  page?: string;
  query?: string;
  category?: string;
}

export default async function NewsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const searchQuery = params.query || '';
  const page = params.page || 1;

  // Parse multiple categories from URL parameter
  const selectedCategories = params.category ? params.category.split(',').filter(Boolean) : [];

  const fetchPosts = async () => {
    try {
      const categoryParam = selectedCategories.length > 0 ? `&categories=${JSON.stringify(selectedCategories)}` : '';
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/post?page=${page}&limit=25&query=${searchQuery}${categoryParam}`,
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

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/post/category`);

      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  const [{ data = [], total = 0 }, categories] = await Promise.all([fetchPosts(), fetchCategories()]);

  console.log('Data is ', data);

  const calculateReadTime = (post: IPost) => {
    const wordsPerMinute = 200;
    const wordCount = post.content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min de lectură`;
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar showSearchBar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Știri și Actualizări</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ultimele știri și actualizări despre activitățile sindicale și informații importante pentru membrii noștri.
          </p>
        </div>

        {/* Category Filter Section */}
        {categories.length > 0 && <CategoryFilter categories={categories} selectedCategories={selectedCategories} />}

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
                    alt={`News thumbnail ${post.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 2000px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {post.category}
                      </span>
                    )}
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
            <p className="text-gray-600">
              {selectedCategories.length > 0
                ? `Nu există știri în categoriile selectate momentan.`
                : 'Nu există știri disponibile momentan.'}
            </p>
          </div>
        )}

        <NewsPagination count={total} />
      </div>
    </div>
  );
}
