import { NextRequest, NextResponse } from "next/server";

let controls: any[] = [];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(controls);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newControl = {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      status: "ACTIVE",
      effectiveness: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    controls.push(newControl);

    return NextResponse.json(newControl, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
