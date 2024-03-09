import { Metadata } from "next"
import { ReviewCarousel } from "@/components/ReviewCarousel"
import { Button } from "@/components/ui/button"
import { DESCRIPTION, TITLE } from "@/lib/constants"
import { LP_GRID_ITEMS } from "@/lib/data/lp-items"
import Image from "next/image"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/assets/logo.png",
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://upwardsads-website.vercel.app/",
    images: [
      {
        width: 1200,
        height: 1200,
        url: "https://upwardsads-website.vercel.app/assets/logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="w-full">
        <div className="x-4 mx-auto grid max-w-screen-xl py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              {TITLE}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {DESCRIPTION}
            </p>
            <Button href="/contact" size="lg" className="mr-3">
              Get started
            </Button>
          </div>
        </div>
      </section>

      <section className="flex w-full border-y">
        <div className="w-1/2 max-md:w-full">
          <div className="flex h-full w-full justify-end">
            <div className="mx-autoh-full flex w-full max-w-screen-sm flex-col p-8 text-end lg:p-16">
              <h2 className="mb-8 text-end text-3xl font-bold dark:text-white md:text-4xl lg:mb-12">About us</h2>
              <p className="text-end text-lg text-gray-500 dark:text-gray-400">
                Upwards Ads is a digital marketing agency that specializes in helping small businesses grow. We are
                dedicated to helping you reach your business goals and increase your revenue. Our team of experts will
                work with you to create a custom marketing strategy that will help you stand out from the competition.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-md:hidden">
          <div className="relative aspect-[1] h-full max-h-[800px] w-full">
            <Image alt="About us" src="/assets/about.jpeg" layout="fill" objectPosition="top" objectFit="cover" />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <ReviewCarousel />
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
