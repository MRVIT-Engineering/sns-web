"use client";

import { useState } from "react";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export default function SearchNews({ initialPosts }: { initialPosts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = initialPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={`https://picsum.photos/800/600?random=${post.id}`}
                alt={`News thumbnail ${post.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h2 className="text-xl font-playfair font-semibold mb-3 hover:text-blue-600">
                <a href={`/stiri/${post.id}`}>{post.title}</a>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <a
                  href={`/stiri/${post.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Citește mai mult →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pb-16">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          ← Anterior
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          1
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          3
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Următor →
        </button>
      </div>
    </div>
  );
}
