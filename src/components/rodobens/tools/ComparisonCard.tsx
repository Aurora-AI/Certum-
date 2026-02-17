import { FinancialComparison } from '@/types/rodobens.schema';

interface ComparisonCardProps {
  data: FinancialComparison;
}

export function ComparisonCard({ data }: ComparisonCardProps) {
  const savings = data.totalSavings;
  const isPositive = savings > 0;

  return (
    <div className="bg-nfinite-card text-white border border-glass-border p-6 shadow-xl rounded-none w-full max-w-md my-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sovereign-gold/10 blur-[50px] rounded-full pointer-events-none" />

      <header className="mb-6 relative z-10">
          <span className="text-mono-xs text-graphite-grey block mb-1 uppercase tracking-widest">
              Análise Comparativa
          </span>
          <h3 className="font-display font-light text-2xl text-white">
              Pontual <span className="text-graphite-grey/50 mx-2">vs</span> CDC
          </h3>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
          {/* Pontual Side */}
          <div className="bg-white/5 p-4 border border-white/10">
              <span className="text-xs text-sovereign-gold font-mono block mb-2">PONTUAL</span>
              <div className="text-2xl font-bold mb-1">
                  R$ {data.pontual.totalCost.toLocaleString('pt-BR')}
              </div>
              <div className="text-xs text-gray-400">
                  {data.pontual.months}x de R$ {data.pontual.monthlyParcel.toLocaleString('pt-BR')}
              </div>
          </div>

          {/* Financing Side */}
          <div className="bg-white/5 p-4 border border-white/10 opacity-70">
              <span className="text-xs text-gray-400 font-mono block mb-2">FINANCIAMENTO</span>
              <div className="text-2xl font-bold mb-1 line-through decoration-red-500/50">
                  R$ {data.financing.totalPaid.toLocaleString('pt-BR')}
              </div>
              <div className="text-xs text-gray-400">
                  {data.financing.months}x de R$ {data.financing.monthlyParcel.toLocaleString('pt-BR')}
              </div>
          </div>
      </div>

      {isPositive && (
          <div className="bg-white text-carbon-black p-4 relative z-10 flex items-center justify-between">
              <div>
                  <span className="block text-xs font-bold uppercase tracking-wide text-graphite-grey">
                      Economia Total
                  </span>
                  <span className="font-display text-3xl font-bold tracking-tight text-emerald-600">
                      R$ {savings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
              </div>
              <div className="text-right">
                  <span className="block text-xs text-graphite-grey">Taxa CDC Global</span>
                  <span className="font-mono font-bold">{data.financing.monthlyInterestRate}% a.m.</span>
              </div>
          </div>
      )}
      
      <div className="mt-4 text-xs text-center text-gray-500 font-mono">
          *Simulação baseada em taxas de mercado.
      </div>
    </div>
  );
}
