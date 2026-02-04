import { NextResponse } from 'next/server';
import { execFile } from 'child_process';
import util from 'util';

const execFilePromise = util.promisify(execFile);

function telemetryFastPath(body: any) {
  const jitter = Number(body?.jitter ?? 0);
  const dwellTime = Number(body?.dwellTime ?? 0);
  const hoverTarget = body?.hoverTarget;

  const response: { action: string; reason: string } = {
    action: "NO_OP",
    reason: "Telemetry WNL (Within Normal Limits)",
  };

  if (jitter > 0.8) {
    return { action: "CALM_DOWN", reason: "High Anxiety Detected (jitter)" };
  }

  if (hoverTarget === "cta-primary" && dwellTime > 2000) {
    return { action: "NUDGE_CTA", reason: "Hesitation Detected (dwell on CTA)" };
  }

  return response;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const telemetry = JSON.stringify(body ?? {});
    console.log("🧠 Cortex Receiving Telemetry:", telemetry);

    // Fast JS fallback (guaranteed response)
    const fallback = telemetryFastPath(body);

    // Optional Python bridge for parity with cortex/main.py (can be enabled later without UI changes)
    const usePython = (process.env.CORTEX_USE_PYTHON ?? "1") === "1";
    if (!usePython) {
      return NextResponse.json(fallback);
    }

    const python = process.env.CORTEX_PYTHON ?? "python";
    try {
      const { stdout } = await execFilePromise(
        python,
        ["-m", "cortex.main", "--json", "living_website_telemetry", "--telemetry", telemetry],
        { cwd: process.cwd(), timeout: 1500, windowsHide: true }
      );

      const parsed = JSON.parse(stdout.trim());
      if (parsed && typeof parsed === "object" && typeof parsed.action === "string") {
        return NextResponse.json(parsed);
      }

      return NextResponse.json(fallback);
    } catch (e) {
      // If Python isn't available or is slow/unconfigured, we still operate.
      return NextResponse.json(fallback);
    }

  } catch (error) {
    console.error("Cortex Bridge Error:", error);
    return NextResponse.json({ error: "Mental Breakdown" }, { status: 500 });
  }
}
