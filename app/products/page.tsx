"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Heart, ShoppingCart } from "lucide-react";
import productsData from "@/lib/products";
import ImageUploader from "@/components/ImageUploader";

export default function ProductPage() {
  const [products, setProducts] = useState<Array<any>>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popular");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    if (!Array.isArray(productsData)) {
      console.error("Error: productsData is not an array", productsData);
      return;
    }
    let filteredProducts = [...productsData];

    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filterCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterCategory
      );
    }

    if (sortOption === "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(filteredProducts);
  }, [searchQuery, sortOption, filterCategory]);

  return (
    <div className="w-full bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Product Page</h1>

      {/* Image Uploader */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Upload Product Image</h2>
        <ImageUploader />
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3"
        />
        <select
          className="p-2 border rounded"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Beauty">Beauty</option>
          <option value="Gym Equipment">Gym Equipment</option>
          <option value="Supplements">Supplements</option>
        </select>
        <select
          className="p-2 border rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Link href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                <div className="flex items-center text-yellow-500 mt-1">
                  {[...Array(product.rating)].map((_, index) => (
                    <Star key={index} size={16} fill="yellow" />
                  ))}
                </div>
              </Link>
              <div className="flex justify-between mt-4">
                <Button className="bg-blue-500 text-white flex items-center">
                  <ShoppingCart size={16} className="mr-2" /> Add to Cart
                </Button>
                <Button variant="ghost" className="text-red-500">
                  <Heart size={20} />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products available
          </p>
        )}
      </div>
    </div>
  );
}
