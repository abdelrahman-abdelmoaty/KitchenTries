export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="max-w-4xl mx-auto prose prose-emerald">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <section className="mb-8">
          <h2>1. Terms</h2>
          <p>
            By accessing KitchenTries, you agree to be bound by these terms of
            service and agree that you are responsible for compliance with any
            applicable local laws.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. Recipe Content</h2>
          <p>
            All recipes and content submitted to KitchenTries must be your
            original work or you must have permission to share them. You retain
            ownership of your content but grant us a license to display and
            promote it on our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the security of your account and
            password. KitchenTries cannot and will not be liable for any loss or
            damage from your failure to comply with this security obligation.
          </p>
        </section>
      </div>
    </div>
  );
}
