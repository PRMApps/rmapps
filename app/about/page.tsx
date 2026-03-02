export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About RMApps
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            We’re a digital product studio focused on building apps, services,
            websites, and courses that help businesses and creators succeed
            online.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800/50 sm:p-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              What we do
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              RMApps designs and develops mobile apps, backend services,
              websites, and online courses. We work with businesses and
              individuals who want to bring ideas to life—from initial concept
              and design through development, launch, and ongoing support. Our
              work spans consumer and business applications, web presence, and
              educational content.
            </p>

            <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
              Our offerings
            </h2>
            <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
              <li>
                <strong>Apps</strong> — Native and cross-platform mobile and
                desktop applications for iOS, Android, and the web.
              </li>
              <li>
                <strong>Services</strong> — APIs, backends, and digital
                infrastructure that power your products.
              </li>
              <li>
                <strong>Websites</strong> — Fast, modern websites and web
                applications for marketing and product.
              </li>
              <li>
                <strong>Courses</strong> — Structured online courses and
                learning experiences.
              </li>
            </ul>

            <h2 className="mt-10 text-xl font-bold text-slate-900 dark:text-white">
              Contact
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              For business inquiries, partnership opportunities, or to discuss
              a project, please reach out via your preferred channel. We’re
              happy to talk about how we can help with your next app, service,
              website, or course.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              <strong>RMApps</strong>
              <br />
              <a
                href="mailto:projectrmapps@gmail.com"
                className="font-medium text-primary-600 hover:underline dark:text-primary-400"
              >
                projectrmapps@gmail.com
              </a>
              <br />
              Business & developer inquiries welcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
