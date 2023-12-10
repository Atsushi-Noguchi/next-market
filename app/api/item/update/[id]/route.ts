import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function PUT(request: NextRequest, context: NextFetchEvent) {
  const updateData = await request.json(); // リクエストボディから更新データを取得
  try {
    await connectDB();
    const id = request.nextUrl.pathname.split("/").pop();
    const currentItem = await ItemModel.findById(id); // 現在のアイテムを取得

    if (currentItem.email !== updateData.email) {
      // 現在のメールアドレスと更新データのメールアドレスが一致しない場合、エラーを返す
      return NextResponse.json({
        message: "メールアドレスが一致しないため、更新できません",
      });
    }

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
