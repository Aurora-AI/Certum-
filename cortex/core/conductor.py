import os
import sys
from pathlib import Path

class SovereignGateSystem:
    """
    Implementação técnica do saas-conductor.md.
    Garante que os princípios do Trustware sejam respeitados fisicamente no código.
    """
    
    def __init__(self, project_root: str = "."):
        self.root = Path(project_root)
        self.required_nervous_system = [
            "src/context/AtmosphereContext.tsx",
            "src/hooks/useNeuroSensor.ts",
            "src/app/api/cortex/route.ts"
        ]

    def check_gate_2_primitives(self) -> bool:
        """
        Gate 2: Primitives Implementation.
        Verifica se a infraestrutura cognitiva básica está presente.
        """
        print("🛡️  CONDUCTOR: Verificando Integridade do Sistema Nervoso...")
        
        missing_organs = []
        for file_path in self.required_nervous_system:
            full_path = self.root / file_path
            if not full_path.exists():
                missing_organs.append(file_path)
        
        if missing_organs:
            print(f"❌ BLOQUEIO DE PRODUÇÃO. Órgãos vitais ausentes: {missing_organs}")
            print("   Regra: 'Se não aguenta produção, não entra.' (Manual v6)")
            return False
            
        # Verificação profunda: O Layout está conectado?
        layout_path = self.root / "src/app/layout.tsx"
        if layout_path.exists():
            content = layout_path.read_text(encoding="utf-8")
            if "AtmosphereProvider" not in content:
                print("❌ BLOQUEIO: O cérebro existe, mas está desconectado do corpo (Layout).")
                return False

        print("✅ GATE 2 PASSOU: Infraestrutura Cognitiva Ativa.")
        return True

    def enforce_production_first(self):
        """Executa a verificação e encerra o processo se falhar."""
        if not self.check_gate_2_primitives():
            sys.exit(1)

if __name__ == "__main__":
    gate = SovereignGateSystem()
    gate.enforce_production_first()
