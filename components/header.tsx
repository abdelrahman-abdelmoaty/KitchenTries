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
import { Input } from "./ui/input";

// You'll need to implement this based on your auth solution
const isLoggedIn = true;

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
              <Link
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 block mb-4"
              >
                KitchenTries
              </Link>

              <div className="h-px bg-neutral-200 my-4" />

              <div className="flex items-center gap-2">
                <Input type="text" placeholder="Search for recipes..." />
              </div>

              <div className="h-px bg-neutral-200 my-4" />

              {/* User Menu - Mobile */}
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
              </nav>

              <div className="h-px bg-neutral-200 my-4" />

              <Button asChild className="w-full">
                <Link href={isLoggedIn ? "/recipes/new" : "/auth/login"}>
                  <ChefHat className="h-4 w-4 mr-2" />
                  Share Recipe
                </Link>
              </Button>

              <div className="h-px bg-neutral-200 my-4" />

              <div className="flex flex-col gap-4">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/saved"
                      className="text-lg flex items-center gap-2"
                    >
                      <Heart className="h-5 w-5" />
                      Saved Recipes
                    </Link>
                    <Link
                      href="/profile/asd"
                      className="text-lg flex items-center gap-2"
                    >
                      <User className="h-5 w-5" />
                      My Profile
                    </Link>
                    <Link
                      href="/notifications"
                      className="text-lg flex items-center gap-2"
                    >
                      <Bell className="h-5 w-5" />
                      Notifications
                    </Link>
                    <Link
                      href="/settings"
                      className="text-lg flex items-center gap-2"
                    >
                      <Bell className="h-5 w-5" />
                      Settings
                    </Link>

                    <div className="h-px bg-neutral-200 my-4" />

                    <Button variant="outline" asChild className="mt-auto">
                      <Link href="/auth/logout">Logout</Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" asChild>
                      <Link href="/auth/login" className="text-lg">
                        Login
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/auth/register" className="text-lg">
                        Register
                      </Link>
                    </Button>
                  </>
                )}
              </div>
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

            <Button asChild>
              <Link href={isLoggedIn ? "/recipes/new" : "/auth/login"}>
                <ChefHat className="h-4 w-4 mr-2" />
                Share Recipe
              </Link>
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            {isLoggedIn && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hidden md:flex"
                >
                  <Link href="/recipes/new">
                    <Heart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Bell className="h-5 w-5" />
                </Button>

                {/* User Menu - Simplified */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="hidden md:flex">
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <Link href="/profile/asd">
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
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Button variant="outline" asChild className="hidden md:flex">
                  <Link href="/auth/login">Login</Link>
                </Button>

                <Button asChild className="hidden md:flex">
                  <Link href="/auth/register">Register</Link>
                </Button>
              </>
            )}
            <Button asChild className="md:hidden">
              <Link href={isLoggedIn ? "/recipes/new" : "/auth/login"}>
                <ChefHat className="h-4 w-4 mr-2" />
                Share Recipe
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
