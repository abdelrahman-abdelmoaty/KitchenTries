import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              KitchenTries
            </h2>
            <p className="text-sm text-muted-foreground">
              Share your culinary journey and discover recipes from home chefs
              around the world. Join our community of food lovers and cooking
              enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-emerald-600 transition"
                title="Follow us on Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-muted-foreground hover:text-emerald-600 transition"
                title="Watch our YouTube"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-emerald-600 transition"
                title="Join us on Facebook"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Discover */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Discover</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recipes"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Browse Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/cuisine"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Cuisines
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/meal-types"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Meal Types
                </Link>
              </li>
              <li>
                <Link
                  href="/trending"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Trending Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recipes/new"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Share Recipe
                </Link>
              </li>
              <li>
                <Link
                  href="/top-chefs"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Top Chefs
                </Link>
              </li>
              <li>
                <Link
                  href="/cooking-tips"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Cooking Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KitchenTries. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-emerald-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-emerald-600 transition"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-muted-foreground hover:text-emerald-600 transition"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
