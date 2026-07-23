'use client';

import dynamic from 'next/dynamic';

// یہاں ssr: false استعمال کر سکتے ہیں کیونکہ یہ Client Component ہے
const SchoolMap = dynamic(() => import('@/app/Components/SchoolMap'), {
  ssr: false,
});

export default function SchoolMapWrapper() {
  return <SchoolMap />;
}