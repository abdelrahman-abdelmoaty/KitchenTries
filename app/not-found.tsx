import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="text-center px-4">
        <ChefHat className="w-24 h-24 mx-auto mb-8 text-emerald-600" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Recipe Not Found</p>
        <p className="text-muted-foreground mb-8">
          Oops! Looks like this recipe has gone missing from our kitchen.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/recipes">Browse Recipes</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
