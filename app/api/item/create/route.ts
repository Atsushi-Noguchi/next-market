import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET() {
  return NextResponse.json({ message: "アイテム作成" });
}

export async function POST(request: NextRequest) {
  const requestData = await request.json();
  try {
    await connectDB();
    await ItemModel.create(requestData);
    return NextResponse.json({ message: "アイテム作成" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "アイテム作成失敗" });
  }
}
