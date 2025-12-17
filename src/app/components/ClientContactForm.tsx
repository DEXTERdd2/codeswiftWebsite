'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
  loading: () => <div>Loading contact form...</div>
});

export default function ClientContactForm() {
  return <ContactForm />;
}
