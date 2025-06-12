import { useState } from 'react';

export default function DonateSection() {
  const [amount, setAmount] = useState('20');
  const [message, setMessage] = useState('');

  const handleDonate = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: Number(amount) * 100 }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setMessage('Error initiating donation.');
    }
  };

  return (
    <section className="p-8 bg-white max-w-xl mx-auto my-10 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
      <label className="block mb-2" htmlFor="amount">Donation Amount (£)</label>
      <input
        id="amount"
        type="number"
        min="1"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleDonate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Donate Now
      </button>
      {message && <p className="mt-2 text-red-600">{message}</p>}
    </section>
  );
}
