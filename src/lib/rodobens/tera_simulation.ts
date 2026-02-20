/**
 * RECALCULO DE COMPARAÇÃO - TERA 1.0 MPI FLEX (DILUIÇÃO)
 * 
 * CENÁRIO PONTUAL (Com Diluição de Lance):
 * 1. Valor Crédito: R$ 97.591
 * 2. Custo Total (120%): R$ 117.109
 * 3. Parcela Cheia (1/60): R$ 1.951,82 (Mês 1 a 6)
 * 
 * 4. Aceleração (Mês 6): Pagamento de R$ 35.132,76 
 *    - Abatimento no Saldo Devedor.
 *    - Saldo Devedor Antes Lance: R$ 117.109 - (6 * 1.951,82) = R$ 105.398
 *    - Saldo Pós Lance: R$ 105.398 - 35.132,76 = R$ 70.265,32
 * 
 * 5. Nova Parcela (Diluída):
 *    - Prazo Restante: 54 meses.
 *    - R$ 70.265,32 / 54 = R$ 1.301,21
 * 
 * CENÁRIO FINANCIAMENTO:
 * - Parcela Fixa: R$ 1.750,00 (60x)
 * 
 * VITÓRIA DO PONTUAL:
 * - Parcela Futura (R$ 1.301) é 25% MENOR que CDC (R$ 1.750).
 * - Economia Total Mantida: R$ 23k.
 */

export const SIMULATION_DATA = {
    car: {
        name: "Tera 1.0 MPI Flex",
        fipe: "R$ 97.591"
    },
    cdc: {
        entry: "R$ 35.132",
        parcel: "R$ 1.750",
        total: "R$ 140.132",
        interest: "R$ 42.541"
    },
    pontual: {
        anticipation: "R$ 35.132", // Mês 6
        parcel_initial: "R$ 1.951", // Mês 1-6
        parcel_final: "R$ 1.301",   // Mês 7-60 (Highlight this!)
        total: "R$ 117.109",
        savings: "R$ 23.023"
    }
};
