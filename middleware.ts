import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  try {
    isValidOriginOrThrow(req)
  } catch (e) {
    return NextResponse.error()
  }
}

export const config = {
  // all paths will be handled by the middleware
  matcher: undefined,
}

function isValidOriginOrThrow(req: NextRequest) {
  const { origin: targetOrigin, pathname: targetPathname } = new URL(req.url)

  if (targetPathname.startsWith("/api")) {
    const requestOrigin = req.headers.get("origin")

    if (targetOrigin !== requestOrigin) {
      throw new Error("Forbidden")
    }
  }
}
