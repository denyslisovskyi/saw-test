import { NextRequest, NextResponse } from "next/server";

const blacklist = ["1.2.3.4", "5.6.7.8"];

export function middleware(req: NextRequest) {
  const ip =
    req.ip ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "";

  if (blacklist.includes(ip)) {
    return new Response("Access denied", { status: 403 });
  }

  return NextResponse.next();
}
