import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | RMApps',
  description: 'Terms of Service for RMApps.',
};

export default function TermsPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="space-y-10 text-slate-600 dark:text-slate-300">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                1. Agreement to Terms
              </h2>
              <p className="mt-3">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding
                agreement between you and RMApps (&quot;Company,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) governing your access to and use of our
                website, mobile applications, and related services (collectively,
                the &quot;Service&quot;). Our Service includes our website and any mobile
                applications, e-commerce sites, and related services we operate.
              </p>
              <p className="mt-2">
                By accessing or using the Service, you agree to be bound by these
                Terms. If you do not agree to these Terms, you may not access or
                use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                2. Eligibility
              </h2>
              <p className="mt-3">
                You must be at least 13 years of age (or the age of majority in
                your jurisdiction, if higher) to use the Service. By using the
                Service, you represent that you meet this requirement and have
                the legal capacity to enter into these Terms. If you are using
                the Service on behalf of a business or other entity, you
                represent that you have authority to bind that entity to these
                Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                3. Use of the Service
              </h2>
              <p className="mt-3">
                You may use the Service only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
                <li>Violate any applicable law, regulation, or third-party right</li>
                <li>Use the Service in any way that could harm, disable, or
                  impair the Service or any user</li>
                <li>Attempt to circumvent, disable, or interfere with
                  security-related or access-control features of the Service</li>
                <li>Use the Service to transmit malware, spam, or unauthorized
                  content</li>
                <li>Copy, modify, distribute, or create derivative works of the
                  Service or our content without our prior written consent</li>
                <li>Use automated means (e.g., bots, scrapers) to access the
                  Service except as we expressly permit</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                4. Accounts and Registration
              </h2>
              <p className="mt-3">
                Some parts of the Service may require you to create an account.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activity under your account. You
                agree to notify us promptly of any unauthorized use. We reserve
                the right to suspend or terminate accounts that violate these
                Terms or that we reasonably believe pose a risk to the Service
                or others.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                5. Purchases, Payment, and Refunds
              </h2>
              <p className="mt-3">
                Where the Service allows purchases (e.g., products,
                subscriptions, or paid features), you agree
                to provide accurate payment and shipping information. All
                prices are as displayed at the time of order and are subject to
                applicable taxes and shipping costs. We reserve the right to
                refuse or cancel orders. Refund and return policies will be
                disclosed at the point of purchase or on the relevant product or
                checkout page. Except as required by law or as expressly stated
                in our refund policy, all sales are final once an order has been
                fulfilled or a digital purchase has been completed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                The Service, including all content, features, software, design,
                text, graphics, and trademarks, is owned by RMApps or our
                licensors and is protected by copyright, trademark, and other
                intellectual property laws. You may not copy, modify, distribute,
                sell, or create derivative works based on the Service or our
                content without our prior written consent. You receive only a
                limited, non-exclusive, non-transferable license to access and
                use the Service for your personal or internal business use in
                accordance with these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                7. Disclaimers
              </h2>
              <p className="mt-3">
                <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED.</strong> TO THE FULLEST EXTENT PERMITTED BY
                APPLICABLE LAW, RMAPPS DISCLAIMS ALL WARRANTIES, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-2">
                We do not warrant that the Service will be uninterrupted,
                error-free, secure, or free of harmful components. We do not
                warrant the accuracy, completeness, or usefulness of any
                content on the Service. Any reliance you place on the Service or
                its content is at your sole risk.
              </p>
              <p className="mt-2">
                The Service may contain links to third-party websites or
                services. We are not responsible for and do not endorse the
                content, privacy practices, or terms of any third-party sites.
                Your use of third-party services is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                8. Limitation of Liability
              </h2>
              <p className="mt-3">
                <strong>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO
                EVENT SHALL RMAPPS, ITS AFFILIATES, OFFICERS, DIRECTORS,
                EMPLOYEES, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE,
                OR EXEMPLARY DAMAGES</strong>, INCLUDING BUT NOT LIMITED TO
                DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER
                INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR
                USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-2">
                <strong>IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU
                FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THE SERVICE OR
                THESE TERMS EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO US
                IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE
                HUNDRED UNITED STATES DOLLARS (USD $100).</strong> Some
                jurisdictions do not allow the exclusion or limitation of
                certain damages; in such jurisdictions, our liability will be
                limited to the maximum extent permitted by law.
              </p>
              <p className="mt-2">
                We shall not be liable for: (i) any failure or delay due to
                circumstances beyond our reasonable control (e.g., acts of God,
                war, terrorism, pandemics, internet or system failures); (ii)
                loss or corruption of data; (iii) any conduct or content of any
                third party on or linked from the Service; (iv) any purchases
                or transactions you conduct through the Service with third
                parties; or (v) any decisions you make based on information
                provided through the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                9. Indemnification
              </h2>
              <p className="mt-3">
                You agree to indemnify, defend, and hold harmless RMApps and its
                affiliates, officers, directors, employees, agents, licensors,
                and service providers from and against any and all claims,
                damages, losses, liabilities, costs, and expenses (including
                reasonable attorneys&apos; fees) arising out of or related to: (a)
                your use of the Service; (b) your violation of these Terms or any
                applicable law; (c) your violation of any third-party right,
                including intellectual property or privacy rights; (d) any
                content or data you submit or transmit through the Service; or
                (e) any dispute between you and any third party relating to the
                Service. We reserve the right to assume exclusive defense and
                control of any matter subject to indemnification by you, at your
                expense.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                10. Termination
              </h2>
              <p className="mt-3">
                We may suspend or terminate your access to the Service, or any
                part of it, at any time, with or without cause or notice,
                including for violation of these Terms. Upon termination, your
                right to use the Service ceases immediately. Provisions of these
                Terms that by their nature should survive termination (including
                Disclaimers, Limitation of Liability, Indemnification, and
                Governing Law) shall survive.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                11. Changes to the Terms
              </h2>
              <p className="mt-3">
                We may modify these Terms at any time. We will update the
                &quot;Last updated&quot; date and may notify you via the Service or by
                email when material changes are made. Your continued use of the
                Service after the effective date of revised Terms constitutes
                acceptance of the revised Terms. If you do not agree to the
                revised Terms, you must stop using the Service. We encourage you
                to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                12. Governing Law and Disputes
              </h2>
              <p className="mt-3">
                These Terms and any dispute or claim arising out of or related
                to them or the Service shall be governed by and construed in
                accordance with the laws of the State of New York, United
                States, without regard to its conflict of law principles. You
                agree that any legal action or proceeding shall be brought
                exclusively in the state or federal courts located in New York,
                and you consent to the personal jurisdiction of such courts.
              </p>
              <p className="mt-2">
                To the extent permitted by law, you agree that any claim must be
                filed within one (1) year after the claim arose; otherwise, the
                claim is permanently barred.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                13. General
              </h2>
              <p className="mt-3">
                <strong>Entire Agreement.</strong> These Terms, together with
                our Privacy Policy and any other policies or guidelines we post
                on the Service, constitute the entire agreement between you and
                RMApps regarding the Service and supersede any prior agreements.
              </p>
              <p className="mt-2">
                <strong>Severability.</strong> If any provision of these Terms
                is held to be invalid or unenforceable, the remaining
                provisions will remain in full force and effect.
              </p>
              <p className="mt-2">
                <strong>Waiver.</strong> Our failure to enforce any right or
                provision of these Terms will not be deemed a waiver of such
                right or provision.
              </p>
              <p className="mt-2">
                <strong>Assignment.</strong> You may not assign or transfer
                these Terms or your rights under them without our prior written
                consent. We may assign our rights and obligations without
                restriction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                14. Contact Us
              </h2>
              <p className="mt-3">
                For questions about these Terms of Service, please contact us
                through the information provided on our{' '}
                <Link
                  href="/about/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-400"
                >
                  About
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
