import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  //   const token = await request.headers.get("Authorization")?.split(" ")[1];
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5vZ3VhdHUyQGdtYWlsLmNvbSIsImV4cCI6MTcwMjIxNTU1NH0.vuJX8hNY9CTMkZ9RtQZsjvVGYAumnoIk4UAA_pePB3M";
  if (!token) {
    return NextResponse.json({ message: "認証トークンがありません" });
  }
  try {
    const secretKey = new TextEncoder().encode("next-market-app-book");
    const decodedJwt = await jwtVerify(token, secretKey);
    console.log("decodedJwt:", decodedJwt);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ message: "認証トークンが無効です" });
  }
}

export const config = {
  matcher: [
    "/api/item/create",
    "/api/item/update:path*",
    "/api/item/delete:path*",
  ],
};
