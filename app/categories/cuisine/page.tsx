"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CUISINES = [
  {
    name: "Italian",
    description: "Pizza, pasta, and Mediterranean flavors",
    image: "/placeholder.svg",
    recipeCount: 234,
    popular: ["Pasta Carbonara", "Margherita Pizza", "Tiramisu"],
    icon: "🇮🇹",
  },
  {
    name: "Asian",
    description: "From stir-fries to sushi rolls",
    image: "/placeholder.svg",
    recipeCount: 456,
    popular: ["Pad Thai", "Sushi", "Korean BBQ"],
    icon: "🥢",
  },
  {
    name: "Mexican",
    description: "Spicy, fresh, and full of flavor",
    image: "/placeholder.svg",
    recipeCount: 189,
    popular: ["Tacos", "Guacamole", "Enchiladas"],
    icon: "🌮",
  },
  // Add more cuisines
];

export default function CuisinePage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Explore Cuisines</h1>
        <p className="text-muted-foreground">
          Discover recipes from different culinary traditions around the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CUISINES.map((cuisine) => (
          <Card key={cuisine.name} className="overflow-hidden">
            <div className="relative aspect-[2/1]">
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 text-4xl">
                {cuisine.icon}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{cuisine.name}</h2>
                  <p className="text-muted-foreground">{cuisine.description}</p>
                </div>
                <span className="text-sm text-emerald-600 font-medium">
                  {cuisine.recipeCount} recipes
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Popular Dishes:</h3>
                <div className="flex flex-wrap gap-2">
                  {cuisine.popular.map((dish) => (
                    <span
                      key={dish}
                      className="px-2 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-md"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Explore {cuisine.name} Recipes
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
