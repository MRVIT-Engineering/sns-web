import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navigation/Navbar';
import Head from 'next/head';
import { IPost } from '@/models/post';

export default async function Home() {
  const fetchPosts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?limit=5`);
    const data = await response.json();
    return data;
  };
  const { data } = await fetchPosts();
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>Sindicatul National Solidaritatea</title>
        <meta name="description" content="Sindicatul National Solidaritatea" />
      </Head>
      <Suspense>
        <Navbar />
      </Suspense>

      <div className="pt-16">
        {/* Hero Section with Background Image */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/sns_hero.jpeg"
              alt="Hero background"
              fill
              priority
              className="object-cover brightness-[0.7]"
              sizes="100vw"
            />
          </div>
          <div className="relative z-1 text-center text-white px-4 max-w-2xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-8">Sindicatul National Solidaritatea</h1>
            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-xl font-playfair font-semibold mb-3">Abonează-te la newsletter</h2>
              <p className="text-gray-100 mb-4">Primește cele mai recente actualizări direct în inbox-ul tău.</p>
              <form className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="flex-1 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-200"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Abonează-te</button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-2xl mx-auto w-full px-4 py-16">
          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-playfair font-semibold mb-6">Știri Recente</h2>
            <div className="space-y-8">
              {data.length > 0 ? (
                data.map((post: IPost) => (
                  <article key={post.id} className="flex gap-6 border-b border-gray-200 pb-8 last:border-none">
                    <div className="relative w-48 h-32 flex-shrink-0">
                      <Image
                        src={post.headerImageUrl}
                        alt={`Thumbnail for ${post.title}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 192px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-playfair font-semibold mb-2 hover:text-blue-600">
                        <Link href={`/news/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>

                      <div className="text-sm text-gray-500">
                        <time dateTime={post.createdAt.toString()}>
                          {new Date(post.createdAt).toLocaleDateString('ro-RO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {/* You can add reading time if available */}
                        <span className="mx-2">•</span>
                        <span>5 min de citit</span>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">Nu există știri disponibile momentan.</div>
              )}

              {data.length > 0 && (
                <div className="text-center pt-8">
                  <Link
                    href="/news"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Vezi toate știrile
                  </Link>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="bg-gray-50 py-8">
          <div className="max-w-2xl mx-auto px-4 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600">
            <a href="/despre" className="hover:text-blue-600">
              Despre Noi
            </a>
            <a href="/membri" className="hover:text-blue-600">
              Membri
            </a>
            <a href="/contact" className="hover:text-blue-600">
              Contact
            </a>
            <a href="/resurse" className="hover:text-blue-600">
              Resurse
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
