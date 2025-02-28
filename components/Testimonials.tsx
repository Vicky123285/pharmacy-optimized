import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  { name: "Alice", review: "Amazing products! The quality is outstanding." },
  { name: "John", review: "The best fitness products I've ever purchased." },
  { name: "Emily", review: "Super fast shipping and excellent customer service!" },
];

export default function Testimonials() {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testi, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle>{testi.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{testi.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
