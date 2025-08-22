import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comfort Tours | Corporate Chauffeur-Driven Transport Solutions",
  description: "Comfort Tours Pvt. Ltd. – Pune's premier corporate travel and chauffeur-driven transport provider. With 2,000+ vehicles, 75+ corporate clients, and 21+ years of excellence, we deliver safe, reliable, and professional travel solutions across India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://comfort-toursindia.com/",
    siteName: "Comfort Tours",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Comfort Tours Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort Tours | Corporate Chauffeur-Driven Transport Solutions",
    description: "Comfort Tours Pvt. Ltd. – Pune's premier corporate travel and chauffeur-driven transport provider. With 2,000+ vehicles, 75+ corporate clients, and 21+ years of excellence, we deliver safe, reliable, and professional travel solutions across India.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Comfort Tours Fleet",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?94984';
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = url;
              var options = {
                "enabled": true,
                "chatButtonSetting": {
                  "backgroundColor": "#00e785",
                  "ctaText": "Chat with us",
                  "borderRadius": "25",
                  "marginLeft": "0",
                  "marginRight": "25",
                  "marginBottom": "90",
                  "ctaIconWATI": false,
                  "position": "right"
                },
                "brandSetting": {
                  "brandName": "Comfort Tours",
                  "brandSubTitle": "Travel with Comfort",
                  "brandImg": "/images/comfort-tours-logo-01.png",
                  "welcomeText": "Hi there!\\nHow can I help you?",
                  "messageText": "Hello, I have a question about {{page_link}}",
                  "backgroundColor": "#00e785",
                  "ctaText": "Chat with us",
                  "borderRadius": "25",
                  "autoShow": false,
                  "phoneNumber": "+91 9763704501"
                }
              };
              s.onload = function() {
                CreateWhatsappChatWidget(options);
              };
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const mobileMenuButton = document.getElementById('mobile-menu-button');
                const mobileMenu = document.getElementById('mobile-menu');
                
                if (mobileMenuButton && mobileMenu) {
                  mobileMenuButton.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                  });
                }
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* Header Navigation */}
        <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
          <nav className="flex items-center justify-between py-2 px-4 md:px-8 bg-white shadow h-16">
            <Link href="/" className="flex items-center logo-link">
              <Image src="/images/comfort-tours-logo-01.png" alt="Comfort Tours Logo" width={80} height={50} className="md:w-[100px] md:h-[60px] max-h-10 md:max-h-12 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-4 items-center">
              <Link href="/" className="header-link">Home</Link>
              <Link href="/about" className="header-link">About</Link>
              <Link href="/services" className="header-link">Services</Link>
              <Link href="/clients" className="header-link">Clients</Link>
              <Link href="/contact" className="header-link">Contact</Link>
              <Link href="/gallery" className="header-link">Gallery</Link>
              <a href="https://comfortvacanze.com/" target="_blank" rel="noopener noreferrer" className="header-link">Packaged Tours</a>
              <Link href="/blog" className="header-link">Blog</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" id="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden hidden bg-white border-t" id="mobile-menu">
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">About</Link>
              <Link href="/services" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">Services</Link>
              <Link href="/clients" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">Clients</Link>
              <Link href="/contact" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">Contact</Link>
              <Link href="/gallery" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">Gallery</Link>
              <a href="https://comfortvacanze.com/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">Packaged Tours</a>
              <Link href="/blog" className="block px-3 py-2 text-primary hover:bg-secondary/10 rounded-md">Blog</Link>
            </div>
          </div>
        </header>
        <main className="w-full min-h-[80vh] px-0 py-0 bg-white">{children}</main>
        {/* Footer */}
        <footer className="w-full text-white pt-14 pb-7 mt-20 shadow-inner border-t border-white/10" style={{ backgroundColor: '#007dc0' }}>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-white">Contact Us</h3>
              <p className="mb-2">Comfort Tours Pvt. Ltd.</p>
              <p className="mb-2">Office No. 1, 2nd Floor, Rucha Building,<br />Punavale, Pune - 411033</p>
              <p className="mb-2">Phone: <Link href="tel:+912041230000" className="footer-link">+91-20-41230000</Link></p>
              <p className="mb-2">Email: <Link href="mailto:info@comfort-tours.com" className="footer-link">info@comfort-tours.com</Link></p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/services" className="footer-link">Services</Link></li>
                <li><Link href="/clients" className="footer-link">Clients</Link></li>
                <li><a href="https://comfortvacanze.com/" target="_blank" rel="noopener noreferrer" className="footer-link" title="Comfort Vacanze - Corporate Group Travel & International Event Management from Pune">Packages</a></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-white">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="footer-link">About</Link></li>
                <li><Link href="/gallery" className="footer-link">Gallery</Link></li>
                <li><Link href="/blog" className="footer-link">Blog</Link></li>
              </ul>
            </div>
            {/* Legal & Social */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-white">Legal & Social</h3>
              <ul className="space-y-2 mb-4">
                <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="footer-link">Terms & Conditions</Link></li>
              </ul>
              <div className="flex gap-3 mt-2">
                <Link href="https://www.instagram.com/comfortvacanze" target="_blank" rel="noopener" className="group" aria-label="Instagram">
                  <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/company/comfort-vacanze/" target="_blank" rel="noopener" className="group" aria-label="LinkedIn">
                  <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.youtube.com/@comfortvacanze" target="_blank" rel="noopener" className="group" aria-label="YouTube">
                  <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Comfort Tours Pvt. Ltd. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

