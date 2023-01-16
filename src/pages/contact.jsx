import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { ContactForm } from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Blue Horizon Construction | Excavation Contractor Vancouver</title>
        <meta
          name="description"
          content="Blue Horizon Construction Ltd is an excavation contractor that has been serving residential, commercial and industrial customers in the Metro Vancouver area since 1998."
        />
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main class="bg-black mb-auto">
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  )
}
