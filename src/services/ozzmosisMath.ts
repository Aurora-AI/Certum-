// Ported directly from Ozzmosis python toolbelt (consorcio.py & finance.py)
// Deterministic physics for financial planning

export interface ConsorcioParams {
    credit_value: number;
    term_months: number;
    admin_fee_total_rate?: number;
    insurance_monthly_rate?: number;
    reserve_fund_total_rate?: number;
    assembly_fee_monthly?: number;
    reduced_percent?: number;
    reduced_applies_to?: 'total' | 'common_fund';
}

export interface ConsorcioResult {
    monthly_installment: number;
    monthly_installment_before_reduction: number;
    breakdown: {
        common_fund: number;
        admin_fee: number;
        insurance: number;
        reserve_fund: number;
        assembly_fee: number;
        reduction: number;
    };
}

export const ozzmosisConsorcio = (params: ConsorcioParams): ConsorcioResult => {
    const p = {
        admin_fee_total_rate: 0,
        insurance_monthly_rate: 0,
        reserve_fund_total_rate: 0,
        assembly_fee_monthly: 0,
        reduced_percent: 0,
        reduced_applies_to: 'total',
        ...params
    };

    const common_fund_monthly = p.credit_value / p.term_months;
    const admin_fee_total = p.credit_value * p.admin_fee_total_rate;
    const admin_fee_monthly = admin_fee_total / p.term_months;
    const reserve_total = p.credit_value * p.reserve_fund_total_rate;
    const reserve_monthly = reserve_total / p.term_months;
    const insurance_monthly = p.credit_value * p.insurance_monthly_rate;

    const before_reduction = common_fund_monthly + admin_fee_monthly + reserve_monthly + insurance_monthly + p.assembly_fee_monthly;

    const reduction_base = p.reduced_applies_to === 'total' ? before_reduction : common_fund_monthly;
    const reduction = reduction_base * p.reduced_percent;
    const monthly = Math.max(before_reduction - reduction, 0);

    return {
        monthly_installment: monthly,
        monthly_installment_before_reduction: before_reduction,
        breakdown: {
            common_fund: common_fund_monthly,
            admin_fee: admin_fee_monthly,
            insurance: insurance_monthly,
            reserve_fund: reserve_monthly,
            assembly_fee: p.assembly_fee_monthly,
            reduction: reduction
        }
    };
};

export const ozzmosisAmortizationSAC = (principal: number, annualRateRaw: number, months: number) => {
    const monthlyRate = Math.pow(1 + (annualRateRaw / 100), 1 / 12) - 1;
    const amort = principal / months;
    
    let balance = principal;
    const schedule = [];
    
    for (let i = 1; i <= months; i++) {
        const interest = balance * monthlyRate;
        const pmt = amort + interest;
        balance = Math.max(balance - amort, 0);
        
        schedule.push({
            month: i,
            payment: pmt,
            interest: interest,
            amortization: amort,
            balance: balance
        });
    }

    return schedule;
};
