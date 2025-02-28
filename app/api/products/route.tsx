import { NextResponse } from "next/server";

// Mock function to fetch products (replace this with your database call)
async function fetchProductsFromDB() {
  return [
    { id: 1, name: "Dumbbell Set", price: 49.99 },
    { id: 2, name: "Protein Powder", price: 29.99 },
    { id: 3, name: "Yoga Mat", price: 19.99 },
  ];
}

// API route handler
export async function GET() {
  try {
    const products = await fetchProductsFromDB(); // Fetch products from DB
    if (!Array.isArray(products)) {
      throw new Error("Fetched data is not an array");
    }
    return NextResponse.json(products);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
