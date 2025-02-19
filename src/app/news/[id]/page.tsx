import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Navbar from '@/components/navigation/Navbar';
import { IPost } from '@/models/post';

async function getPost(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params
  const { id } = await params;
  const post: IPost = await getPost(id);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense>
        <Navbar showSearchBar={false} />
      </Suspense>

      <article className="pt-24 pb-16">
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[600px] w-full mb-8">
          <Image
            src={post.headerImageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm">
                <time dateTime={post.createdAt.toString()}>
                  {new Date(post.createdAt).toLocaleDateString('ro-RO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{Math.ceil(post.content.replace(/<[^>]*>/g, '').split(' ').length / 200)} min de lectură</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg prose-blue mx-auto">
            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 font-medium">{post.description}</p>

            {/* Main Content */}
            <div
              className="space-y-6 text-gray-700 [&>h2]:text-2xl [&>h2]:font-playfair [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4
                [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6
                [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic
                [&>img]:rounded-lg [&>img]:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Înapoi la știri
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
