import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

// Mock users database (replace with real database later)
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@centrotech.pr",
    password: "admin123", // In production, this should be hashed
    name: "Administrador",
    role: "admin",
  },
  {
    id: "2",
    email: "tecnico@centrotech.pr",
    password: "tecnico123",
    name: "Técnico Principal",
    role: "technician",
  },
  {
    id: "3",
    email: "demo@centrotech.pr",
    password: "demo123",
    name: "Usuario Demo",
    role: "user",
  },
];

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Find user
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = await new SignJWT({
      userId: user.id,
      email: user.email,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(JWT_SECRET);

    // Return user data (without password) and token
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}

