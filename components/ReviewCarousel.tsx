"use client"

import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"
import Link from "next/link"

import { REVIEWS } from "@/app/data"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function ReviewCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full max-w-[90%]"
    >
      <CarouselContent>
        {REVIEWS.map(({ name, company, review: content, stars, url }, i) => (
          <CarouselItem key={i} className="w-0 sm:basis-1/2 lg:basis-1/3">
            <div className="mx-2 flex flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-10 w-full items-center justify-center rounded-full p-1.5 text-blue-700">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} className="mx-1" />
                ))}
              </div>

              <h3 className="mb-1 text-xl font-bold text-white">{name}</h3>
              <Link href={url}>
                <h4 className="mb-2 text-gray-300 hover:underline">{company}</h4>
              </Link>

              <p className="mb-2 text-gray-500">{content}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}
