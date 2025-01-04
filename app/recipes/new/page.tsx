"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Users,
  Scale,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export default function RecipePage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Create and Share Your Recipe
        </h1>
        <p className="text-muted-foreground">
          Share your culinary creations with the community.
        </p>
      </div>

      <form className="space-y-8">
        {/* Basic Information Section */}
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
                  Meal Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="main">Main Course</SelectItem>
                    <SelectItem value="dessert">Dessert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Cooking Details Section */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Cooking Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                <Clock className="inline-block w-4 h-4 mr-2" /> Prep Time
              </label>
              <Input placeholder="e.g., 20 minutes" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                <Clock className="inline-block w-4 h-4 mr-2" /> Cook Time
              </label>
              <Input placeholder="e.g., 30 minutes" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                <Users className="inline-block w-4 h-4 mr-2" /> Servings
              </label>
              <Input type="number" placeholder="e.g., 4" />
            </div>
          </div>
        </Card>

        {/* Ingredients Section */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Ingredients</h2>
            <Button variant="outline" className="gap-2">
              <Plus className="w-4 h-4" /> Add Ingredient
            </Button>
          </div>

          <div className="space-y-4">
            {/* Ingredient input rows would go here */}
            <div className="flex items-center gap-4">
              <Input placeholder="Amount" className="w-24" />
              <Input placeholder="Unit" className="w-24" />
              <Input placeholder="Ingredient" className="flex-1" />
              <Button variant="ghost" size="icon">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Instructions Section */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Instructions</h2>
            <Button variant="outline" className="gap-2">
              <Plus className="w-4 h-4" /> Add Step
            </Button>
          </div>

          <div className="space-y-4">
            {/* Instruction steps would go here */}
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-muted-foreground w-8">
                1
              </span>
              <div className="flex-1 space-y-2">
                <Textarea placeholder="Describe this step..." />
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
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
