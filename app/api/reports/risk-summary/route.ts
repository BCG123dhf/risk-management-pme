import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Mock data pour rapport
    const report = {
      title: "Rapport de synthèse des risques",
      generatedAt: new Date().toISOString(),
      totalRisks: 28,
      criticalRisks: 6,
      highRisks: 12,
      mediumRisks: 8,
      lowRisks: 2,
      byCategory: {
        "Finance": 8,
        "Cyber / Sécurité": 10,
        "Opérationnel": 6,
        "RH": 2,
        "Conformité": 2,
      },
    };

    return NextResponse.json(report);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
