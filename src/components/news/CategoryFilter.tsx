'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { ICategory } from '@/models/post';

interface CategoryFilterProps {
  categories: ICategory[];
  selectedCategories?: string[];
}

export default function CategoryFilter({ categories, selectedCategories = [] }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1'); // Reset to first page when changing category

    if (categoryId === 'all') {
      params.delete('category');
    } else {
      // Handle multiple category selection
      const currentCategories = selectedCategories.filter((cat) => cat !== categoryId);

      if (selectedCategories.includes(categoryId)) {
        // Remove category if already selected
        if (currentCategories.length === 0) {
          params.delete('category');
        } else {
          params.set('category', currentCategories.join(','));
        }
      } else {
        // Add category to selection
        const newCategories = [...selectedCategories, categoryId];
        params.set('category', newCategories.join(','));
      }
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const isCategorySelected = (categoryId: string) => {
    return selectedCategories.includes(categoryId);
  };

  const hasAnySelection = selectedCategories.length > 0;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Filtrează după categorie</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !hasAnySelection ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Toate categoriile
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id.toString())}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isCategorySelected(category.id.toString())
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
      {hasAnySelection && (
        <div className="mt-2 text-sm text-gray-600">Categorii selectate: {selectedCategories.length}</div>
      )}
    </div>
  );
}
