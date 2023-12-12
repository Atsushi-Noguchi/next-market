import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request: NextRequest, context: any) {
  console.log(context.params.id);
  try {
    await connectDB();
    const singleItems = await ItemModel.findById(context.params.id);
    return NextResponse.json({
      message: "一個のアイテム取得成功",
      data: singleItems,
    });
  } catch (err) {
    return NextResponse.json({ message: "一個のアイテム取得失敗" });
  }
}
