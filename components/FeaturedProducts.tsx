import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  { name: "Luxury Face Cream", price: 35, image: "/images/category1.jpg" },
  { name: "Pro Gym Gloves", price: 25, image: "/images/gloves.jpg" },
  { name: "Organic Protein", price: 50, image: "/images/protein.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <Splide options={{ type: "loop", perPage: 3, gap: "1rem", breakpoints: { 768: { perPage: 1 } } }}>
        {featuredProducts.map((product, index) => (
          <SplideSlide key={index}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                <p className="text-gray-600">${product.price}</p>
                <Button className="mt-2 w-full">Buy Now</Button>
              </CardContent>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
