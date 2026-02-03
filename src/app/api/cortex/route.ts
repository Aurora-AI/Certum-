import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const telemetry = JSON.stringify(body);

    // Call the Python Cortex directly
    // Note: In production, this should be a persistent WebSocket or microservice call
    // For MVP, we spawn the process
    const command = `python -m cortex.main "living_website_telemetry|${telemetry.replace(/"/g, '\\"')}"`;
    
    // We simulate a response for now because spawning CrewAI on every mousemove is too heavy
    // Real implementation would use a lightweight classifier first
    
    console.log("🧠 Cortex Receiving Telemetry:", telemetry);

    // Mock Response from Cortex for immediate feedback testing
    const mockResponse = {
        action: "NO_OP",
        reason: "Telemetry WNL (Within Normal Limits)"
    };

    if (body.jitter > 0.8) {
        mockResponse.action = "CALM_DOWN";
        mockResponse.reason = "High Anxiety Detected";
    }

    return NextResponse.json(mockResponse);

  } catch (error) {
    console.error("Cortex Bridge Error:", error);
    return NextResponse.json({ error: "Mental Breakdown" }, { status: 500 });
  }
}
