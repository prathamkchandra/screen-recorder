import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("auth-token");
  
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
