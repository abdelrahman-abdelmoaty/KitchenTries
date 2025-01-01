"use client";

import { notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Share2,
  Clock,
  Users,
  ChefHat,
  Bookmark,
  Scale,
} from "lucide-react";
import { RECIPES } from "../page";

export default function RecipePage() {
  const { recipeId } = useParams();
  const recipe = RECIPES.find((r) => r.id === Number(recipeId));

  if (!recipe) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Recipe Image */}
        <div className="space-y-4">
          <div className="relative aspect-video group">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {recipe.likes} likes
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Recipe Details */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
              <p className="text-muted-foreground">
                by{" "}
                <span className="text-emerald-600 hover:underline cursor-pointer">
                  {recipe.chef}
                </span>
              </p>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <Clock className="h-5 w-5 mx-auto mb-2 text-emerald-600" />
              <p className="text-sm font-medium">Prep Time</p>
              <p className="text-sm text-muted-foreground">{recipe.prepTime}</p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <ChefHat className="h-5 w-5 mx-auto mb-2 text-emerald-600" />
              <p className="text-sm font-medium">Cook Time</p>
              <p className="text-sm text-muted-foreground">{recipe.cookTime}</p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <Users className="h-5 w-5 mx-auto mb-2 text-emerald-600" />
              <p className="text-sm font-medium">Servings</p>
              <p className="text-sm text-muted-foreground">{recipe.servings}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">About this Recipe</h2>
            <p className="text-muted-foreground mb-4">{recipe.description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{recipe.category}</Badge>
              <Badge variant="secondary">{recipe.cuisine}</Badge>
              <Badge variant="outline">{recipe.difficulty}</Badge>
              {recipe.dietaryInfo.map((info) => (
                <Badge key={info} variant="outline">
                  {info}
                </Badge>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="w-full mb-4 bg-emerald-600 hover:bg-emerald-700"
          >
            View Full Recipe
          </Button>

          <div className="space-y-4 mt-6">
            <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Scale className="h-4 w-4 text-emerald-600" />
                  </div>
                  <h3 className="font-medium text-lg">Recipe Tips</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This recipe has been kitchen-tested and perfected by our
                  community. Follow the measurements carefully for the best
                  results, and don't forget to read the chef's notes before
                  starting.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
