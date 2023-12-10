import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request: NextRequest, context: NextFetchEvent) {
  try {
    await connectDB();
    const id = request.nextUrl.pathname.split("/").pop();
    const singleItems = await ItemModel.find({ _id: id });
    return NextResponse.json({
      message: "一個のアイテム取得成功",
      data: singleItems,
    });
  } catch (err) {
    return NextResponse.json({ message: "一個のアイテム取得失敗" });
  }
}
