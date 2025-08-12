import { NextResponse } from "next/server";

// メッセージの型定義
interface ChatMessage {
    id: number;
    role: string;
    message: string;
}

// チャットのメッセージを格納する配列
let chatMessages: ChatMessage[] = [
    {
        id: 1,
        role: "bot",
        message: "こんにちは！",
    },
];

// GETリクエストの処理
export async function GET() {
    return NextResponse.json(chatMessages);
}

// POSTリクエストの処理
export async function POST(request: Request) {
    // リクエストのボディからJSONデータを取得
    const data: Partial<Pick<ChatMessage, "role" | "message">> = await request.json();

    // 必須プロパティのチェック（messageがない場合はエラーにするなどの処理を追加しても良い）
    if (!data.message) {
        return NextResponse.json({ error: "message is required" }, { status: 400 });
    }

    // 新しいメッセージオブジェクトを作成
    const newMessage: ChatMessage = {
        id: chatMessages.length + 1,
        role: data.role ?? "user",
        message: data.message,
    };

    // 新しいメッセージをchatMessages配列に追加
    chatMessages.push(newMessage);

    // botメッセージをchatMessages配列に追加
    chatMessages.push({
        id: chatMessages.length + 1,
        role: "bot",
        message: data.message,
    });

    // 新しいメッセージをレスポンス
    //これなぞchatmessagesの可能性あり
    return NextResponse.json(chatMessages);
}
