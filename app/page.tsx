import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RECIPES, USERS } from "@/types/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuickCategories />
      <TrendingRecipes />
      <CulinaryJourney />
      <TopChefs />
      <CookingTips />
      <FeaturedCollections />
      <CommunityHighlights />
      <JoinCommunity />
      <Newsletter />
    </main>
  );
}

// const HeroSection = () => (
//   <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50">
//     {/* Animated background patterns */}
//     <div className="absolute inset-0 z-0">
//       <div className="absolute inset-0 opacity-30 bg-grid-pattern animate-grid" />
//       <div className="absolute inset-0 opacity-20">
//         {/* Add floating food icons */}
//         <div className="floating-icon" style={{ '--delay': '0s' }}>🥘</div>
//         <div className="floating-icon" style={{ '--delay': '2s' }}>🥗</div>
//         <div className="floating-icon" style={{ '--delay': '4s' }}>🍜</div>
//         {/* Add more icons */}
//       </div>
//     </div>

//     <div className="relative">
//       {/* Enhanced decorative elements */}
//       <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full blur-3xl opacity-60 animate-pulse" />
//       <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-100 rounded-full blur-3xl opacity-60 animate-pulse" />

//       {/* Content with enhanced styling */}
//       <div className="z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
//         <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 animate-gradient">
//           Share Your Kitchen Stories
//         </h1>
//         <p className="text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
//           Join our community of home chefs, share your favorite recipes, and
//           discover culinary inspirations from around the world.
//         </p>
//         <div className="flex gap-4 justify-center">
//           <Button
//             size="lg"
//             className="text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
//           >
//             Start Cooking
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="text-lg border-2 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300"
//           >
//             Browse Recipes
//           </Button>
//         </div>
//       </div>
//     </div>
//   </section>
// );

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50">
    {/* Animated Background Patterns */}
    <div className="absolute inset-0 z-0">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-orb" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-orb animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-orb animation-delay-4000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { emoji: "🥘", position: "top-1/4 left-1/4", delay: "0s" },
          { emoji: "🥗", position: "top-1/3 right-1/4", delay: "2s" },
          { emoji: "🍜", position: "bottom-1/4 left-1/3", delay: "1s" },
          { emoji: "🍳", position: "top-1/2 right-1/3", delay: "3s" },
          { emoji: "🥑", position: "bottom-1/3 right-1/2", delay: "2.5s" },
          { emoji: "🥪", position: "top-1/3 left-1/2", delay: "1.5s" },
        ].map((item, index) => (
          <div
            key={index}
            className={cn(
              "absolute text-4xl animate-float opacity-70 hover:opacity-100 transition-opacity cursor-pointer",
              item.position
            )}
            style={{ animationDelay: item.delay }}
          >
            {item.emoji}
          </div>
        ))}
      </div>
    </div>

    {/* Content Container */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
      <div className="text-center space-y-8">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 animate-gradient">
            Share Your Kitchen Stories
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-neutral-700 max-w-2xl mx-auto leading-relaxed font-medium">
          Join our community of home chefs, share your favorite recipes, and
          discover culinary inspirations from around the world.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur group-hover:blur-md transition-all duration-300" />
          <div className="relative bg-white rounded-lg shadow-lg flex items-center p-2">
            <Search className="w-6 h-6 text-neutral-400 ml-2" />
            <input
              type="text"
              placeholder="Search for recipes, ingredients, or cuisines..."
              className="flex-1 px-4 py-3 text-lg border-none outline-none bg-transparent placeholder-neutral-400"
            />
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6">
              Search
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        {/* TODO: Add the link */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            size="lg"
            className="text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px]"
            asChild
          >
            <Link href="/recipes/new">Start Cooking</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg border-2 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            asChild
          >
            <Link href="/recipes">Browse Recipes</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { label: "Recipes", value: "10,000+" },
            { label: "Active Cooks", value: "50,000+" },
            { label: "Countries", value: "120+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl font-bold text-emerald-600">
                {stat.value}
              </div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const QuickCategories = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Quick & Easy", icon: "⚡", count: 234 },
          { name: "Vegetarian", icon: "🥗", count: 156 },
          { name: "Desserts", icon: "🍰", count: 189 },
          { name: "Healthy", icon: "🥑", count: 145 },
        ].map((category) => (
          <Link
            key={category.name}
            href={`/recipes?category=${category.name}`}
            className="contents"
          >
            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="p-6 text-center">
                <span className="text-3xl mb-3 block">{category.icon}</span>
                <h3 className="font-semibold mb-1 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} recipes
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const TrendingRecipes = () => (
  <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
        <p className="text-muted-foreground">
          Discover what's cooking in our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RECIPES.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.title}`}>
            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg"
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {recipe.difficulty}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-muted-foreground mb-4">
                  by {recipe.author.name}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{recipe.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({recipe.rating})
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {recipe.time.totalTime} min
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const CulinaryJourney = () => (
  <section className="py-20 bg-emerald-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Start Your Culinary Journey
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Share Your Recipes",
                description:
                  "Upload and share your favorite recipes with our community",
                icon: "📝",
              },
              {
                title: "Connect with Chefs",
                description:
                  "Follow and learn from passionate home chefs worldwide",
                icon: "👥",
              },
              {
                title: "Get Inspired",
                description: "Discover new recipes and cooking techniques",
                icon: "💡",
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4 items-start">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700 mt-8" asChild>
            <Link href="/auth/register">Get Started</Link>
          </Button>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Cooking Journey"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-lg z-10" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-100 rounded-lg z-10" />
        </div>
      </div>
    </div>
  </section>
);

const JoinCommunity = () => (
  <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Connect with fellow food lovers, share your recipes, and explore endless
        culinary possibilities.
      </p>
      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
        Get Started
      </Button>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Get Weekly Recipe Inspiration
        </h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter and receive hand-picked recipes every
          week.
        </p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const TopChefs = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Chefs</h2>
        <p className="text-muted-foreground">
          Meet our talented community members
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {USERS.slice(0, 4).map((chef) => (
          <Card key={chef.id} className="group overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{chef.name}</h3>

              <div className="flex items-center justify-center gap-1 mb-2">
                {chef.specialties.map((specialty, index) => (
                  <>
                    <p className="text-emerald-600 text-sm">{specialty}</p>
                    {index < chef.specialties.length - 1 && (
                      <span className="text-muted-foreground">•</span>
                    )}
                  </>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1 mb-2">
                {chef.badges.map((badge) => (
                  <Badge variant="secondary">{badge.name}</Badge>
                ))}
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>{chef.recipes} recipes</p>
                <p>{chef.followers} followers</p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Follow Chef
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CookingTips = () => (
  <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Pro Cooking Tips</h2>
        <p className="text-muted-foreground">
          Level up your cooking game with expert advice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Perfect Knife Skills",
            description: "Master the basic cuts for faster, safer food prep",
            icon: "🔪",
            category: "Technique",
            difficulty: "Beginner",
          },
          {
            title: "Temperature Control",
            description: "Learn to manage heat for perfect doneness every time",
            icon: "🌡️",
            category: "Fundamentals",
            difficulty: "Intermediate",
          },
          {
            title: "Flavor Balancing",
            description:
              "Understand how to balance sweet, sour, salty, and umami",
            icon: "🧂",
            category: "Advanced",
            difficulty: "Expert",
          },
          {
            title: "Mise en Place",
            description: "Organize ingredients for stress-free cooking",
            icon: "📝",
            category: "Organization",
            difficulty: "Beginner",
          },
          {
            title: "Sauce Making",
            description: "Master the five mother sauces and their derivatives",
            icon: "🥄",
            category: "Technique",
            difficulty: "Advanced",
          },
          {
            title: "Herb Usage",
            description: "When to use fresh vs dried herbs for maximum flavor",
            icon: "🌿",
            category: "Ingredients",
            difficulty: "Intermediate",
          },
        ].map((tip) => (
          <Card
            key={tip.title}
            className="group hover:shadow-lg transition-all"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{tip.icon}</span>
                <Badge variant="outline">{tip.difficulty}</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600">
                {tip.title}
              </h3>
              <p className="text-muted-foreground mb-4">{tip.description}</p>
              <Badge variant="secondary">{tip.category}</Badge>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <Link href="/cooking-tips">View All Tips</Link>
        </Button>
      </div>
    </div>
  </section>
);

const FeaturedCollections = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Curated Collections</h2>
        <p className="text-muted-foreground">
          Explore our carefully curated recipe collections
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "30-Minute Meals",
            description: "Quick and delicious recipes for busy weekdays",
            image: "/placeholder.svg",
            recipeCount: 25,
            category: "Quick & Easy",
          },
          {
            title: "Mediterranean Feast",
            description: "Healthy and flavorful Mediterranean dishes",
            image: "/placeholder.svg",
            recipeCount: 18,
            category: "Regional",
          },
          {
            title: "Vegetarian Delights",
            description: "Tasty meat-free recipes everyone will love",
            image: "/placeholder.svg",
            recipeCount: 32,
            category: "Vegetarian",
          },
        ].map((collection) => (
          <Card
            key={collection.title}
            className="group cursor-pointer overflow-hidden"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Badge className="absolute top-4 right-4" variant="secondary">
                {collection.category}
              </Badge>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
              <p className="text-muted-foreground mb-4">
                {collection.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-600">
                  {collection.recipeCount} recipes
                </span>
                <Button variant="ghost" size="sm">
                  View Collection
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CommunityHighlights = () => (
  <section className="py-20 bg-emerald-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Community Highlights</h2>
        <p className="text-muted-foreground">
          See what's happening in our cooking community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            type: "achievement",
            user: "Maria Romano",
            content: "Earned Master Chef Badge",
            image: "/placeholder.svg",
            time: "2 hours ago",
          },
          {
            type: "recipe",
            user: "David Chen",
            content: "Shared a new dumpling recipe",
            image: "/placeholder.svg",
            time: "4 hours ago",
            likes: 45,
          },
          {
            type: "milestone",
            user: "Sarah Miller",
            content: "Reached 1000 followers!",
            image: "/placeholder.svg",
            time: "1 day ago",
          },
        ].map((activity) => (
          <Card key={activity.content} className="overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.user}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{activity.user}</h3>
                  <p className="text-sm text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
              <p className="mb-4">{activity.content}</p>
              {activity.type === "recipe" && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {activity.likes} likes
                  </span>
                  <Button variant="outline" size="sm">
                    View Recipe
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
