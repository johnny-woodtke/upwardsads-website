import { Metadata } from "next"
import Image from "next/image"

import { TITLE } from "@/app/data"
import { metadata as defaultMetadata } from "@/app/layout"

import { DESCRIPTION, TeamMember, teamMembers } from "./data"

export const metadata: Metadata = {
  title: TITLE + " | The Team",
  description: DESCRIPTION,
  openGraph: {
    ...defaultMetadata.openGraph,
    url: "https://upwardsads.com/team",
  },
}

export default function Team() {
  return (
    <section className="w-full max-w-screen-xl">
      <div className="mx-auto h-full w-full p-8 lg:p-12">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 w-full text-start text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">The Team</h2>
          <p className="mb-8 w-full text-start tracking-tight text-gray-500 sm:text-lg lg:mb-12 xl:text-xl">
            {DESCRIPTION}
          </p>
          <div className="flex w-full gap-12 max-lg:flex-col">
            {teamMembers.map((teamMember) => (
              <TeamMemberCard key={teamMember.name} {...teamMember} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type TeamMemberCardProps = Readonly<TeamMember>

function TeamMemberCard({ name, role, image, bio }: TeamMemberCardProps) {
  return (
    <div className="flex w-full items-center gap-8 rounded-2xl border border-primary/30 p-4 lg:flex-col">
      <div className="relative aspect-[1] w-[80%] max-lg:w-[35%] max-md:w-[50%]">
        <Image src={image} alt={name} fill className="rounded-full border-[1px] border-primary/10 p-1" />
      </div>
      <div className="w-full">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="">{role}</p>
        <p className="mt-2 text-gray-500">{bio}</p>
      </div>
    </div>
  )
}
