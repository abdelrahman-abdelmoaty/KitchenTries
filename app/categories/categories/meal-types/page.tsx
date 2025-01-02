"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MEAL_TYPES = [
  {
    name: "Breakfast",
    description: "Start your day with delicious morning recipes",
    image: "/placeholder.svg",
    recipeCount: 145,
    timeRange: "5-30 minutes",
    popular: ["Pancakes", "Smoothie Bowls", "Omelettes"],
    icon: "🍳",
  },
  {
    name: "Main Course",
    description: "Hearty dishes for lunch and dinner",
    image: "/placeholder.svg",
    recipeCount: 389,
    timeRange: "30-60 minutes",
    popular: ["Roast Chicken", "Beef Stew", "Vegetable Curry"],
    icon: "🍖",
  },
  {
    name: "Desserts",
    description: "Sweet treats and baked delights",
    image: "/placeholder.svg",
    recipeCount: 234,
    timeRange: "30-120 minutes",
    popular: ["Chocolate Cake", "Apple Pie", "Ice Cream"],
    icon: "🍰",
  },
  // Add more meal types
];

export default function CuisinePage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Explore Meal Types</h1>
        <p className="text-muted-foreground">
          Discover recipes for different times of the day and occasions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MEAL_TYPES.map((mealType) => (
          <Card key={mealType.name} className="overflow-hidden">
            <div className="relative aspect-[2/1]">
              <img
                src={mealType.image}
                alt={mealType.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 text-4xl">
                {mealType.icon}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{mealType.name}</h2>
                  <p className="text-muted-foreground">
                    {mealType.description}
                  </p>
                </div>
                <span className="text-sm text-emerald-600 font-medium">
                  {mealType.recipeCount} recipes
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Popular Dishes:</h3>
                <div className="flex flex-wrap gap-2">
                  {mealType.popular.map((dish) => (
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
                Explore {mealType.name} Recipes
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
