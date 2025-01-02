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
                <Link href="/categories" className="text-lg">
                  Categories
                </Link>
                <Link href="/trending" className="text-lg">
                  Trending
                </Link>
                <Link href="/community" className="text-lg">
                  Community
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

          {/* Desktop Navigation - Simplified */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/recipes"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/trending"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Trending
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Community
            </Link>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              asChild
            >
              <Link href="/recipes/new">
                <ChefHat className="h-4 w-4 mr-2" />
                Share Recipe
              </Link>
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            {/* User Menu - Simplified */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <Link href="/profile">
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                </Link>
                <Link href="/saved">
                  <DropdownMenuItem>Saved Recipes</DropdownMenuItem>
                </Link>
                <Link href="/settings">
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
