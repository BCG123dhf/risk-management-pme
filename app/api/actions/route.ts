import { NextRequest, NextResponse } from "next/server";

let actions: any[] = [];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(actions);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newAction = {
      id: Math.random().toString(36).substr(2, 9),
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
