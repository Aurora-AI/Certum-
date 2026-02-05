import { useState, useCallback } from 'react';
import { IntakeContract, AtmosphereTelemetry, CortexResponse } from '@/lib/cortex/contract';

export function useCortex() {
  const [lastCommand, setLastCommand] = useState<CortexResponse | null>(null);

  const pulse = useCallback(async (telemetry: AtmosphereTelemetry) => {
    const response = await IntakeContract.transmit(telemetry);
    setLastCommand(response);
    return response;
  }, []);

  return { pulse, lastCommand };
}
