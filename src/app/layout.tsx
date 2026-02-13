import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import SecurityWrapper from '@/components/SecurityWrapper';
import RouteGuard from '@/components/RouteGuard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { person, home } from '@/resources/content';
import { baseURL } from '@/resources';
import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={home.subline} />
        <meta name="keywords" content="desenvolvedor, full-stack, segurança, pentesting, portfolio" />
        <meta name="author" content={person.name} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={home.title} />
        <meta property="og:description" content={home.subline} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leandrobueno.dev" />
        <meta property="og:image" content={person.avatar} />
        <meta property="og:site_name" content={person.name} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={home.title} />
        <meta name="twitter:description" content={home.subline} />
        <meta name="twitter:image" content={person.avatar} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Google Verification */}
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
        />
        
        <title>{home.title}</title>
      </head>
      <body>
        <LanguageProvider>
          <Providers>
            <SecurityWrapper>
              <RouteGuard>
                <div className="app-background">
                  <div className="app-glow" />
                  <div className="app-grain" />
                  
                  <Header />
                  <main style={{ position: "relative", zIndex: 1 }}>
                    {children}
                  </main>
                  <Footer />
                </div>
              </RouteGuard>
            </SecurityWrapper>
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
