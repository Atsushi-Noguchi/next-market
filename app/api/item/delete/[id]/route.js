import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function DELETE(request, context) {
  const reqBody = await request.json(); // リクエストボディから更新データを取得
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id); // 更新対象のアイテムを取得

    if (singleItem.email === reqBody.email) {
      await ItemModel.deleteOne({ _id: context.params.id });
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
