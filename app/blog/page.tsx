const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Essential Kitchen Tips Every Home Cook Should Know",
    excerpt:
      "Master these fundamental cooking techniques to elevate your cooking game...",
    author: "Chef Maria",
    date: "March 15, 2024",
    category: "Cooking Tips",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Seasonal Cooking: Spring Edition",
    excerpt:
      "Make the most of spring produce with these fresh and delicious recipes...",
    author: "Sarah Chen",
    date: "March 10, 2024",
    category: "Seasonal",
    image: "/placeholder.svg",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Kitchen Stories & Tips</h1>
        <p className="text-muted-foreground">
          Discover cooking tips, techniques, and stories from our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group">
            <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-emerald-600">{post.category}</div>
              <h2 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
