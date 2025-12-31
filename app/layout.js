import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://setkorp.com'),
  title: {
    default: "Setkorp - Business Setup in Dubai | Company Formation UAE",
    template: "%s | Setkorp Dubai"
  },
  description: "Expert business setup services in Dubai, UAE. Complete company formation, trade license, visa processing, and PRO services. Start your business in Dubai today.",
  keywords: ["business setup dubai", "company formation uae", "dubai business license", "free zone company", "mainland company dubai", "offshore company uae", "dubai visa", "pro services dubai"],
  authors: [{ name: "Setkorp Team", url: "https://setkorp.com" }],
  creator: "Setkorp",
  publisher: "Setkorp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Setkorp - Business Setup in Dubai | Company Formation UAE",
    description: "Expert business setup services in Dubai, UAE. Complete company formation, trade license, visa processing, and PRO services. Start your business in Dubai today.",
    siteName: "Setkorp Dubai",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Setkorp - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Setkorp - Business Setup in Dubai | Company Formation UAE",
    description: "Expert business setup services in Dubai, UAE. Complete company formation, trade license, visa processing, and PRO services. Start your business in Dubai today.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Setkorp",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/assets/logo.svg`,
              "description": "Expert business setup services in Dubai, UAE. Complete company formation and licensing solutions.",
              "areaServed": "Dubai, UAE",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
          <Analytics />
          <Navbar />
          {children}
      </body>
    </html>
  );
}
