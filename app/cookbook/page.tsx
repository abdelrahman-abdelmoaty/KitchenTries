"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, BookOpen, Pencil } from "lucide-react";

const COOKBOOKS = [
  {
    id: 1,
    name: "Weekend Brunch",
    description: "Perfect recipes for lazy weekend mornings",
    recipeCount: 12,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Quick Dinners",
    description: "30-minute meals for busy weeknights",
    recipeCount: 8,
    image: "/placeholder.svg",
  },
];

export default function CookbookPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Cookbooks</h1>
          <p className="text-muted-foreground">
            Organize your favorite recipes into collections
          </p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-4 h-4 mr-2" />
          New Cookbook
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COOKBOOKS.map((cookbook) => (
          <Card
            key={cookbook.id}
            className="group cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video relative">
              <img
                src={cookbook.image}
                alt={cookbook.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <Button size="icon" variant="secondary">
                  <Pencil className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                {cookbook.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {cookbook.description}
              </p>
              <p className="text-sm text-emerald-600">
                {cookbook.recipeCount} recipes
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
