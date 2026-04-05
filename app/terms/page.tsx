export const dynamic = 'force-dynamic';

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-background px-6 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-3xl border border-border/50 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> April 5, 2026
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              Welcome to Sarkin Tech. By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-6">
              Sarkin Tech provides software development services, including web development, responsive design, SEO optimization, and UI/UX design. Our services are provided on a project basis and subject to the terms outlined herein.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-6">
              To access certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content, features, and functionality of our website and services are owned by Sarkin Tech and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">5. User Conduct</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-4">6. Service Availability</h2>
            <p className="text-muted-foreground mb-6">
              While we strive to provide reliable service, we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue our services at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              In no event shall Sarkin Tech be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">8. Indemnification</h2>
            <p className="text-muted-foreground mb-6">
              You agree to indemnify and hold Sarkin Tech harmless from any claims, losses, liability, damages, and expenses arising out of your use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">9. Termination</h2>
            <p className="text-muted-foreground mb-6">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these terms. Upon termination, your right to use our services will cease immediately.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any changes by posting the updated terms on this page. Your continued use of our services after such changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="text-muted-foreground mb-6">
              <p>Email: bn.usmannn22@gmail.com</p>
              <p>Phone: +234 916 015 2870</p>
              <p>Location: Abuja - Kano, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}