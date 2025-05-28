import { useEffect, useState } from "react";
import Home from "../Home.jsx";
import { fetchProducts } from "./Api.js";

const ApiData = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      // Extract unique categories
      const uniqueCategories = [
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  // Filter products based on search query and category
  let filteredProducts = products;

  // Filter by category first
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Then filter by search query if it exists
  if (searchQuery.trim()) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }

  const displayProducts = filteredProducts;

  return (
    <div className="min-h-screen bg-gray-100">
      <Home
        products={displayProducts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default ApiData;
