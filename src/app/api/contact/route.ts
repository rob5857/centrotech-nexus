import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Nombre, email, teléfono y mensaje son requeridos" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // If Supabase is configured, save to database
    if (supabase) {
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name,
            email,
            phone,
            company: company || null,
            message,
            status: "new",
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        return NextResponse.json(
          { error: "Error al guardar el mensaje" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Mensaje recibido exitosamente",
        data: data[0],
      });
    } else {
      // If Supabase is not configured, just log and return success
      console.log("Contact message (Supabase not configured):", {
        name,
        email,
        phone,
        company,
        message,
      });

      return NextResponse.json({
        success: true,
        message: "Mensaje recibido exitosamente (modo demo)",
      });
    }
  } catch (error) {
    console.error("Error processing contact message:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}

