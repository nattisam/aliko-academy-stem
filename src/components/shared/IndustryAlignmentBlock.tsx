import { cn } from "@/lib/utils";

interface IndustryAlignmentBlockProps {
  variant?: "default" | "compact";
}

export function IndustryAlignmentBlock({ variant = "default" }: IndustryAlignmentBlockProps) {
  const ecosystems = [
    "Autodesk",
    "Bentley Systems",
    "Esri",
    "MathWorks",
    "Siemens",
    "Oracle",
    "ANSYS",
    "Trimble",
    "Dassault Systèmes",
  ];

  if (variant === "compact") {
    return (
      <div className="bg-secondary/50 rounded-lg p-4 border border-divider">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Industry-Aligned:</span>{" "}
          Our curriculum is based on globally recognized vendor ecosystems including{" "}
          {ecosystems.slice(0, 5).join(", ")}, and others.
        </p>
      </div>
    );
  }

  // Color cycle for ecosystem badges
  const accentColors = [
    "border-primary/40 hover:border-primary hover:shadow-lg hover:shadow-primary/20",
    "border-accent/40 hover:border-accent hover:shadow-lg hover:shadow-accent/20",
    "border-accent-green/40 hover:border-accent-green hover:shadow-lg hover:shadow-accent-green/20",
    "border-accent-orange/40 hover:border-accent-orange hover:shadow-lg hover:shadow-accent-orange/20",
  ];

  return (
    <section className="section-padding gradient-hero">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Industry-Aligned <span className="text-primary text-glow">STEM</span> Curriculum
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aliko Academy – STEM designs its programs based on globally recognized 
            engineering platforms and vendor ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ecosystems.map((ecosystem, index) => (
              <span
                key={ecosystem}
                className={cn(
                  "inline-flex items-center px-4 py-2 rounded-full bg-card border text-sm font-medium text-foreground transition-all duration-300 cursor-default",
                  accentColors[index % accentColors.length]
                )}
              >
                {ecosystem}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Certification exams and credentials are administered by third-party vendors. 
            Aliko Academy – STEM provides training and preparation only.
          </p>
        </div>
      </div>
    </section>
  );
}