import { NextResponse } from 'next/server';
import { PontualMechanism } from '@/lib/rodobens/PontualMechanism';
import { FinancialComparativeEngine } from '@/lib/rodobens/FinancialComparative';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const value = searchParams.get('value');

  if (!value) {
    return NextResponse.json({ 
        error: 'Missing value param',
        example: '/api/debug/pontual?value=50000'
    }, { status: 400 });
  }

  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) {
      return NextResponse.json({ error: 'Invalid number' }, { status: 400 });
  }

  try {
      // 1. Generate Pontual Offer
      const pontualOffer = PontualMechanism.simulate(numericValue);
      
      // 2. Generate Comparison
      const comparison = FinancialComparativeEngine.compare(pontualOffer, numericValue);

      return NextResponse.json({
          input: numericValue,
          isPontualIntent: PontualMechanism.isPontualIntent("Quero economizar juros"),
          data: comparison
      });
  } catch (error) {
      return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
