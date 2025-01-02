"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, FireExtinguisher, TrendingUp } from "lucide-react";

const TRENDING_RECIPES = [
  {
    id: 1,
    name: "Korean Street Toast",
    chef: "Sarah Kim",
    image: "/placeholder.svg",
    timeFrame: "This Week",
    prepTime: "15 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    likes: 1245,
    views: 15000,
    tags: ["Breakfast", "Asian"],
  },
  // Add more trending recipes
];

export default function TrendingPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Trending Recipes</h1>
          <p className="text-muted-foreground">
            Discover what's popular in the KitchenTries community
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <TrendingUp className="w-4 h-4" />
          This Week
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Time</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRENDING_RECIPES.map((recipe) => (
          <Card
            key={recipe.id}
            className="group cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="relative aspect-video">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <Badge className="absolute top-2 right-2 bg-red-500">
                <FireExtinguisher className="w-4 h-4 mr-1" />
                Trending
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600">
                {recipe.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                by {recipe.chef}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {recipe.prepTime}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {recipe.views.toLocaleString()} views
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
