import { NextRequest, NextResponse } from "next/server";

let actions: any[] = [];

export async function GET(request: NextRequest) {
  return NextResponse.json(actions);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newAction = {
      id: Math.random().toString(36).slice(2, 10),
      ...body,
      status: "OPEN",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    actions.push(newAction);
    return NextResponse.json(newAction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
