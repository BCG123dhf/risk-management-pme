import { NextRequest, NextResponse } from "next/server";

const calculateLevel = (probability: string, impact: string): string => {
  const probabilityScore = { LOW: 1, MEDIUM: 2, HIGH: 3 };
  const impactScore = { LOW: 1, MEDIUM: 2, HIGH: 3 };
  const score = (probabilityScore[probability as keyof typeof probabilityScore] || 1) *
                (impactScore[impact as keyof typeof impactScore] || 1);

  if (score >= 9) return "CRITICAL";
  if (score >= 4) return "HIGH";
  if (score >= 2) return "MEDIUM";
  return "LOW";
};

// Mock database (replace with Prisma + PostgreSQL)
let risks: any[] = [];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(risks);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newRisk = {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      level: calculateLevel(body.probability, body.impact),
      status: "OPEN",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    risks.push(newRisk);

    return NextResponse.json(newRisk, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
