import { NextResponse } from "next/server";
// データベースの接続
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

// すべてのアイテムを取得する
export async function GET() {
  try {
    await connectDB();
    const allItems = await ItemModel.find({});
    return NextResponse.json({ message: "全アイテム取得成功", data: allItems });
  } catch (err) {
    return NextResponse.json({ message: "全アイテム取得失敗" });
  }
}
