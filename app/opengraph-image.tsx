import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const alt = 'Dynamic Content';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#000000',
          width: '100%',
          height: '100%',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Yahan Aapka Dynamic Content Hai</h1>
      </div>
    ),
    { ...size }
  );
}
