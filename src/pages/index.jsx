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
import { Locations } from '@/components/Locations'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Horizon Construction | Excavation Contractor</title>
        <meta
          name="description"
          content="Blue Horizon Construction Ltd is an excavation contractor that has been serving residential, commercial and industrial customers"
        />
      </Head>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main class="mb-auto bg-black">
          <Hero />
          <PrimaryFeatures />
          <Pricing />
          <Testimonials />
          {/* <SecondaryFeatures /> */}
          {/* <CallToAction /> */}
          {/* <Faqs /> */}
          <Locations/>
        </main>
        <Footer />
      </div>
    </>
  )
}
