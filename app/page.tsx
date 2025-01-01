import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedRecipes />
      <CookingCategories />
      <AboutSection />
      <ChefTestimonials />
    </main>
  );
}

const HeroSection = () => (
  <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-emerald-50 to-teal-50">
    <div className="absolute inset-0 z-0">
      <svg
        className="w-full h-full opacity-30"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern
          id="heroPattern"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-emerald-200"
          />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#heroPattern)" />
      </svg>
    </div>
    <div className="z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
        Your Kitchen Stories Begin Here
      </h1>
      <p className="text-xl text-neutral-700">
        Try new recipes, share your kitchen experiments, and join a community of
        food lovers
      </p>
      <div className="flex gap-4 justify-center">
        <Button
          size="lg"
          className="text-lg bg-emerald-600 hover:bg-emerald-700"
        >
          Start Cooking
        </Button>
        <Button size="lg" variant="outline" className="text-lg">
          Browse Recipes
        </Button>
      </div>
    </div>
  </section>
);

const FeaturedRecipes = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-6">
        Today's Kitchen Adventures
      </h2>
      <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto">
        Discover what other food enthusiasts are cooking up today
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "30-Minute Veggie Stir Fry",
            description:
              "A colorful weeknight dinner packed with fresh vegetables",
            image: "/placeholder.svg",
            chef: "Alex Kim",
            time: "30 mins",
            difficulty: "Easy",
          },
          {
            title: "Grandma's Secret Meatballs",
            description: "Family recipe passed down through generations",
            image: "/placeholder.svg",
            chef: "Maria Torres",
            time: "45 mins",
            difficulty: "Medium",
          },
          {
            title: "Rainbow Smoothie Bowl",
            description: "Start your day with this nutritious breakfast",
            image: "/placeholder.svg",
            chef: "Sarah Wong",
            time: "15 mins",
            difficulty: "Easy",
          },
        ].map((recipe) => (
          <Card
            key={recipe.title}
            className="p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="aspect-video relative mb-4 overflow-hidden rounded">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-sm">
                {recipe.difficulty}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold mb-2">{recipe.title}</h3>
              <p className="text-neutral-600">{recipe.description}</p>
              <div className="flex justify-between items-center text-sm text-neutral-500 mt-4">
                <span>by {recipe.chef}</span>
                <span>⏱️ {recipe.time}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CookingCategories = () => (
  <section className="py-32 bg-emerald-50">
    <div className="container mx-auto px-4 text-center max-w-6xl">
      <h2 className="text-4xl font-bold mb-6">Find Your Cooking Style</h2>
      <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto">
        Every kitchen has a story. What's yours?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          {
            title: "Weeknight Heroes",
            description: "Quick, easy, and delicious meals for busy days",
            icon: "⚡",
          },
          {
            title: "Weekend Projects",
            description:
              "Challenging recipes for when you have time to experiment",
            icon: "👨‍🍳",
          },
          {
            title: "Family Favorites",
            description:
              "Tried and tested recipes that bring everyone together",
            icon: "💝",
          },
        ].map((category) => (
          <div
            key={category.title}
            className="space-y-6 group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">
              {category.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square">
          <Image
            src="/placeholder.svg"
            alt="Kitchen Community"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Welcome to KitchenTries</h2>
          <p className="text-neutral-600 text-lg">
            We believe every kitchen experiment is worth sharing. KitchenTries
            is where home cooks of all levels come together to try new recipes,
            share their successes (and occasional failures!), and grow as cooks.
          </p>
          <p className="text-neutral-600 text-lg">
            From quick weeknight dinners to ambitious weekend projects, every
            recipe has a story. Start your culinary adventure with us today.
          </p>
          <Button variant="outline" className="bg-white">
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const ChefTestimonials = () => (
  <section className="py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-4xl font-bold text-center mb-20">Kitchen Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            name: "James Chen",
            role: "Home Cook",
            quote:
              "KitchenTries helped me go from burning toast to making my own sourdough!",
            image: "/placeholder.svg",
          },
          {
            name: "Priya Sharma",
            role: "Recipe Explorer",
            quote:
              "I love how easy it is to find and try authentic recipes from different cultures.",
            image: "/placeholder.svg",
          },
          {
            name: "Mike Johnson",
            role: "Kitchen Enthusiast",
            quote:
              "The community here is so supportive. We all learn from each other's experiences.",
            image: "/placeholder.svg",
          },
        ].map((testimonial) => (
          <Card
            key={testimonial.name}
            className="p-8 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="w-24 h-24 mx-auto mb-6 relative rounded-full overflow-hidden ring-2 ring-emerald-200 ring-offset-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-neutral-600 mb-6 italic leading-relaxed text-lg">
              "{testimonial.quote}"
            </p>
            <div className="space-y-1">
              <h3 className="font-medium text-lg tracking-wide">
                {testimonial.name}
              </h3>
              <p className="text-sm text-neutral-500 uppercase tracking-wider">
                {testimonial.role}
              </p>
            </div>
            <div className="absolute top-4 left-4 text-4xl opacity-10">"</div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
