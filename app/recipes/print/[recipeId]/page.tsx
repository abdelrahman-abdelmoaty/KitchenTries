"use client";

import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";

export default function PrintRecipePage() {
  const recipe = {
    name: "Classic Margherita Pizza",
    chef: "Maria Romano",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 4,
    ingredients: [
      "3 cups all-purpose flour",
      "1 cup warm water",
      "2 tbsp olive oil",
      "Fresh mozzarella",
      "Fresh basil leaves",
    ],
    instructions: [
      "Mix flour and water to make dough",
      "Let dough rest for 1 hour",
      "Roll out and add toppings",
      "Bake at 450°F for 15 minutes",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl print:px-0">
      <div className="mb-8 print:hidden">
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="w-4 h-4 mr-2" />
            Print Recipe
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
          <p className="text-muted-foreground">Recipe by {recipe.chef}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-semibold">Prep Time</p>
            <p className="text-muted-foreground">{recipe.prepTime}</p>
          </div>
          <div>
            <p className="font-semibold">Cook Time</p>
            <p className="text-muted-foreground">{recipe.cookTime}</p>
          </div>
          <div>
            <p className="font-semibold">Servings</p>
            <p className="text-muted-foreground">{recipe.servings}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-muted-foreground">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-muted-foreground">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center text-sm text-muted-foreground print:mt-8">
          <p>Recipe from KitchenTries.com</p>
          <p>© {new Date().getFullYear()} KitchenTries. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
