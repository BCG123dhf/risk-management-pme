import { NextRequest, NextResponse } from "next/server";

let incidents: any[] = [];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(incidents);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newIncident = {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      status: "OPEN",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    incidents.push(newIncident);

    return NextResponse.json(newIncident, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
