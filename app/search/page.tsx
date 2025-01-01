"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Search Recipes</h1>
        <div className="flex gap-4 max-w-2xl">
          <Input
            placeholder="Search recipes, ingredients, or chefs..."
            className="text-lg py-6"
          />
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Popular Searches</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="cursor-pointer">
            Quick Dinner
          </Badge>
          <Badge variant="secondary" className="cursor-pointer">
            Vegetarian
          </Badge>
          <Badge variant="secondary" className="cursor-pointer">
            Healthy
          </Badge>
          {/* Add more popular search terms */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search results would go here */}
      </div>
    </div>
  );
}
