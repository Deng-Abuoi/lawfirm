'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Brand({ isFooter = false }: { isFooter?: boolean }) {
  return (
    <Link
      className="brand"
      href="/"
      aria-label="Paul Dhel Gum and Company Advocates home"
    >
      <Image
        src="/pdglogo.png"
        alt="Paul Dhel Gum & Co. Advocates"
        width={172}
        height={76}
        priority={!isFooter}
        className="brand-logo"
      />
    </Link>
  );
}

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-meta">
        <div className="container header-meta-wrap">
          <span>Advocates &amp; legal consultants <i aria-hidden="true">·</i> Juba, South Sudan</span>
          <a href="tel:+211927676766">Call our office <b>+211 927 676 766</b></a>
        </div>
      </div>
      <div className="container nav-wrap">
        <Brand />

        <div className="nav-right desktop-only">
          <nav className="site-nav-dock" aria-label="Main navigation">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{label}</span>
                  {isActive && <span className="nav-active-dot" aria-hidden="true" />}
                </Link>
              );
            })}
          </nav>

          <Link
            className="nav-cta-btn"
            href="/appointment"
            aria-label="Book a consultation with PDG & Co. Advocates"
          >
            <span className="cta-status-badge" aria-hidden="true">
              <span className="cta-status-pulse" />
              <span className="cta-status-dot" />
            </span>
            <span className="cta-label">Book a consultation</span>
            <span className="cta-icon-circle" aria-hidden="true">
              <svg
                className="cta-arrow-icon"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
            <span className="cta-shimmer" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Minimal Actions: Cool Quick Button + Morphing Hamburger */}
        <div className="mobile-actions mobile-only">
          <Link
            className="nav-cta-btn nav-cta-mobile"
            href="/appointment"
            aria-label="Book a consultation"
          >
            <span className="cta-status-badge" aria-hidden="true">
              <span className="cta-status-pulse" />
              <span className="cta-status-dot" />
            </span>
            <span className="cta-label">Book</span>
            <span className="cta-icon-circle" aria-hidden="true">
              <svg
                className="cta-arrow-icon"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </Link>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="hamburger-box">
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </span>
          </button>
        </div>
      </div>

      {/* Clean Minimal Mobile Menu Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileMenuOpen(false);
        }}
      >
        <div className="mobile-drawer-content">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`mobile-nav-item ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{label}</span>
                  <span className="mobile-arrow" aria-hidden="true">↗</span>
                </Link>
              );
            })}
          </nav>

          <div className="mobile-drawer-footer">
            <Link
              className="nav-cta-btn mobile-drawer-cta"
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="cta-status-badge" aria-hidden="true">
                <span className="cta-status-pulse" />
                <span className="cta-status-dot" />
              </span>
              <span className="cta-label">Book a consultation</span>
              <span className="cta-icon-circle" aria-hidden="true">
                <svg
                  className="cta-arrow-icon"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
              <span className="cta-shimmer" aria-hidden="true" />
            </Link>

            <div className="mobile-quick-contact">
              <a href="tel:+211927676766">+211 927 676 766</a>
              <span>·</span>
              <a href="mailto:info@lawfirm.ss">info@lawfirm.ss</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <Brand isFooter />
        <p>Steady legal counsel for South Sudan.</p>
        <nav className="footer-links" aria-label="Legal links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <span>© {new Date().getFullYear()} PDG &amp; Co. Advocates</span>
      </div>
    </footer>
  );
}
