import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TOP_CHEFS = [
  {
    id: 1,
    name: "Maria Romano",
    username: "@mariaromano",
    image: "/placeholder.svg",
    specialty: "Italian Cuisine",
    recipes: 145,
    followers: 12500,
    likes: 45600,
    featured: ["Classic Tiramisu", "Authentic Carbonara"],
    badges: ["Top Chef 2024", "Most Liked"],
  },
  // Add more top chefs
];

export default function TopChefsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Top Home Chefs</h1>
        <p className="text-muted-foreground">
          Meet our most talented and popular recipe creators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TOP_CHEFS.map((chef) => (
          <Card key={chef.id} className="p-6">
            <div className="flex gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{chef.name}</h2>
                    <p className="text-muted-foreground">{chef.username}</p>
                  </div>
                  <Button>Follow</Button>
                </div>
                <p className="text-emerald-600 font-medium mt-2">
                  {chef.specialty}
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                  <span>{chef.recipes} recipes</span>
                  <span>{chef.followers.toLocaleString()} followers</span>
                  <span>{chef.likes.toLocaleString()} likes</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Popular Recipes:</p>
              <div className="flex flex-wrap gap-2">
                {chef.featured.map((recipe) => (
                  <Badge key={recipe} variant="secondary">
                    {recipe}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {chef.badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="outline"
                    className="bg-emerald-50"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
