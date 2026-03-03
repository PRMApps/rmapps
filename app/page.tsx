import Link from 'next/link';

const offerings = [
  {
    title: 'Apps',
    description:
      'Custom mobile and desktop applications built for iOS, Android, and the web. From idea to App Store.',
    href: '/services/#apps',
    icon: '📱',
  },
  {
    title: 'Services',
    description:
      'APIs, backends, and digital services that power your product and scale with your business.',
    href: '/services/#services',
    icon: '⚙️',
  },
  {
    title: 'Websites',
    description:
      'Fast, modern websites and web apps that represent your brand and convert visitors into customers.',
    href: '/services/#websites',
    icon: '🌐',
  },
  {
    title: 'Courses',
    description:
      'Structured online courses and learning experiences to educate your audience and grow your authority.',
    href: '/services/#courses',
    icon: '📚',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
              We build apps, services, websites, and courses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              RMApps is a digital product studio. We help businesses and
              creators bring their ideas to life with custom software,
              reliable services, and engaging educational content.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services/"
                className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                View our services
              </Link>
              <Link
                href="/about/"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          What we do
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-300">
          From concept to launch, we deliver the digital products and
          experiences your project needs.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-primary-800"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            App Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-300">
            Coming soon.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-2xl bg-primary-600 px-6 py-12 text-center dark:bg-primary-700 sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to build something?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              Tell us about your project. We’d love to help you ship it.
            </p>
            <Link
              href="/about/"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 transition hover:bg-primary-50"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
