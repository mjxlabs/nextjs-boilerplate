import { NextResponse } from 'next/server';

export async function GET() {
  const tickets = [
    { id: 1, event: 'Taylor Swift Concert', seat: 'A12', price: 5000 },
    { id: 2, event: 'Coldplay Concert', seat: 'B3', price: 6500 },
    { id: 3, event: 'Arijit Singh Live', seat: 'C5', price: 4500 },
  ];

  return NextResponse.json(tickets);
}
