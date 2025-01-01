import { Button } from "@/components/ui/button";

const POSITIONS = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team building the future of recipe sharing...",
  },
  {
    title: "Community Manager",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    description: "Help grow and nurture our cooking community...",
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Help us build the future of home cooking and recipe sharing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-emerald-50 rounded-lg">
            <h3 className="font-bold mb-2">Mission-Driven</h3>
            <p className="text-muted-foreground">
              Work on something that brings people together through food
            </p>
          </div>
          <div className="text-center p-6 bg-emerald-50 rounded-lg">
            <h3 className="font-bold mb-2">Remote-First</h3>
            <p className="text-muted-foreground">
              Work from anywhere in the world
            </p>
          </div>
          <div className="text-center p-6 bg-emerald-50 rounded-lg">
            <h3 className="font-bold mb-2">Growing Fast</h3>
            <p className="text-muted-foreground">
              Join a rapidly expanding platform
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          {POSITIONS.map((position, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <p className="text-muted-foreground">{position.department}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{position.location}</p>
                  <p className="text-sm text-muted-foreground">
                    {position.type}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {position.description}
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
