"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, UserPlus, ChefHat } from "lucide-react";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "like",
    user: "Maria Romano",
    content: "liked your Pasta Carbonara recipe",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "comment",
    user: "John Smith",
    content: "commented on your Apple Pie recipe",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "follow",
    user: "Sarah Chen",
    content: "started following you",
    time: "2 hours ago",
    read: true,
  },
];

export default function NotificationsPage() {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "comment":
        return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case "follow":
        return <UserPlus className="w-5 h-5 text-emerald-500" />;
      default:
        return <ChefHat className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Notifications</h1>
        <p className="text-muted-foreground">
          Stay updated with your recipe interactions
        </p>
      </div>

      <div className="max-w-2xl space-y-4">
        {NOTIFICATIONS.map((notification) => (
          <Card
            key={notification.id}
            className={`p-4 ${!notification.read ? "bg-emerald-50" : ""}`}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-grow">
                <p>
                  <span className="font-medium">{notification.user}</span>{" "}
                  {notification.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.time}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
