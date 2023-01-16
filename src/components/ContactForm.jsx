import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Locations } from './Locations'

export function ContactForm() {
  return (
    <>
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-black" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-black py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Contact Us for Service
              </h2>
              <p className="mt-3 text-lg leading-6 text-white">
                We are committed to providing customer satisfaction on every
                project and will work closely with you to achieve the desired
                result. Please contact us to discuss your needs, or to schedule
                a free on-site evaluation.
              </p>
              <p className="mt-6 text-base text-white">
                Looking for careers?{' '}
                <a href="#" className="font-medium text-white underline">
                  View all job openings
                </a>
                .
              </p>
            </div>
          </div>
          <div className="bg-black py-0 md:py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required='true'
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center rounded-full bg-blue-600 py-2 px-4 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Locations />
    </>
  )
}
