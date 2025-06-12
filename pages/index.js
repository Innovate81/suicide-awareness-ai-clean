import Head from 'next/head';
import Image from 'next/image';
import DonateSection from '../components/DonateSection';
import ResourcesSection from '../components/ResourcesSection';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Suicide Awareness & Support</title>
        <meta name="description" content="Compassionate support and donation platform for suicide awareness." />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <header className="p-8 text-center bg-blue-50">
          <h1 className="text-4xl font-bold mb-4">Support Suicide Awareness & Save Lives</h1>
          <p className="max-w-xl mx-auto mb-6">Your donations help provide counselling and crisis support to those in need.</p>
        </header>
        <DonateSection />
        <ResourcesSection />
        <Testimonials />
        <footer className="p-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Suicide Awareness Charity. All rights reserved.
        </footer>
      </main>
    </>
  );
}
