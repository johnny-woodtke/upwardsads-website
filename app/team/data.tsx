export const DESCRIPTION = "Meet the team behind Upwards Ads."

export type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
  socials: {
    name: "LinkedIn" | "Facebook" | "Twitter" | "Instagram" | "Website"
    url: string
  }[]
}

export const teamMembers: TeamMember[] = [
  {
    name: "Craig Swanson",
    role: "CEO",
    image: "/assets/craig-swanson.png",
    bio: "Craig is the CEO of Upwards Ads. He has over 10 years of experience in digital marketing and has helped hundreds of small businesses grow.",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/craig-swanson-123456/",
      },
    ],
  },
  {
    name: "Johnny Woodtke",
    role: "CTO",
    image: "/assets/johnny-woodtke.jpeg",
    bio: "Johnny is the CTO of Upwards Ads. He is an expert in web development and has a passion for creating beautiful and functional websites.",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/johnny-woodtke-123456/",
      },
      {
        name: "Website",
        url: "https://upwardsads.com",
      },
    ],
  },
  {
    name: "Corbyn Polizzi",
    role: "COO",
    image: "/assets/sam-polizzi.jpeg",
    bio: "Sam is the COO of Upwards Ads. She has a background in business development and is dedicated to helping small businesses succeed.",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sam-polizzi-123456/",
      },
    ],
  },
]
