import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-green-50 p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Support!</h1>
      <p className="mb-6">Your donation helps us continue providing vital support and counselling.</p>
      <Link href="/">
        <a className="text-blue-600 underline">Return to Home</a>
      </Link>
    </main>
  );
}
