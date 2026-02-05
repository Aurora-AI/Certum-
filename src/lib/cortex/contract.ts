export type CortexCommand = "CALM_DOWN" | "FOCUS" | "NUDGE_CTA" | "NO_OP";

export interface CortexResponse {
  action: CortexCommand;
  reasoning: string;
  timestamp: number;
}

export interface AtmosphereTelemetry {
  jitter: number;
  dwellTime: number;
  velocity: number;
  hoverTarget?: string;
}

/**
 * ELYSIAN INTAKE CONTRACT [v1.0]
 * binds the Neural Shell (Frontend) to the Cortex (Backend).
 */
export const IntakeContract = {
  ENDPOINT: "/api/cortex",
  
  async transmit(telemetry: AtmosphereTelemetry): Promise<CortexResponse> {
    try {
      const response = await fetch(this.ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(telemetry),
      });
      
      if (!response.ok) throw new Error("Cortex Transmission Failed");
      return await response.json();
    } catch (error) {
       // Silent fail in production to preserve immersion
       console.error("Cortex Uplink Severed:", error);
       return { action: "NO_OP", reasoning: "Fallback engaged", timestamp: Date.now() };
    }
  }
};
