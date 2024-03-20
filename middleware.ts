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
  // only match /api/* paths
  matcher: ["/api/:path*"],
}

function isValidOriginOrThrow(req: NextRequest) {
  const { origin: targetOrigin } = new URL(req.url)
  const requestOrigin = req.headers.get("origin")
  if (targetOrigin !== requestOrigin) {
    throw new Error("Forbidden")
  }
}
