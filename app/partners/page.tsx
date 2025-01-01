import { Button } from "@/components/ui/button";

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Partner with KitchenTries</h1>
          <p className="text-xl text-muted-foreground">
            Reach millions of passionate home cooks and food enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Partner With Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Engaged Community</h3>
                  <p className="text-muted-foreground">
                    Connect with millions of active home cooks
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Targeted Reach</h3>
                  <p className="text-muted-foreground">
                    Connect with food enthusiasts who match your brand
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Partnership Options</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sponsored Content</h3>
                  <p className="text-muted-foreground">
                    Create branded recipes and cooking tips
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Brand Integration</h3>
                  <p className="text-muted-foreground">
                    Integrate your products into our platform
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Become a Partner
          </Button>
        </div>
      </div>
    </div>
  );
}
