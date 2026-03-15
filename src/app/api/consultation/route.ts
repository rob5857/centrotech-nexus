import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Nombre, email, teléfono y servicio son requeridos" },
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
        .from("consultation_requests")
        .insert([
          {
            name,
            email,
            phone,
            company: company || null,
            service,
            message: message || null,
            status: "new",
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        return NextResponse.json(
          { error: "Error al guardar la solicitud" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Solicitud de consultoría recibida exitosamente",
        data: data[0],
      });
    } else {
      // If Supabase is not configured, just log and return success
      console.log("Consultation request (Supabase not configured):", {
        name,
        email,
        phone,
        company,
        service,
        message,
      });

      return NextResponse.json({
        success: true,
        message: "Solicitud de consultoría recibida exitosamente (modo demo)",
      });
    }
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}

