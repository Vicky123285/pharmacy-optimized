"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Dummy products (Replace with API data)
const products = [
  { id: 1, name: "Face Serum", category: "Beauty", image: "/images/serum-7675105.jpg" },
  { id: 2, name: "Dumbbells", category: "Gym Equipment", image: "/images/dumbbells.jpg" },
  { id: 3, name: "Protein Powder", category: "Supplements", image: "/images/protein.jpg" },
  { id: 4, name: "Hair Oil", category: "Beauty", image: "/images/hair-oil.jpg" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setFilteredProducts(
      value
        ? products.filter((product) => product.name.toLowerCase().includes(value))
        : []
    );
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-72 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
      />

      {query && filteredProducts.length > 0 && (
        <div className="absolute bg-white border border-gray-200 shadow-lg w-72 mt-2 rounded-lg z-50">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex items-center px-4 py-2 hover:bg-gray-100"
            >
              <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-full mr-3" />
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
