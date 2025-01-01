const SITEMAP_SECTIONS = [
  {
    title: "Recipes",
    links: [
      { name: "Browse All", href: "/recipes" },
      { name: "Trending", href: "/trending" },
      { name: "Categories", href: "/categories" },
      { name: "New Recipes", href: "/recipes/new" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Top Chefs", href: "/top-chefs" },
      { name: "Cooking Tips", href: "/cooking-tips" },
      { name: "Blog", href: "/blog" },
    ],
  },
  // Add more sections
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {SITEMAP_SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
