export default function GuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto prose prose-emerald">
        <h1 className="text-4xl font-bold mb-8">Recipe Guidelines</h1>

        <section className="mb-8">
          <h2>Recipe Quality Standards</h2>
          <ul>
            <li>Clear, step-by-step instructions</li>
            <li>Accurate measurements and cooking times</li>
            <li>High-quality photos of the finished dish</li>
            <li>Complete list of ingredients</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Photo Guidelines</h2>
          <ul>
            <li>Well-lit, clear photos</li>
            <li>Main photo should show the completed dish</li>
            <li>Additional photos can show key steps</li>
            <li>Minimum resolution: 1200x800 pixels</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Recipe Writing Tips</h2>
          <ul>
            <li>Use clear, concise language</li>
            <li>Include prep and cooking times</li>
            <li>Note any special equipment needed</li>
            <li>Add helpful tips and variations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Community Guidelines</h2>
          <ul>
            <li>Be respectful in comments and discussions</li>
            <li>Give credit for adapted recipes</li>
            <li>Share constructive feedback</li>
            <li>Report inappropriate content</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
