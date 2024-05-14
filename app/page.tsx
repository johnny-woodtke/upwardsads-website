import Image from "next/image"

import { ReviewCarousel } from "@/components/ReviewCarousel"
import { TeamLink } from "@/components/TeamLink"
import { Button } from "@/components/ui/button"

import { DESCRIPTION, LP_GRID_ITEMS, TITLE } from "./data"

export default function App() {
  return (
    <>
      <section className="w-full">
        <div className="x-4 mx-auto grid max-w-screen-xl py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight sm:text-5xl xl:text-6xl">
              {TITLE}
            </h1>

            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">{DESCRIPTION}</p>

            <Button href="/contact" size="lg" className="mr-3">
              Get started
            </Button>
          </div>
        </div>
      </section>

      <section className="relative flex w-full">
        <div className="absolute top-[-100px] h-0 w-0" id="about" />

        <div className="w-1/2 border-y border-primary/10 max-sm:w-full md:flex md:justify-end">
          <div className="flex h-full w-full max-w-screen-sm flex-col p-8 text-end lg:p-16">
            <h2 className="mb-8 text-start text-3xl font-bold tracking-tight sm:text-end sm:text-4xl lg:mb-12 xl:text-5xl">
              About us
            </h2>

            <p className="text-start text-gray-500 sm:text-justify sm:text-lg">
              Upwards Ads is a digital marketing agency that specializes in helping small businesses grow. We are
              dedicated to helping you reach your business goals and increase your revenue. Our team of experts will
              work with you to create a custom marketing strategy that will help you stand out from the competition.
            </p>

            <div className="flex h-full items-end justify-end md:mt-24 mt-12">
              <TeamLink />
            </div>
          </div>
        </div>

        <div className="w-1/2 max-sm:hidden">
          <div className="relative h-full w-full">
            <Image alt="About us" src="/assets/about.jpeg" fill className="object-fit object-cover" />
          </div>
        </div>
      </section>

      <section className="relative w-full border-b border-primary/10 sm:h-[500px]">
        <div className="absolute top-[-100px] h-0 w-0" id="testimonials" />

        <div className="mx-auto h-full w-full max-w-screen-xl p-8 lg:p-16">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h2 className="mb-8 w-full text-start text-3xl font-bold tracking-tight sm:text-4xl lg:mb-12 xl:text-5xl">
              Testimonials
            </h2>

            <div className="flex h-full w-full items-center justify-center">
              <ReviewCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="absolute top-[-100px] h-0 w-0" id="services" />

        <div className="mx-auto w-full max-w-screen-xl p-8 lg:p-16">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl lg:mb-12 xl:text-5xl">What we offer</h2>

            <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {LP_GRID_ITEMS.map((singleItem) => (
                <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                  <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:h-12 lg:w-12">
                    {singleItem.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{singleItem.title}</h3>
                  <p className="text-gray-500">{singleItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
