"use client";

const TermsOfService = () => {
  return (
    <main className="min-h-screen text-gray-200 px-6 py-12 lg:px-24 font-sans">
      <section className="max-w-4xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last Updated: May 5, 2025</p>
          <p className="text-gray-300">
            Please read these terms and conditions carefully before using our
            website or services.
          </p>
        </header>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 mt-2">
              By accessing and using our platform, you agree to be bound by
              these Terms of Service. If you do not agree, you may not access or
              use the services provided by our site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              2. User Responsibilities
            </h2>
            <p className="text-gray-300 mt-2">
              You agree to use our platform only for lawful purposes and in a
              way that does not violate the rights of others or restrict their
              use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              3. Intellectual Property
            </h2>
            <p className="text-gray-300 mt-2">
              All content on this website, including text, graphics, logos, and
              software, is the property of GamePublisher Inc. or its licensors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              4. Account Termination
            </h2>
            <p className="text-gray-300 mt-2">
              We reserve the right to suspend or terminate your access to our
              platform at any time, without notice, for violations of these
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              5. Changes to Terms
            </h2>
            <p className="text-gray-300 mt-2">
              We may revise these Terms of Service at any time. Continued use of
              the service means you accept any changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">6. Contact Us</h2>
            <p className="text-gray-300 mt-2">
              If you have any questions about these terms, please contact us at{" "}
              <a
                href="mailto:support@gamepublisher.com"
                className="text-blue-400 hover:underline"
              >
                support@gamepublisher.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
