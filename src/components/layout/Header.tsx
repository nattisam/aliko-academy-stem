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
    <header className="sticky top-0 z-50 w-full bg-[hsl(220_30%_14%)] border-b border-[hsl(220_25%_26%)] shadow-lg shadow-black/20 backdrop-blur-xl">
      <nav className="container-content flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-white">Aliko Academy</span>
            <span className="text-xs font-bold text-primary">STEM</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-3 py-2 text-sm font-bold transition-colors rounded-md",
                isActive(item.href)
                  ? "text-primary bg-primary/15 border border-primary/30"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button asChild variant="outline" size="sm" className="font-bold border-primary/40 text-primary hover:bg-primary/15">
            <Link to="/student-login">
              Student Login
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[hsl(220_25%_22%)] bg-[hsl(220_30%_13%)]">
          <div className="container-content py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-bold rounded-lg transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-primary/15"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button asChild className="w-full font-bold" variant="outline">
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
