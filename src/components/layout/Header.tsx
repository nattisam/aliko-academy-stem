import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/aliko-stem-logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Licensure & Exams", href: "/certifications" },
  { name: "Enterprise Training", href: "/enterprise" },
  { name: "Partners", href: "/partners" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-navbar border-b border-border/50 shadow-xl shadow-black/30 backdrop-blur-xl">
      <nav className="container-content flex h-18 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Aliko Academy STEM" className="h-12 lg:h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-0.5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "relative px-4 py-2.5 text-[15px] font-bold transition-all duration-300 rounded-lg group",
                isActive(item.href)
                  ? "text-white bg-white/15 shadow-lg shadow-primary/20"
                  : "text-white/80 hover:text-white hover:bg-white/8"
              )}
            >
              {item.name}
              {/* Active bottom indicator */}
              <span className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300",
                isActive(item.href)
                  ? "w-3/4 bg-gradient-to-r from-accent-green via-accent to-primary shadow-[0_0_8px_hsl(195_100%_50%/0.6)]"
                  : "w-0 group-hover:w-1/2 bg-accent-green/60"
              )} />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button asChild size="sm" className="font-extrabold bg-accent-orange text-white hover:bg-accent-orange/85 shadow-lg shadow-accent-orange/40 hover:scale-105 transition-all duration-300 px-6 tracking-wide uppercase text-xs">
            <Link to="/apply">
              Apply Now
            </Link>
          </Button>
          <Button asChild size="sm" className="font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 px-5">
            <Link to="/student-login">
              Student Login
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-navbar">
          <div className="container-content py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-5 py-3.5 text-base font-bold rounded-xl transition-all duration-200 border-l-4",
                  isActive(item.href)
                    ? "text-white bg-white/12 border-l-accent-green shadow-md"
                    : "text-white/85 hover:text-white hover:bg-white/8 border-l-transparent hover:border-l-accent/40"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-2">
              <Button asChild className="w-full font-extrabold bg-accent-orange text-white hover:bg-accent-orange/85 shadow-lg shadow-accent-orange/40 tracking-wide uppercase text-xs">
                <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
              <Button asChild className="w-full font-bold bg-primary text-white">
                <Link to="/student-login" onClick={() => setMobileMenuOpen(false)}>
                  Student Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
