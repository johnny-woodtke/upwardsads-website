import { Metadata } from "next"
import Image from "next/image"

import { TeamMember, teamMembers } from "./data"

export const metadata: Metadata = {
  description: "Meet the team behind Upwards Ads.",
}

export default function Team() {
  return (
    <section className="w-full max-w-screen-xl">
      <div className="mx-auto h-full w-full p-8 lg:p-12">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 w-full text-start text-3xl font-bold tracking-tight sm:text-4xl lg:mb-12 xl:text-5xl">
            The team
          </h2>
          <p className="mb-8 w-full text-start tracking-tight sm:text-lg lg:mb-12 xl:text-xl">
            Meet the team behind Upwards Ads.
          </p>
          <div className="flex w-full gap-12">
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
    <div className="flex flex-col w-full gap-4">
      <div className="relative w-full aspect-[1]">
        <Image src={image} alt={name} fill className="rounded-full border " />
      </div>
      <div className="w-full">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{role}</p>
        <p className="text-gray-500">{bio}</p>
      </div>
    </div>
  )
}
