import { NextRequest, NextResponse } from "next/server";

const mockUsers = [
  { email: "admin@pmr.bf", password: "admin123", name: "Administrateur" },
  { email: "director@pmr.bf", password: "admin123", name: "Directeur" },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mode, email, password, name } = body;

    if (mode === "register") {
      const user = { id: Math.random().toString(36).slice(2), email, name };
      return NextResponse.json({ user, message: "User created" }, { status: 201 });
    }

    if (mode === "login") {
      const user = mockUsers.find((u) => u.email === email && u.password === password);
      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      return NextResponse.json({ user: { id: "u1", email: user.email, name: user.name } });
    }

    return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
