import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "アイテム作成" });
}

export async function POST(request: NextRequest) {
  console.log(await request.json());
  return NextResponse.json({ message: "アイテム作成" });
}
