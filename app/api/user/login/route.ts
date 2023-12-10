import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import { SignJWT } from "jose";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";

export async function POST(request: NextRequest, context: NextFetchEvent) {
  try {
    await connectDB();
    const userData = await request.json(); // リクエストボディからユーザーデータを取得
    const user = await UserModel.findOne({ email: userData.email }); // ユーザーをデータベースから検索
    if (!user) {
      return NextResponse.json({ message: "ユーザーが見つかりません" });
    }
    if (user.password !== userData.password) {
      return NextResponse.json({ message: "パスワードが間違っています" });
    }

    const secretKey = new TextEncoder().encode("next-market-app-book");

    const payload = {
      email: userData.email,
    };

    // トークンの発行処理
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("30m")
      .sign(secretKey);
    console.log(token);
    return NextResponse.json({ message: "ログイン成功", data: user, token });
  } catch (err) {
    return NextResponse.json({ message: "ログイン失敗" });
  }
}
