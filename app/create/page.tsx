"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Users, Scale } from "lucide-react";

export default function CreateRecipePage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Share Your Recipe</h1>
        <p className="text-muted-foreground">
          Share your culinary creations with our community
        </p>
      </div>

      <form className="space-y-8">
        {/* Basic Info */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Recipe Name
              </label>
              <Input placeholder="Enter recipe name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <Textarea
                placeholder="Tell us about your recipe..."
                className="h-32"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cuisine Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="asian">Asian</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Difficulty
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Time and Servings */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Cooking Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                <Clock className="inline-block w-4 h-4 mr-2" />
                Prep Time
              </label>
              <Input placeholder="e.g., 20 minutes" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                <Clock className="inline-block w-4 h-4 mr-2" />
                Cook Time
              </label>
              <Input placeholder="e.g., 30 minutes" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                <Users className="inline-block w-4 h-4 mr-2" />
                Servings
              </label>
              <Input type="number" placeholder="e.g., 4" />
            </div>
          </div>
        </Card>

        {/* Ingredients */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">
            <Scale className="inline-block w-6 h-6 mr-2" />
            Ingredients
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Input className="flex-grow" placeholder="Add ingredient" />
              <Button variant="outline">Add</Button>
            </div>
            <div className="space-y-2">
              {/* Ingredient list will go here */}
            </div>
          </div>
        </Card>

        {/* Instructions */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Instructions</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Textarea className="flex-grow" placeholder="Add a step..." />
              <Button variant="outline">Add Step</Button>
            </div>
            <div className="space-y-2">{/* Steps list will go here */}</div>
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Save as Draft</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Publish Recipe
          </Button>
        </div>
      </form>
    </div>
  );
}
