"use client"

import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { REVIEWS } from "@/lib/data/reviews"

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
    >
      <CarouselContent>
        {REVIEWS.map((review, i) => {
          const { name, company, review: content, stars } = review
          return (
            <CarouselItem key={i} className="basis-1/3 px-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-full items-center justify-center rounded-full p-1.5 text-blue-700">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} className="mx-1" />
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-bold text-white">{name}</h3>
                <h4 className="mb-2 text-gray-300">{company}</h4>

                <p className="mb-2 text-gray-500">{content}</p>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
