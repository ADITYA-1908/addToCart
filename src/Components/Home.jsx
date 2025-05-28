import Card from "../Components/Iterator/Card.jsx";
import Navbar from "./Sections/Navbar";

const Home = ({
  products,
  searchQuery,
  setSearchQuery,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Search/Category Results Header */}
      {(searchQuery.trim() || selectedCategory) && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-lg font-semibold text-gray-700">
            {products.length} results found
            {searchQuery.trim() && ` for "${searchQuery}"`}
            {selectedCategory && ` in "${selectedCategory}"`}
          </h2>
          {products.length === 0 && (
            <p className="text-gray-500 mt-2">
              No products found matching your criteria.
            </p>
          )}
        </div>
      )}

      <div className="container mx-auto p-6">
        {products.length > 0 ? (
          // Show products (all products initially, or filtered results when searching)
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </div>
          </div>
        ) : searchQuery.trim() || selectedCategory ? (
          // No products found for search or category filter
          <div
            style={{ paddingBottom: "140px" }}
            className="flex flex-col items-center justify-center min-h-screen text-center"
          >
            <p className="text-gray-500 text-lg">
              No products found
              {searchQuery.trim() && ` for "${searchQuery}"`}
              {selectedCategory && ` in "${selectedCategory}"`}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try searching with different keywords or select a different
              category
            </p>
          </div>
        ) : (
          // Loading state when no products and no search query
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading products...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
