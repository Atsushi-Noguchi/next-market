import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function DELETE(request: NextRequest, context: NextFetchEvent) {
  const reqBody = await request.json(); // リクエストボディから更新データを取得
  try {
    await connectDB();
    const id = request.nextUrl.pathname.split("/").pop();
    const currentItem = await ItemModel.findById(id); // 現在のアイテムを取得
    if (currentItem.email !== reqBody.email) {
      await ItemModel.deleteOne({ _id: id });
      return NextResponse.json({
        message: "アイテムの削除に成功しました",
      });
    } else {
      return NextResponse.json({
        message: "他のユーザーのアイテムは削除できません",
      });
    }
  } catch (err) {
    return NextResponse.json({ message: "アイテムの削除に失敗しました" });
  }
}
