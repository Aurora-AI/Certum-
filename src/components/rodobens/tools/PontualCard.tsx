import { PontualOffer } from '@/types/rodobens.schema';

interface PontualCardProps {
  data: PontualOffer;
}

export function PontualCard({ data }: PontualCardProps) {
  return (
    <div className="bg-white border border-glass-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none max-w-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
            <span className="text-mono-xs text-sovereign-gold block mb-1">RODOBENS PONTUAL</span>
            <h3 className="font-display font-medium text-xl text-carbon-black leading-tight">
                {data.highlightFeature || 'Entrega Rápida'}
            </h3>
        </div>
        <div className="bg-carbon-black text-white px-2 py-1 text-xs font-mono">
            {data.months} MESES
        </div>
      </div>

      <div className="space-y-4 font-body text-sm text-graphite-grey">
        <div className="flex justify-between border-b border-glass-border pb-2">
            <span>Parcela Mensal</span>
            <span className="font-bold text-lg text-carbon-black">
                R$ {data.monthlyParcel.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
            <span>Custo Total ({data.months}x)</span>
            <span className="font-mono">R$ {data.totalCost.toLocaleString('pt-BR')}</span>
        </div>

        <div className="bg-gray-50 p-3 text-xs border border-glass-border mt-2">
            <span className="block font-bold mb-1 text-carbon-black">Veículos Sugeridos:</span>
            <div className="flex gap-2 flex-wrap">
                {data.compatibleVehicles.map(v => (
                    <span key={v} className="bg-white px-2 py-1 border border-glass-border text-graphite-grey">
                        {v}
                    </span>
                ))}
            </div>
        </div>
      </div>
      
      <button className="w-full mt-6 bg-carbon-black text-white font-mono text-xs py-3 uppercase hover:bg-sovereign-gold hover:text-carbon-black transition-colors">
          Simular Contratação
      </button>
    </div>
  );
}
