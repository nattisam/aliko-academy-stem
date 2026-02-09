import { Software } from "@/data/domainSoftware";
import { cn } from "@/lib/utils";

interface SoftwareGridProps {
  software: Software[];
  accentColor: string;
}

const colorStyles: Record<string, { bg: string; border: string; text: string; hoverBg: string }> = {
  "primary": {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    hoverBg: "hover:bg-primary/20"
  },
  "accent": {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    hoverBg: "hover:bg-accent/20"
  },
  "accent-green": {
    bg: "bg-accent-green/10",
    border: "border-accent-green/30",
    text: "text-[hsl(80_70%_55%)]",
    hoverBg: "hover:bg-accent-green/20"
  },
  "accent-orange": {
    bg: "bg-accent-orange/10",
    border: "border-accent-orange/30",
    text: "text-[hsl(40_95%_65%)]",
    hoverBg: "hover:bg-accent-orange/20"
  },
  "electrical": {
    bg: "bg-[hsl(280_68%_55%)]/10",
    border: "border-[hsl(280_68%_55%)]/30",
    text: "text-[hsl(280_68%_65%)]",
    hoverBg: "hover:bg-[hsl(280_68%_55%)]/20"
  }
};

// Software vendor icons/logos represented as styled badges
const getVendorInitials = (vendor?: string): string => {
  if (!vendor) return "SW";
  const words = vendor.split(" ");
  if (words.length === 1) return vendor.slice(0, 2).toUpperCase();
  return words.slice(0, 2).map(w => w[0]).join("").toUpperCase();
};

export const SoftwareGrid = ({ software, accentColor }: SoftwareGridProps) => {
  const styles = colorStyles[accentColor] || colorStyles["primary"];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {software.map((sw, idx) => (
        <div
          key={idx}
          className={cn(
            "group relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 cursor-default",
            styles.bg,
            styles.border,
            styles.hoverBg,
            "hover:scale-105 hover:shadow-lg"
          )}
        >
          {/* Software Icon/Logo Placeholder */}
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold mb-2 transition-colors",
              "bg-background/50 border",
              styles.border,
              styles.text
            )}
          >
            {getVendorInitials(sw.vendor)}
          </div>
          
          {/* Software Name */}
          <span className="text-xs font-medium text-foreground text-center leading-tight">
            {sw.name}
          </span>
          
          {/* Vendor on hover */}
          {sw.vendor && (
            <span className={cn(
              "text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity",
              styles.text
            )}>
              {sw.vendor}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
