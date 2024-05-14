"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { Avatar } from "@/components/Avatar"
import { cn } from "@/lib/utils"

export function TeamLink() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (isClicked && isHovered) {
      setIsHovered(false)
      return
    }

    if (isHovered && !isClicked) {
      setIsHidden(false)
      return
    }

    const timeout = setTimeout(() => {
      setIsHidden(true)
    }, 100)
    return () => {
      clearTimeout(timeout)
    }
  }, [isHovered, isClicked])

  return (
    <div className="flex w-full h-full items-start justify-end">
      <Link
        className={cn("flex")}
        href="/team"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(true)}
      >
        <Avatar src="/assets/craig-swanson.png" />
        <div className="flex flex-col justify-start ml-4 max-sm:ml-3 text-left h-20 w-32">
          <p className="text-primary max-sm:tracking-tight">Craig Swanson</p>
          <p className="text-primary max-sm:tracking-tight">CEO</p>
          <MeetTheTeam
            {...{
              isHidden,
              isHovered,
              isClicked,
            }}
          />
        </div>
      </Link>
    </div>
  )
}

type MeetTheTeamProps = Readonly<{
  isHovered: boolean
  isClicked: boolean
  isHidden: boolean
}>

function MeetTheTeam({ isHidden, isHovered, isClicked }: MeetTheTeamProps) {
  return (
    <div
      className={cn(
        "flex items-center text-primary mt-1 text-sm max-sm:tracking-tight",
        "duration-150",
        isHovered && "sm:animate-in sm:slide-in-from-left",
        !isHovered && cn("sm:animate-out", isClicked ? "sm:slide-out-to-right" : "sm:slide-out-to-left"),
        isHidden && "sm:hidden"
      )}
    >
      <span>Meet the team</span>
      <svg
        className="ml-2 max-sm:ml-1 h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6"></path>
      </svg>
    </div>
  )
}
