import { NextRequest, NextResponse } from "next/server";

// Mock database
let risks: any[] = [];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const risk = risks.find((r) => r.id === params.id);
    if (!risk) {
      return NextResponse.json({ error: "Risk not found" }, { status: 404 });
    }
    return NextResponse.json(risk);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const riskIndex = risks.findIndex((r) => r.id === params.id);

    if (riskIndex === -1) {
      return NextResponse.json({ error: "Risk not found" }, { status: 404 });
    }

    risks[riskIndex] = {
      ...risks[riskIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(risks[riskIndex]);
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const riskIndex = risks.findIndex((r) => r.id === params.id);
    if (riskIndex === -1) {
      return NextResponse.json({ error: "Risk not found" }, { status: 404 });
    }

    risks.splice(riskIndex, 1);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
