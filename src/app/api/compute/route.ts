import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { initial, wallet } = await req.json();
    
    if (!initial || !wallet) {
      return NextResponse.json({ error: "Missing initial amount or wallet" }, { status: 400 });
    }

    // Simulate current value: initial * (1 + random between -10% and +40%)
    const randomChange = (Math.random() * 0.5) - 0.1; // -0.1 to +0.4
    const current = initial * (1 + randomChange);
    
    // Compute PnL
    const pnl = ((current - initial) / initial) * 100;
    
    // Generate proof
    const generateHex = (len: number) => {
      let result = '0x';
      const chars = '0123456789abcdef';
      for (let i = 0; i < len; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    }
    const proof = generateHex(64);

    // Generate encrypted balance
    const chars = ['█', '▓', '▒', '░', '◉'];
    let encryptedBalance = '';
    for (let i = 0; i < 8; i++) {
      encryptedBalance += chars[Math.floor(Math.random() * chars.length)];
    }

    return NextResponse.json({
      pnl: (pnl > 0 ? '+' : '') + pnl.toFixed(2) + '%',
      proof,
      encryptedBalance
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
