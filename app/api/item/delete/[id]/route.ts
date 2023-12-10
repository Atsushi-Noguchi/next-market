import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function DELETE(request: NextRequest, context: NextFetchEvent) {
  try {
    await connectDB();
    const id = request.nextUrl.pathname.split("/").pop();
    await ItemModel.deleteOne({ _id: id });
    return NextResponse.json({
      message: "アイテムの削除に成功しました",
    });
  } catch (err) {
    return NextResponse.json({ message: "アイテムの削除に失敗しました" });
  }
}
