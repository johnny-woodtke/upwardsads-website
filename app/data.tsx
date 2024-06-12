import {
  ActivityIcon,
  DollarSignIcon,
  GripIcon,
  Laptop2Icon,
  NotebookPenIcon,
  SearchIcon,
  TargetIcon,
  TwitterIcon,
} from "lucide-react"

export const TITLE = "Upwards Ads"

export const DESCRIPTION = "Grow your business by leveraging the power of an influential online presence."

type LpGridItem = {
  title: string
  description: string
  icon: React.ReactNode
}

export const LP_GRID_ITEMS: LpGridItem[] = [
  {
    title: "Quality Lead Generation",
    description: "Attract high-quality leads to your business.",
    icon: <DollarSignIcon className="h-6 w-6" />,
  },
  {
    title: "Search Engine Optimization",
    description: "Stand out in search results with outstanding SEO.",
    icon: <SearchIcon className="h-6 w-6" />,
  },
  {
    title: "Social Media Marketing",
    description: "Engage with your audience on social platforms.",
    icon: <TwitterIcon className="h-6 w-6" />,
  },

  {
    title: "Content Marketing",
    description: "Educate your audience with valuable content.",
    icon: <NotebookPenIcon className="h-6 w-6" />,
  },
  {
    title: "Website Development",
    description: "Build trust with a beautiful, functional website.",
    icon: <Laptop2Icon className="h-6 w-6" />,
  },
  {
    title: "Conversion Optimization",
    description: "Turn visitors into paying customers with ease.",
    icon: <ActivityIcon className="h-6 w-6" />,
  },
  {
    title: "Targeted Advertising",
    description: "Reach your ideal customers with precision.",
    icon: <TargetIcon className="h-6 w-6" />,
  },

  {
    title: "And More",
    description: "Custom solutions tailored to your business.",
    icon: <GripIcon className="h-6 w-6" />,
  },
]

type Review = {
  imagePath: string
  name: string
  company: string
  url: string
  review: string
  stars: number
}

export const REVIEWS: Review[] = [
  {
    imagePath: "/assets/reviews/quick-clean-windows.webp",
    name: "Jake Jensen",
    company: "Quick Clean Windows",
    url: "https://www.quickcleanwindows.com/",
    review:
      "Craig Swanson helped me turn my business around with Facebook Ads. I went from a few calls a week to about 5-6 calls per day once he started running them for me. I highly recommend Craig and Upwards Ads.",
    stars: 5,
  },
  {
    imagePath: "/assets/reviews/tagsonar.webp",
    name: "Mike Anghel",
    company: "TagSonar",
    url: "https://www.tagsonar.com/",
    review:
      "Upwards Ads is our go-to partner for paid media ads. We refer Craig Swanson exclusively to our home service provider clients to drive online leads. He handles everything gets our clients' phones ringing!",
    stars: 5,
  },
  {
    imagePath: "/assets/reviews/kellogg-plumbing.webp",
    name: "Justin Bergendahl",
    company: "Kellogg Plumbing",
    url: "https://www.kelloggplumbingllc.com/",
    review:
      "I highly recommend Upwards Ads. The Upwards Ads team's work ethic, honesty, and integrity has shown me time and time again that my business is in the right hands.",
    stars: 5,
  },
  {
    imagePath: "/assets/reviews/hofen-lawn-care.jpg",
    name: "Brent Hofen",
    company: "Hofen Lawn Care",
    url: "https://hofenlawncare.com",
    review:
      "Upwards Ads has been a great partner for us. They have helped us grow our business opportunities by well over 100% and have been very responsive to our needs. I highly recommend them to anyone looking to grow their business.",
    stars: 5,
  },
  {
    imagePath: "/assets/reviews/mclendon-roofing.jpg",
    name: "Shawn McLendon",
    company: "McLendon Roofing",
    url: "https://mclendonroofing.com",
    review:
      "The Upwards Ads team is amazing! They are very professional and knowledgeable. I never imagined that my business could grow so quickly. I highly recommend them to anyone looking to get their business to the next level.",
    stars: 5,
  },
  {
    imagePath: "/assets/reviews/sparks-and-sons-llc.jpeg",
    name: "Daniel Sparks",
    company: "Sparks and Sons LLC",
    url: "https://sparksandsons.com",
    review:
      "Upwards Ads has been a game changer for my business. Craig Swanson showed me how valuable Facebook Ads and online marketing can be for my business. I highly recommend them to anyone who may be skeptical or unsure about online marketing.",
    stars: 5,
  },
]
