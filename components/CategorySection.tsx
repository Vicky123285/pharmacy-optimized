import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  { name: "Beauty", image: "/images/category4.jpg" },
  { name: "Gym Equipment", image: "/category2/.jpg" },
  { name: "Supplements", image: "/images/category3.jpg" },
];

export default function CategorySection() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-lg cursor-pointer hover:shadow-xl transition">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-md" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
