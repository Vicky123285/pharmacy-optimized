import React from "react";
import { cn } from "@/lib/utils";

export function Card({ 
  product, 
  className, 
  ...props 
}: { 
  product?: { name: string; price: number; image: string; category: string } 
} & React.ComponentProps<"div">) {
  if (!product) return <p className="text-red-500">No product data available.</p>;

  return (
    <div
      data-slot="card"
      className={cn(
        "bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300",
        className
      )}
      {...props}
    >
      <img 
        src={product.image || "/images/placeholder.png"} 
        alt={product.name || "Product"} 
        className="w-full h-48 object-cover"
      />
      <CardContent>
        <CardTitle>{product.name || "Unknown Product"}</CardTitle>
        <CardDescription>{product.category || "Uncategorized"}</CardDescription>
        <p className="text-yellow-300 font-bold">${product.price ?? "N/A"}</p>
      </CardContent>
    </div>
  );
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-1.5 px-6", className)} {...props} />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-xl font-semibold", className)} {...props} />
  );
}

export function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-gray-400", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("p-4", className)} {...props} />
  );
}

export function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center px-6", className)} {...props} />
  );
}
