const navigation = {
  main: [
    { name: 'About', href: '/' },
    { name: 'Jobs', href: '#' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/' },
  ],
}

export function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-white hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-white">
          &copy; {year} Blue Horizon Construction, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
