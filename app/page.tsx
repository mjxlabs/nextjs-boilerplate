'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/tickets')
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">🎟️ Concert Ticket Resale</h1>
      <ul className="space-y-4">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="border p-4 rounded shadow">
            <p>Event: {ticket.event}</p>
            <p>Seat: {ticket.seat}</p>
            <p>Price: ₹{ticket.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
