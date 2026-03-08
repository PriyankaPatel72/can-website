import Link from 'next/link';

const footerNavigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1Dhxk9ojd1/?mibextid=wwXIfr',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-xs font-bold text-white">CAN</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Communication Access Network</p>
              <p className="text-[11px] text-gray-400">Hartford, CT • 860-566-9490 • info@cancorp.org</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-gray-300">
            {footerNavigation.main.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white">
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 pl-1">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 border-t border-gray-800 pt-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-[11px] leading-4 text-gray-400">
              &copy; 2025 Communication Access Network. All rights reserved.
            </p>
            <div className="mt-1 md:mt-0">
              <div className="flex space-x-3 text-[11px] text-gray-400">
                <Link href="/accessibility" className="hover:text-gray-300">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}