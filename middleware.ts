import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  try {
    const pathname = new URL(req.url).pathname
    for (const rule of Object.keys(ruleHandlers) as Rule[]) {
      if (isPathExemptFromRule(pathname, rule)) {
        continue
      }
      ruleHandlers[rule](req)
    }
    return NextResponse.next()
  } catch (e: any) {
    const ruleError = ruleErrors[e.message as Rule]
    if (ruleError) {
      return NextResponse.json({ status: "error", message: ruleError.message }, { status: ruleError.status })
    }
    return NextResponse.json({ status: "error", message: e.message }, { status: 500 })
  }
}

export const config = {
  // only match /api/* paths
  matcher: ["/api/:path*"],
}

type Rule = "same-origin"

const pathConfigs: {
  pathname: string
  exemptions: Rule[]
}[] = [
  {
    pathname: "/api/health",
    exemptions: ["same-origin"],
  },
]

function isPathExemptFromRule(pathname: string, rule: Rule) {
  return pathConfigs.some((config) => config.pathname === pathname && config.exemptions.includes(rule))
}

class RuleError extends Error {
  constructor(public rule: Rule) {
    super(rule)
  }
}

const ruleErrors: Record<
  Rule,
  {
    message: string
    status: number
  }
> = {
  "same-origin": {
    message: "Request origin is not allowed.",
    status: 403,
  },
}

const ruleHandlers: Record<Rule, (req: NextRequest) => void> = {
  "same-origin": isSameOriginOrThrow,
}

function isSameOriginOrThrow(req: NextRequest) {
  if (new URL(req.url).origin !== req.headers.get("origin")) {
    throw new RuleError("same-origin")
  }
}
