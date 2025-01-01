import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, User, BookOpen, ChefHat, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/recipes" className="text-lg">
                  Explore Recipes
                </Link>
                <Link href="/categories" className="text-lg">
                  Categories
                </Link>
                <Link href="/community" className="text-lg">
                  Community
                </Link>
                <div className="h-px bg-neutral-200 my-2" />
                <Link
                  href="/create"
                  className="text-lg flex items-center gap-2"
                >
                  <ChefHat className="h-5 w-5" />
                  Share Recipe
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600"
          >
            KitchenTries
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/recipes"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Explore Recipes
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Community
            </Link>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:text-emerald-600 transition-colors flex items-center gap-2"
              asChild
            >
              <Link href="/create">
                <ChefHat className="h-4 w-4" />
                Share Recipe
              </Link>
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <BookOpen className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
