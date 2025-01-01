"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock, Utensils, Users } from "lucide-react";

export const RECIPES = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    image: "/placeholder.svg",
    category: "Italian",
    cuisine: "Mediterranean",
    difficulty: "Medium",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    description:
      "Traditional Neapolitan pizza with fresh basil, mozzarella, and tomatoes.",
    chef: "Maria Romano",
    likes: 234,
    dietaryInfo: ["Vegetarian"],
  },
  {
    id: 2,
    name: "Spicy Pad Thai",
    image: "/placeholder.svg",
    category: "Main Course",
    cuisine: "Thai",
    difficulty: "Medium",
    prepTime: "25 mins",
    cookTime: "15 mins",
    servings: 3,
    description:
      "Authentic Thai street food with rice noodles, tofu, and crunchy peanuts.",
    chef: "Tom Chen",
    likes: 456,
    dietaryInfo: ["Gluten-Free"],
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    image: "/placeholder.svg",
    category: "Dessert",
    cuisine: "French",
    difficulty: "Hard",
    prepTime: "20 mins",
    cookTime: "12 mins",
    servings: 6,
    description: "Decadent chocolate dessert with a gooey molten center.",
    chef: "Sarah Baker",
    likes: 189,
    dietaryInfo: ["Vegetarian"],
  },
];

export default function RecipesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort") || "trending";
  const cuisineFilter = searchParams.get("cuisine") || "all";

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };

  const handleCuisineFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("cuisine", value);
    router.push(`?${params.toString()}`);
  };

  const filterAndSortRecipes = (recipes: typeof RECIPES) => {
    let filteredRecipes = recipes;

    if (cuisineFilter !== "all") {
      filteredRecipes = recipes.filter(
        (recipe) => recipe.cuisine === cuisineFilter
      );
    }

    switch (sortBy) {
      case "prep-time":
        return [...filteredRecipes].sort(
          (a, b) => parseInt(a.prepTime) - parseInt(b.prepTime)
        );
      case "most-liked":
        return [...filteredRecipes].sort((a, b) => b.likes - a.likes);
      default: // trending
        return filteredRecipes;
    }
  };

  const filteredAndSortedRecipes = filterAndSortRecipes(RECIPES);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Explore Recipes</h1>
        <p className="text-muted-foreground">
          Discover delicious recipes from home chefs around the world
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <Select value={cuisineFilter} onValueChange={handleCuisineFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Cuisine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cuisines</SelectItem>
              <SelectItem value="Italian">Italian</SelectItem>
              <SelectItem value="Thai">Thai</SelectItem>
              <SelectItem value="French">French</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={handleSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="most-liked">Most Liked</SelectItem>
              <SelectItem value="prep-time">Quickest to Make</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-sm text-muted-foreground">
          {filteredAndSortedRecipes.length} Recipes
        </p>
      </div>

      <Separator className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            className="group cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => router.push(`/recipes/${recipe.id}`)}
          >
            <CardContent className="p-4">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {recipe.difficulty}
                </Badge>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{recipe.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  by {recipe.chef}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {recipe.prepTime + recipe.cookTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {recipe.servings} servings
                  </span>
                  <span className="flex items-center gap-1">
                    <Utensils className="h-4 w-4" />
                    {recipe.cuisine}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {recipe.dietaryInfo.map((info) => (
                    <Badge key={info} variant="outline">
                      {info}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
