import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sdcms.in'),
  title: {
    default: 'SDC Management Solutions Private Limited (SDCMS) | Manpower & Facility Management',
    template: '%s | SDC Management Solutions (SDCMS)'
  },
  description: 'SDCMS in Guntur, Andhra Pradesh provides manpower outsourcing, staffing, HR outsourcing, facility management, housekeeping and payroll services across South India.',
  keywords: [
    'SDC Management Solutions Pvt Ltd',
    'SDC Management Solutions Private Limited',
    'SDCMS Guntur',
    'manpower outsourcing',
    'HR outsourcing',
    'facility management solutions',
    'housekeeping and cleaning services',
    'contract staffing',
    'payroll outsourcing',
    'South India',
    'Andhra Pradesh'
  ],
  verification: {
    google: 'google9efb0f546367e64a',
  },
  openGraph: {
    type: 'website',
    title: 'SDCMS | Manpower Outsourcing, HR & Facility Management in Guntur',
    description: 'Trusted manpower outsourcing and facility management company in Guntur, Andhra Pradesh. SDCMS delivers staffing, HR outsourcing, housekeeping and payroll solutions across South India.',
    url: '/',
    images: [
      {
        url: '/og/sdcms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SDCMS Manpower & Facility Management in Guntur'
      }
    ],
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDCMS | Manpower, HR Outsourcing & Facility Management',
    description: 'SDCMS provides staffing, HR outsourcing, housekeeping and payroll services across South India from Guntur, Andhra Pradesh.',
    images: ['/og/sdcms-og.jpg']
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-brand-cream text-foreground">
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6GNTVFX');`}
        </Script>
        {/* End Google Tag Manager */}
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6GNTVFX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SDC Management Solutions Pvt Ltd',
            alternateName: 'SDCMS',
            url: 'https://sdcms.in',
            logo: 'https://sdcms.in/images/logo.webp',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+919985263111',
                contactType: 'customer service',
                areaServed: 'IN'
              }
            ],
            sameAs: [
              'https://www.linkedin.com/company/sdc-management-solutions-pvt-ltd',
              'https://www.facebook.com/SDCMS-PvtLtd'
            ]
          })}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P7K2MY3BZ3" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7K2MY3BZ3');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-brand-cream">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}