import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jitter, dwellTime, velocity } = body;

    // Lógica Neuro-Simbólica Simples (Fase 1)
    // Se o usuário agita o mouse (ansiedade) ou move muito rápido (pressa)
    
    let action = "NO_OP";
    let reasoning = "Baseline state maintained.";

    if (jitter > 0.7) {
      action = "CALM_DOWN"; // Comando para o AtmosphereContext
      reasoning = "High jitter detected indicating cognitive load/anxiety.";
    } else if (velocity > 1500) {
      action = "FOCUS"; // Comando para focar contraste
      reasoning = "High velocity indicating expert scanning behavior.";
    } else if (dwellTime > 5000) {
      action = "NUDGE_CTA"; // Comando para sugerir ação
      reasoning = "High dwell time indicating hesitation.";
    }

    // Retorna a decisão para o Frontend (AtmosphereContext)
    return NextResponse.json({
      action,
      reasoning,
      timestamp: Date.now()
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Cortex processing failed", action: "NO_OP" }, 
      { status: 500 }
    );
  }
}
