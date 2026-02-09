import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
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
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-extrabold text-white tracking-tight">Aliko Academy</span>
            <span className="text-xs font-bold text-primary tracking-widest">STEM</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2.5 text-[15px] font-bold transition-all duration-300 rounded-lg",
                isActive(item.href)
                  ? "text-white bg-primary/20 border border-primary/40 shadow-md shadow-primary/10"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button asChild variant="outline" size="sm" className="font-bold border-primary/40 text-primary hover:bg-primary/15 px-4">
            <Link to="/apply">
              Apply
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
                  "block px-5 py-3.5 text-base font-bold rounded-xl transition-all duration-200",
                  isActive(item.href)
                    ? "text-white bg-primary/20 border border-primary/30"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-2">
              <Button asChild variant="outline" className="w-full font-bold border-primary/40 text-primary">
                <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                  Apply
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
