"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Award } from "lucide-react";

const FEATURED_CHEFS = [
  {
    name: "Maria Romano",
    image: "/placeholder.svg",
    specialty: "Italian Cuisine",
    recipes: 45,
    followers: 1200,
    awards: ["Top Chef 2024", "Best Pasta"],
  },
  // Add more chefs...
];

const RECENT_ACTIVITIES = [
  {
    type: "recipe",
    user: "Tom Chen",
    action: "shared a new recipe",
    recipe: "Spicy Garlic Noodles",
    time: "2 hours ago",
  },
  // Add more activities...
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Community</h1>
        <p className="text-muted-foreground">
          Connect with passionate home chefs and food enthusiasts
        </p>
      </div>

      {/* Featured Chefs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Chefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_CHEFS.map((chef) => (
            <Card key={chef.name} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{chef.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {chef.specialty}
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <span>{chef.recipes} recipes</span>
                <span>{chef.followers} followers</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {chef.awards.map((award) => (
                  <Badge key={award} variant="secondary">
                    <Award className="w-3 h-3 mr-1" />
                    {award}
                  </Badge>
                ))}
              </div>
              <Button className="w-full">Follow Chef</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">Community Activity</h2>
        <div className="space-y-4">
          {RECENT_ACTIVITIES.map((activity, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={activity.user}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p>
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.recipe}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
