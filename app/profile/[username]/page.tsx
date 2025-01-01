"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Settings, Award, Users, BookOpen } from "lucide-react";

export default function ProfilePage() {
  const userProfile = {
    username: "mariakitchen",
    name: "Maria Romano",
    bio: "Passionate home chef sharing authentic Italian recipes",
    image: "/placeholder.svg",
    followers: 1240,
    following: 385,
    recipes: 45,
    achievements: [
      "Top Chef 2024",
      "Recipe of the Month",
      "Community Favorite",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Profile Header */}
      <div className="mb-12">
        <div className="flex items-start gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src={userProfile.image}
              alt={userProfile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
                <p className="text-muted-foreground mb-4">
                  @{userProfile.username}
                </p>
              </div>
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            <p className="text-lg mb-4">{userProfile.bio}</p>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="font-bold">{userProfile.recipes}</p>
                <p className="text-sm text-muted-foreground">Recipes</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{userProfile.followers}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{userProfile.following}</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <Tabs defaultValue="recipes">
        <TabsList className="mb-8">
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="recipes">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recipe cards would go here */}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Saved recipes would go here */}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userProfile.achievements.map((achievement) => (
              <Card key={achievement} className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <h3 className="font-semibold text-lg mb-2">{achievement}</h3>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
