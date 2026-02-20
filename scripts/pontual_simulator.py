# FACTORS
FACTOR_AUTO_60 = 0.0214815  # (Linear PDF Auto)
FACTOR_IMOVEL_120 = 0.0105416 # (Derived from Total Tax 26.50% / 120 months)

# RULE SETS
RULES = {
    'light': { 'term': 60, 'factor': FACTOR_AUTO_60, 'antecipacao': 18, 'name': 'Veículo Leve' },
    'heavy': { 'term': 120, 'factor': FACTOR_IMOVEL_120, 'antecipacao': 24, 'name': 'Pesado/Agro' }, # Assuming Heavy matches Imovel term often, or update if specific PDF provided
    'imovel': { 'term': 120, 'factor': FACTOR_IMOVEL_120, 'antecipacao': 24, 'name': 'Imóvel' }
}

def format_currency(value):
    return f"R$ {value:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")

def simulate_pontual(credit_value, type_key='light'):
    """
    Simulates the Pontual Plan.
    """
    if type_key not in RULES:
        print(f"Error: Unknown type {type_key}")
        return

    rule = RULES[type_key]
    term = rule['term']
    factor = rule['factor']
    
    # 1. Full Instalment (Parcela Cheia)
    parcela_cheia = credit_value * factor
    
    # 2. Total Cost
    total_cost = parcela_cheia * term
    
    # 3. Antecipation (Aceleração)
    valor_antecipacao = parcela_cheia * rule['antecipacao']
    
    # 4. Post-Lance (Diluted) Logic
    # Saldo Devedor Mês 6 (Assuming delivery target is roughly M6 for simulation)
    saldo_devedor_m6 = total_cost - (6 * parcela_cheia)
    
    # Amortizing with Lance
    saldo_pos_lance = saldo_devedor_m6 - valor_antecipacao
    
    # Remaining Months
    remaining_months = term - 6
    parcela_diluida = saldo_pos_lance / remaining_months
    
    # 5. Output
    print(f"\n--- SIMULAÇÃO PLANO PONTUAL ({rule['name']}) ---")
    print(f"Prazo: {term} meses")
    print(f"Valor do Crédito: {format_currency(credit_value)}")
    print(f"Taxa Total (Est base): ~{(factor * term - 1)*100:.2f}%")
    print(f"-" * 40)
    print(f"1. Parcela Cheia (Mês 1 a 6): \t{format_currency(parcela_cheia)}")
    print(f"2. Aceleração ({rule['antecipacao']}x) - Mês 6: \t{format_currency(valor_antecipacao)}")
    print(f"3. Saldo Devedor Restante: \t{format_currency(saldo_pos_lance)}")
    print(f"4. Parcela Diluída (Mês 7 a {term}): \t{format_currency(parcela_diluida)}")
    print(f"-" * 40)
    print(f"TOTAL PAGO: \t{format_currency(total_cost)}")
    
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Simulador Pontual Rodobens')
    parser.add_argument('credit', type=float, help='Valor da Carta de Crédito')
    parser.add_argument('--type', type=str, default='light', choices=['light', 'heavy', 'imovel'], help='Tipo de Bem')
    
    args = parser.parse_args()
    
    simulate_pontual(args.credit, args.type)
