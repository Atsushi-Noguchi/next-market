import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";

export async function POST(request: NextRequest, context: NextFetchEvent) {
  try {
    await connectDB();
    const userData = await request.json(); // リクエストボディからユーザーデータを取得
    const newUser = new UserModel(userData); // 新しいユーザーを作成
    await newUser.save(); // ユーザーをデータベースに保存
    return NextResponse.json({ message: "ユーザー登録成功", data: newUser });
  } catch (err) {
    return NextResponse.json({ message: "ユーザー登録失敗" });
  }
}
