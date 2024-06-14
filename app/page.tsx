import { Contact } from "@/components/Contact"
import { ParallaxImage } from "@/components/ParallaxImage"
import { ReviewCarousel } from "@/components/ReviewCarousel"
import { Section, SectionId } from "@/components/Section"
import { TeamLink } from "@/components/TeamLink"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { DESCRIPTION, LP_GRID_ITEMS, TITLE } from "./data"

export default function App() {
  return (
    <>
      <Section padding="mirror" className="py-12">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight sm:text-5xl xl:text-6xl">
            {TITLE}
          </h1>

          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">{DESCRIPTION}</p>

          <Button href="/contact" size="lg" className="mr-3">
            Get started
          </Button>
        </div>
      </Section>

      <Section
        className="lg:h-[650px]"
        half
        padding="none"
        left={{
          className: "max-sm:w-full ml-auto md:flex md:justify-end",
          children: (
            <div className="flex h-full w-full max-w-screen-sm flex-col text-end">
              <h2 className="mb-8 text-start text-3xl font-bold tracking-tight sm:text-end sm:text-4xl lg:mb-12 xl:text-5xl">
                About us
              </h2>

              <p className="text-start text-gray-500 sm:text-justify sm:text-lg">
                &quot;Upwards Ads is a digital marketing agency that specializes in helping small businesses grow. We
                are dedicated to helping you reach your business goals and increase your revenue. Our team of experts
                will work with you to create a custom marketing strategy that will help you stand out from the
                competition.&quot;
              </p>

              <div className="mt-12 flex items-end justify-end md:mt-24">
                <TeamLink />
              </div>
            </div>
          ),
        }}
        right={{
          padding: "none",
          overflow: true,
          className: "overflow-hidden max-sm:hidden",
          children: (
            <div className="absolute -top-20 h-[650px] w-full xl:-top-32 xl:h-[900px]">
              <ParallaxImage alt="About us" src="/assets/about.jpeg" />
            </div>
          ),
        }}
      >
        <SectionId id="about" />
      </Section>

      <Section>
        <SectionId id="testimonials" />
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 w-full text-start text-3xl font-bold tracking-tight sm:text-4xl lg:mb-12 xl:text-5xl">
            Testimonials
          </h2>

          <div className="flex h-full w-full items-center justify-center">
            <ReviewCarousel />
          </div>
        </div>
      </Section>

      <Section>
        <SectionId id="services" />
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl lg:mb-12 xl:text-5xl">What we offer</h2>
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-2 lg:grid-cols-4">
            {LP_GRID_ITEMS.map((singleItem, i) => (
              <div
                key={singleItem.title}
                className={cn("flex flex-col items-center justify-between text-center", i === 0 && "pt-2")}
              >
                <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold xl:text-xl">{singleItem.title}</h3>
                <p className="text-gray-500">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section border={false}>
        <Contact />
      </Section>

      <footer className="w-full py-10"></footer>
    </>
  )
}
