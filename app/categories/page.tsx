"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

const CUISINE_CATEGORIES = [
  {
    name: "Italian",
    description: "Pasta, pizza, and Mediterranean flavors",
    image: "/placeholder.svg",
    recipeCount: 128,
    icon: "🍝",
  },
  {
    name: "Asian",
    description: "Stir-fries, noodles, and aromatic spices",
    image: "/placeholder.svg",
    recipeCount: 245,
    icon: "🥢",
  },
  {
    name: "Mexican",
    description: "Tacos, salsas, and vibrant flavors",
    image: "/placeholder.svg",
    recipeCount: 156,
    icon: "🌮",
  },
  // Add more cuisines...
];

const MEAL_TYPES = [
  {
    name: "Breakfast",
    description: "Start your day right",
    image: "/placeholder.svg",
    recipeCount: 89,
    icon: "🍳",
  },
  {
    name: "Main Courses",
    description: "Hearty dishes for lunch and dinner",
    image: "/placeholder.svg",
    recipeCount: 367,
    icon: "🍖",
  },
  {
    name: "Desserts",
    description: "Sweet treats and baked goods",
    image: "/placeholder.svg",
    recipeCount: 192,
    icon: "🍰",
  },
  // Add more meal types...
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Cuisines Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-2">Recipe Categories</h1>
        <p className="text-muted-foreground mb-8">
          Explore recipes by cuisine type or meal category
        </p>

        <h2 className="text-2xl font-semibold mb-6">Cuisines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUISINE_CATEGORIES.map((cuisine) => (
            <Link
              href={`/categories/${cuisine.name.toLowerCase()}`}
              key={cuisine.name}
            >
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute top-4 right-4 text-4xl">
                    {cuisine.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cuisine.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {cuisine.description}
                  </p>
                  <p className="text-sm text-emerald-600">
                    {cuisine.recipeCount} recipes
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Meal Types Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Meal Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEAL_TYPES.map((meal) => (
            <Link
              href={`/categories/${meal.name.toLowerCase()}`}
              key={meal.name}
            >
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute top-4 right-4 text-4xl">
                    {meal.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {meal.description}
                  </p>
                  <p className="text-sm text-emerald-600">
                    {meal.recipeCount} recipes
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
