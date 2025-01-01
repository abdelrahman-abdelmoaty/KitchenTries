export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto prose prose-emerald">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an
            account, share recipes, or communicate with other users. This
            includes:
          </p>
          <ul>
            <li>Name and email address</li>
            <li>Profile information and photos</li>
            <li>Recipes and cooking content you share</li>
            <li>Comments and interactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about updates and features</li>
            <li>Ensure platform security</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
