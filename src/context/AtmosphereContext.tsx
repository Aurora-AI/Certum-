"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { useNeuroSensor } from "@/hooks/useNeuroSensor";

type AtmosphereState = "NEUTRAL" | "CALM" | "FOCUS" | "URGENT";

interface AtmosphereContextType {
  mood: AtmosphereState;
  debugLastAction: string | null;
}

const AtmosphereContext = createContext<AtmosphereContextType>({
  mood: "NEUTRAL",
  debugLastAction: null,
});

export const useAtmosphere = () => useContext(AtmosphereContext);

export const AtmosphereProvider = ({ children }: { children: React.ReactNode }) => {
  const [mood, setMood] = useState<AtmosphereState>("NEUTRAL");
  const [debugLastAction, setDebugLastAction] = useState<string | null>(null);

  // O Callback que conecta o Sensor ao Cortex (API)
  const handleNeuralSignal = useCallback(async (signal: any) => {
    try {
      // Envia telemetria para o "Cérebro"
      const response = await fetch("/api/cortex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signal),
      });

      const decision = await response.json();
      setDebugLastAction(decision.action);

      // O "Corpo" reage à decisão do Cérebro
      switch (decision.action) {
        case "CALM_DOWN":
          setMood("CALM");
          break;
        case "NUDGE_CTA":
          setMood("URGENT"); // Poderia disparar um destaque no botão
          break;
        case "NO_OP":
        default:
          // Opcional: retornar ao neutro após um tempo ou manter estado
          break;
      }
      
      // Reset automático para evitar que o site fique "calmo" para sempre
      if (decision.action !== "NO_OP") {
         setTimeout(() => setMood("NEUTRAL"), 5000);
      }

    } catch (error) {
      console.error("Falha na conexão neural:", error);
    }
  }, []);

  // Ativa o sensor físico
  useNeuroSensor(handleNeuralSignal);

  // Define as classes CSS baseadas no humor do sistema
  const getAtmosphereClasses = () => {
    switch (mood) {
      case "CALM":
        return "transition-all duration-1000 ease-out saturate-[0.6] brightness-95 blur-[0.5px]";
      case "URGENT":
        return "transition-all duration-300 ease-in contrast-110";
      case "FOCUS":
        return "transition-all duration-700 ease-in-out grayscale-[0.3]";
      default:
        return "transition-all duration-1000 ease-linear";
    }
  };

  return (
    <AtmosphereContext.Provider value={{ mood, debugLastAction }}>
      <div className={`min-h-screen w-full ${getAtmosphereClasses()}`}>
        {children}
        
        {/* Debug Visual (Opcional - remova em produção) */}
        <div className="fixed bottom-2 left-2 text-[10px] opacity-30 pointer-events-none font-mono z-50">
          CORTEX_STATE: {mood} | LAST_OP: {debugLastAction}
        </div>
      </div>
    </AtmosphereContext.Provider>
  );
};
