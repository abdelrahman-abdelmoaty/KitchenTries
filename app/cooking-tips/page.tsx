import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TIPS_CATEGORIES = [
  {
    title: "Kitchen Basics",
    tips: [
      {
        id: 1,
        title: "Knife Skills 101",
        content: "Learn proper knife handling and basic cutting techniques...",
        difficulty: "Beginner",
        image: "/placeholder.svg",
      },
    ],
  },
  // Add more categories
];

export default function CookingTipsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Cooking Tips & Techniques</h1>
        <p className="text-muted-foreground">
          Master essential cooking skills and learn pro techniques
        </p>
      </div>

      {TIPS_CATEGORIES.map((category) => (
        <section key={category.title} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.tips.map((tip) => (
              <Card
                key={tip.id}
                className="overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video relative">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {tip.difficulty}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground">{tip.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
