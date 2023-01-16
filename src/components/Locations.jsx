import { EnvelopeIcon, PhoneIcon, HomeIcon } from '@heroicons/react/24/outline'

export function Locations() {
  return (
    <div
      id="locations"
      aria-label="Locations"
      className="mx-auto max-w-7xl py-16 px-6 lg:px-8"
    >
      <div className="md:mb-20 mb-8 mx-auto max-w-2xl md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Our Locations
        </h2>
      </div>
      <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
        <div
          className="mb-12 md:mb-0"
        >
          <h2 className="text-lg font-bold text-white sm:text-2xl sm:tracking-tight">
            Head Office
          </h2>
          <div className="mt-3">
            <p className="text-lg text-white">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div className="mt-9">
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-white">
                <p>+1 (555) 123 4567</p>
                <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <HomeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-white">
                <p>278 - 66A St.</p>
                <p>Delta, BC</p>
                <p>V4L 1M5</p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <EnvelopeIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-base text-white">
                <p>support@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-0">
          <h2 className="text-lg font-bold text-white sm:text-2xl sm:tracking-tight">
            Industrial Works Yard
          </h2>
          <div className="mt-3">
            <p className="text-lg text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              repellat error corporis doloribus similique.
            </p>
          </div>
          <div className="mt-9">
            <div className="flex">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-white">
                <p>+1 (555) 123 4567</p>
                <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <HomeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-3 text-base text-white">
                <p>278 - 66A St.</p>
                <p>Delta, BC</p>
                <p>V4L 1M5</p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <EnvelopeIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-base text-white">
                <p>support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
