import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Comfort Tours | Pune's Premier Travel Agency",
  description: "Car rentals, tour packages, and corporate travel solutions in Pune. Trusted by top companies and families since 2006.",
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
    title: "Comfort Tours | Pune's Premier Travel Agency",
    description: "Car rentals, tour packages, and corporate travel solutions in Pune. Trusted by top companies and families since 2006.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header Navigation */}
        <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
          <nav className="w-full flex items-center justify-between py-4 px-8 max-w-none">
            <div className="flex items-center gap-3">
              {/* Logo placeholder */}
              <span className="font-extrabold text-2xl tracking-tight text-primary flex items-center gap-2">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#ffd700" strokeWidth="2" fill="#f8f5f0"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#1a365d" fontWeight="bold">CT</text></svg>
                Comfort Tours
              </span>
            </div>
            <ul className="flex gap-8 text-base font-medium">
              <li><Link href="/" className="header-link">Home</Link></li>
              <li><Link href="/about" className="header-link">About</Link></li>
              <li><Link href="/services" className="header-link">Services</Link></li>
              <li><Link href="/clients" className="header-link">Clients</Link></li>
              <li><Link href="/career" className="header-link">Career</Link></li>
              <li><Link href="/blog" className="header-link">Blog</Link></li>
              <li><Link href="/contact" className="header-link">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="w-full min-h-[80vh] px-0 py-0">{children}</main>
        {/* Footer */}
        <footer className="w-full bg-[#16213e] text-white pt-14 pb-7 mt-20 shadow-inner border-t border-white/10">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-3">Contact Us</h3>
              <p className="mb-2">Comfort Tours Pvt. Ltd.</p>
              <p className="mb-2">Office No. 1, 2nd Floor, Rucha Building,<br />Punavale, Pune - 411033</p>
              <p className="mb-2">Phone: <a href="tel:+912041230000" className="footer-link">+91-20-41230000</a></p>
              <p className="mb-2">Email: <a href="mailto:info@comfort-tours.com" className="footer-link">info@comfort-tours.com</a></p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/services" className="footer-link">Services</a></li>
                <li><a href="/clients" className="footer-link">Clients</a></li>
                <li><a href="/packages" className="footer-link">Packages</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="footer-link">About</a></li>
                <li><a href="/career" className="footer-link">Careers</a></li>
                <li><a href="/blog" className="footer-link">Blog</a></li>
              </ul>
            </div>
            {/* Help & Social */}
            <div>
              <h3 className="font-bold text-lg mb-3">Help & Social</h3>
              <ul className="space-y-2 mb-4">
                <li><a href="#" className="footer-link">FAQ</a></li>
                <li><a href="#" className="footer-link">Support</a></li>
              </ul>
              <div className="flex gap-6 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener" className="footer-link" aria-label="Facebook">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener" className="footer-link" aria-label="Instagram">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="footer-link" aria-label="LinkedIn">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
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

