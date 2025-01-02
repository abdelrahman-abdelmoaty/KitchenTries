import Link from "next/link";
import { Button } from "./ui/button";
import {
  Menu,
  Search,
  ChefHat,
  BookOpen,
  User,
  Bell,
  Heart,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

                <DropdownMenu>
                  <DropdownMenuTrigger className="text-lg text-left">
                    Categories
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link href="/categories/cuisine">
                      <DropdownMenuItem>Cuisines</DropdownMenuItem>
                    </Link>
                    <Link href="/categories/meal-types">
                      <DropdownMenuItem>Meal Types</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/trending" className="text-lg">
                  Trending
                </Link>

                <div className="h-px bg-neutral-200 my-2" />

                <Link
                  href="/recipes/new"
                  className="text-lg flex items-center gap-2"
                >
                  <ChefHat className="h-5 w-5" />
                  Share Recipe
                </Link>

                <Link href="/saved" className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Saved Recipes
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
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:text-emerald-600 transition-colors">
                Explore
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/recipes">
                  <DropdownMenuItem>All Recipes</DropdownMenuItem>
                </Link>
                <Link href="/trending">
                  <DropdownMenuItem>Trending</DropdownMenuItem>
                </Link>
                <Link href="/top-chefs">
                  <DropdownMenuItem>Top Chefs</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:text-emerald-600 transition-colors">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/categories/cuisine">
                  <DropdownMenuItem>Cuisines</DropdownMenuItem>
                </Link>
                <Link href="/categories/meal-types">
                  <DropdownMenuItem>Meal Types</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

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
              <Link href="/recipes/new">
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
              <Bell className="h-6 w-6" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/profile">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <Link href="/saved">
                  <DropdownMenuItem>Saved Recipes</DropdownMenuItem>
                </Link>
                <Link href="/settings">
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
