export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About KitchenTries</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            KitchenTries is a community-driven platform where passionate home
            cooks come together to share, discover, and celebrate the joy of
            cooking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To create a global kitchen where every home cook can share their
                unique recipes, learn from others, and preserve culinary
                traditions for generations to come.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the world's most trusted and inclusive platform for
                sharing authentic home cooking experiences and recipes.
              </p>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2024, KitchenTries began with a simple idea: every home
              cook has something unique to share. We believed that by creating a
              platform where people could easily share their recipes and cooking
              experiences, we could help preserve family traditions and inspire
              new culinary adventures.
            </p>
            <p className="text-muted-foreground">
              Today, our community includes thousands of home cooks from around
              the world, each bringing their own flavors, techniques, and
              stories to the table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
