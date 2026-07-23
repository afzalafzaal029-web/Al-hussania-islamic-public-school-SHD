import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Al-Hussainia Islamic Public School';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default async function Image() {
  // ✅ Absolute URL (apni deploy ki hui site ka)
  const bgImageUrl = 'https://al-hussainia-islamic-school.vercel.app/school.png';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', // Overlay ke liye zaroori
          // 🔥 Background image yahan set ki
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* 1️⃣ Dark Overlay (HeroSection wala gradient) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(10,22,50,0.6) 0%, rgba(10,22,50,0.85) 100%)',
          }}
        />

        {/* 2️⃣ Islamic Geometric Pattern (optional, lekin HeroSection mein tha) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.07,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpolygon points='40,4 46,28 70,22 52,40 70,58 46,52 40,76 34,52 10,58 28,40 10,22 34,28' fill='none' stroke='white' stroke-width='0.8'/%3E%3Crect x='20' y='20' width='40' height='40' fill='none' stroke='white' stroke-width='0.4' transform='rotate(45 40 40)'/%3E%3Ccircle cx='40' cy='40' r='6' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* 3️⃣ Content (Text) */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* School Name */}
          <p
            style={{
              color: '#fbbf24',
              fontSize: 22,
              letterSpacing: '8px',
              textTransform: 'uppercase',
              marginBottom: 10,
              fontWeight: 600,
            }}
          >
            Al-Hussainia Islamic Public School
          </p>

          {/* Tagline 1 */}
          <h1
            style={{
              color: 'white',
              fontSize: 74,
              fontFamily: 'Georgia, serif',
              fontWeight: 'bold',
              margin: 0,
              lineHeight: 1.1,
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            Where Knowledge
          </h1>

          {/* Tagline 2 (Golden) */}
          <h1
            style={{
              color: '#f5c842',
              fontSize: 74,
              fontFamily: 'Georgia, serif',
              fontWeight: 'bold',
              margin: 0,
              lineHeight: 1.1,
              textShadow: '0 4px 30px rgba(0,0,0,0.4)',
            }}
          >
            Meets Faith
          </h1>

          {/* Sub Text */}
          <p
            style={{
              color: '#e5e7eb',
              fontSize: 24,
              marginTop: 20,
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: 300,
            }}
          >
            Nurturing hearts and minds with modern education rooted in Islamic
            values.
          </p>

          {/* CTA Button (Static) */}
          <div
            style={{
              marginTop: 30,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a227 0%, #f0c94d 100%)',
                color: '#0a1632',
                padding: '12px 48px',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: 18,
                boxShadow: '0 4px 20px rgba(201,162,39,0.4)',
              }}
            >
              Explore School
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}