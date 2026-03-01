import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import autodeskLogo from "@/assets/vendors/autodesk.jpg";
import bentleyLogo from "@/assets/vendors/bentley.jpg";
import esriLogo from "@/assets/vendors/esri.jpg";
import mathworksLogo from "@/assets/vendors/mathworks.jpg";
import siemensLogo from "@/assets/vendors/siemens.jpg";
import oracleLogo from "@/assets/vendors/oracle.jpg";
import ansysLogo from "@/assets/vendors/ansys.jpg";
import trimbleLogo from "@/assets/vendors/trimble.jpg";
import dassaultLogo from "@/assets/vendors/dassault.jpg";

interface IndustryAlignmentBlockProps {
  variant?: "default" | "compact";
}

const ecosystems = [
  { name: "Autodesk", logo: autodeskLogo },
  { name: "Bentley Systems", logo: bentleyLogo },
  { name: "Esri", logo: esriLogo },
  { name: "MathWorks", logo: mathworksLogo },
  { name: "Siemens", logo: siemensLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "ANSYS", logo: ansysLogo },
  { name: "Trimble", logo: trimbleLogo },
  { name: "Dassault Systèmes", logo: dassaultLogo },
];

export function IndustryAlignmentBlock({ variant = "default" }: IndustryAlignmentBlockProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 220;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (variant === "compact") {
    return (
      <div className="bg-secondary/50 rounded-lg p-4 border border-divider">
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">Industry-Aligned:</span>{" "}
          Our curriculum is based on globally recognized vendor ecosystems including{" "}
          {ecosystems.slice(0, 5).map(e => e.name).join(", ")}, and others.
        </p>
      </div>
    );
  }

  return (
    <section className="section-padding gradient-hero">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-foreground">
            Industry-Aligned <span className="text-primary">STEM</span> Curriculum
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Aliko Academy STEM designs its programs based on globally recognized 
            engineering platforms and vendor ecosystems.
          </p>
        </div>

        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 border border-divider opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {ecosystems.map((eco) => (
              <div
                key={eco.name}
                className="flex-shrink-0 flex flex-col items-center gap-3 group/item cursor-default"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden transition-transform duration-300 group-hover/item:scale-110">
                  <img
                    src={eco.logo}
                    alt={eco.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {eco.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 border border-divider opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mt-10 text-sm text-muted-foreground text-center max-w-3xl mx-auto">
          Certification exams and credentials are administered by third-party vendors. 
          Aliko Academy STEM provides training and preparation only.
        </p>
      </div>
    </section>
  );
}
