import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("auth_token"); // Access the cookie
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user-settings"],
};
