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
    const ruleErrors: Record<
      Rule,
      {
        message: string
        status: number
      }
    > = {
      "valid-origin": {
        message: "Request origin is not allowed.",
        status: 403,
      },
    }

    const ruleError = ruleErrors[e.message as Rule]
    if (ruleError) {
      return NextResponse.json({ status: "error", message: ruleError.message }, { status: ruleError.status })
    }
    return NextResponse.json({ status: "error", message: e.message }, { status: 500 })
  }
}

export const config = {
  matcher: [
    "/api/:path*", // Match all API routes
  ],
}

type Rule = "valid-origin"

const pathConfigs: {
  pathname: string
  exemptions: Rule[]
}[] = [
  {
    pathname: "/api/health",
    exemptions: ["valid-origin"],
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

const ruleHandlers: Record<Rule, (req: NextRequest) => void> = {
  "valid-origin": isValidOriginOrThrow,
}

const ALLOWED_API_ORIGINS = process.env.ALLOWED_API_ORIGINS?.split(",") ?? []

function isValidOriginOrThrow(req: NextRequest) {
  const origin = req.headers.get("origin")
  if (new URL(req.url).origin !== origin || !ALLOWED_API_ORIGINS.includes(origin)) {
    throw new RuleError("valid-origin")
  }
}
