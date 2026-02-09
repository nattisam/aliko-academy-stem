import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  programs: [
    { name: "All Programs", href: "/programs" },
    { name: "Engineering Domains", href: "/domains" },
    { name: "Enterprise Training", href: "/enterprise" },
    { name: "Industry Curriculum", href: "/curriculum" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/policies#privacy" },
    { name: "Terms of Use", href: "/policies#terms" },
    { name: "Training Disclaimer", href: "/policies#disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-divider bg-card">
      <div className="container-content py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-foreground">Aliko Academy</span>
                <span className="text-xs font-medium text-primary">STEM</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Industry-aligned engineering and STEM training for students, professionals, and organizations.
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:stem@alikogroup.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                stem@alikogroup.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Middle East & International
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-foreground">Programs</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://lms.alikogroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Student Login
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-divider">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aliko Academy – STEM. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Certification exams are administered by third-party vendors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}