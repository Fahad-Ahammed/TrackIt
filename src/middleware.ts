import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const { auth } = NextAuth(authConfig);

export async function middleware(req: NextRequest) {
  try {
    const session = await auth();

    // Redirect unauthenticated users accessing `/dashboard` to `/sign-in`
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      if (!session) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }
    }

    // Redirect authenticated users away from `/sign-in` or `/sign-up` to `/dashboard`
    if (
      session &&
      (req.nextUrl.pathname === "/sign-in" ||
        req.nextUrl.pathname === "/sign-up")
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
