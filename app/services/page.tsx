const services = [
  {
    id: 'apps',
    title: 'Apps',
    icon: '📱',
    description:
      'We design and develop native and cross-platform applications for iOS, Android, and the web. Whether you need a consumer app, a B2B tool, or an internal product, we focus on performance, usability, and store compliance so you can ship with confidence.',
    bullets: [
      'iOS and Android native or cross-platform',
      'App Store and Play Store submission support',
      'UI/UX aligned with platform guidelines',
      'Maintenance and updates',
    ],
  },
  {
    id: 'services',
    title: 'Services',
    icon: '⚙️',
    description:
      'Behind every great app or website are reliable services. We build APIs, backends, and integrations that scale. From authentication and data storage to payments and notifications, we provide the infrastructure your product needs.',
    bullets: [
      'REST and GraphQL APIs',
      'Databases and data modeling',
      'Third-party integrations',
      'Security and compliance considerations',
    ],
  },
  {
    id: 'websites',
    title: 'Websites',
    icon: '🌐',
    description:
      'Your website is often the first impression. We create fast, accessible, and visually strong sites and web applications. From marketing pages and portfolios to full web apps, we use modern tech so your site works everywhere.',
    bullets: [
      'Marketing and landing pages',
      'Web applications (SPAs and full-stack)',
      'SEO and performance optimization',
      'Responsive and accessible design',
    ],
  },
  {
    id: 'courses',
    title: 'Courses',
    icon: '📚',
    description:
      'Turn your expertise into structured learning. We help you plan, produce, and deliver online courses and training—from curriculum design and content structure to platforms and delivery—so your audience can learn effectively.',
    bullets: [
      'Curriculum and module design',
      'Video and written content structure',
      'LMS and course platform setup',
      'Engagement and completion strategies',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            RMApps offers end-to-end development and production for apps,
            backend services, websites, and educational courses. Here’s what we
            do in each area.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-20">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50 sm:p-10"
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-4xl"
                  role="img"
                  aria-hidden
                >
                  {service.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
