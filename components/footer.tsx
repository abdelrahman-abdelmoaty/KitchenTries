import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              KitchenTries
            </h2>
            <p className="text-sm text-muted-foreground">
              Your go-to platform for discovering, sharing, and celebrating home
              cooking adventures.
            </p>
          </div>

          {/* Discover */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Discover</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/trending"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Trending Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Recipe Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/top-chefs"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Top Home Chefs
                </Link>
              </li>
            </ul>
          </div>

          {/* Cook & Share */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cook & Share</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/share-recipe"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Share Your Recipe
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Recipe Guidelines
                </Link>
              </li>
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
                  href="/cooking-tips"
                  className="text-muted-foreground hover:text-emerald-600 transition"
                >
                  Cooking Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
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
            <p className="text-sm text-muted-foreground mt-4">
              Join our community of passionate home cooks
            </p>
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
