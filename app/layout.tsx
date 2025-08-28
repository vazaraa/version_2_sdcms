import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SDC Management Solutions - Empowering Organizations for Sustainable Growth',
  description: 'SDC Management Solutions provides comprehensive services including government outsourcing, recruitment, construction management, mining, security, and more.',
  keywords: 'SDC Management Solutions, government outsourcing, recruitment services, construction management, mining services, security services, staffing solutions, business consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-brand-cream text-foreground">
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