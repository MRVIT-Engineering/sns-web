import Navbar from "@/components/navigation/Navbar";
import SearchNews from "@/components/news/SearchNews";

// This is a Server Component (default in Next.js App Router)
export default function NewsPage() {
  // Mock data - in real app, this would be fetched from your API/database
  const posts = [1, 2, 3, 4, 5, 6].map((id) => ({
    id,
    title: `Actualizare Sindicală Important ${id}`,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: `Aprilie ${id}, 2024`,
    readTime: "5 min de citit",
  }));

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Știri și Actualizări
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ultimele știri și actualizări despre activitățile sindicale și
            informații importante pentru membrii noștri.
          </p>
        </div>

        <SearchNews initialPosts={posts} />
      </div>
    </div>
  );
}
