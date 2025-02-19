import Navbar from '@/components/navigation/Navbar';
import { IPost } from '@/models/post';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/pagination/pagination';
import { NewsPagination } from '@/components/pagination/NewsPagination';

const fetchPosts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`);
  const data = await response.json();
  return data;
};

export default async function NewsPage() {
  const posts = await fetchPosts();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post: IPost) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.headerImageUrl}
                  alt={`News thumbnail ${post.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{}</div>
                <h2 className="text-xl font-playfair font-semibold mb-3 hover:text-blue-600">
                  <a href={`/stiri/${post.id}`}>{post.title}</a>
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{calculateReadTime(post)}</span>
                  <a href={`/stiri/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    Citește mai mult →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <NewsPagination totalPages={10} />
      </div>
    </div>
  );
}
