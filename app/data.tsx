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
  name: string
  company: string
  url: string
  review: string
  stars: number
}

export const REVIEWS: Review[] = [
  {
    name: "Brent Hofen",
    company: "Hofen Lawn Care",
    url: "https://hofenlawncare.com",
    review:
      "Upwards Ads has a clear edge on how to bring in high quality leads using digital ads. I love their heart to serve local businesses.",
    stars: 5,
  },
  {
    name: "Shawn McLendon",
    company: "McLendon Roofing & Remodeling",
    url: "https://mclendonroofing.com",
    review:
      "Upwards Ads has a great eye for the creative product and is dedicated to getting their clients to the next level.",
    stars: 5,
  },
  {
    name: "Daniel Sparks",
    company: "Sparks and Sons Handyman Services",
    url: "https://sparksandsons.com",
    review:
      "Upwards Ads provides the determination and know-how to let your community know what you have to offer with the utmost integrity and dedication.",
    stars: 5,
  },
  {
    name: "Mark McGoldrick",
    company: "McGoldrick Plumbing",
    url: "https://mcgoldrickplumbing.com",
    review: "Upwards Ads has a great eye for the creative product and is dedicated to a high level of service.",
    stars: 5,
  },
  {
    name: "John Doe",
    company: "Doe's Construction",
    url: "https://doesconstruction.com",
    review: "Upwards Ads has unmatched expertise in the digital marketing space. They are a pleasure to work with.",
    stars: 5,
  },
  {
    name: "Jane Doe",
    company: "Doe's Construction",
    url: "https://doesconstruction.com",
    review:
      "For 6 months now, Upwards Ads has been a great partner in our digital marketing efforts. They have never let us down.",
    stars: 5,
  },
]
