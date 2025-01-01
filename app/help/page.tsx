import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Help Center</h1>
        <p className="text-muted-foreground">
          Find answers to common questions and learn how to use KitchenTries
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">{/* FAQ items would go here */}</div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Creating an Account
              </h3>
              <p className="text-muted-foreground">
                Learn how to create and set up your KitchenTries account
              </p>
              <Button variant="link" className="mt-4">
                Read More
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sharing Recipes</h3>
              <p className="text-muted-foreground">
                Tips for sharing your first recipe on KitchenTries
              </p>
              <Button variant="link" className="mt-4">
                Read More
              </Button>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <Card className="p-6">
            <p className="mb-4">
              Need help? Our support team is here to assist you.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Contact Support
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
}
