import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function PUT(request: NextRequest, context: NextFetchEvent) {
  try {
    await connectDB();
    const id = request.nextUrl.pathname.split("/").pop();
    const updateData = await request.json(); // リクエストボディから更新データを取得
    const updatedItem = await ItemModel.findByIdAndUpdate(id, updateData, {
      new: true,
    }); // アイテムを更新
    return NextResponse.json({
      message: "アイテム編集成功",
      data: updatedItem,
    });
  } catch (err) {
    return NextResponse.json({ message: "アイテム編集失敗" });
  }
}
