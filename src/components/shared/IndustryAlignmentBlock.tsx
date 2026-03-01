import { cn } from "@/lib/utils";

interface IndustryAlignmentBlockProps {
  variant?: "default" | "compact";
}

export function IndustryAlignmentBlock({ variant = "default" }: IndustryAlignmentBlockProps) {
  const ecosystems = [
    { name: "Autodesk", color: "border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20" },
    { name: "Bentley Systems", color: "border-accent/50 bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/20" },
    { name: "Esri", color: "border-accent-green/50 bg-accent-green/10 text-accent-green hover:bg-accent-green/20 hover:shadow-lg hover:shadow-accent-green/20" },
    { name: "MathWorks", color: "border-accent-orange/50 bg-accent-orange/10 text-accent-orange hover:bg-accent-orange/20 hover:shadow-lg hover:shadow-accent-orange/20" },
    { name: "Siemens", color: "border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20" },
    { name: "Oracle", color: "border-accent/50 bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/20" },
    { name: "ANSYS", color: "border-accent-green/50 bg-accent-green/10 text-accent-green hover:bg-accent-green/20 hover:shadow-lg hover:shadow-accent-green/20" },
    { name: "Trimble", color: "border-accent-orange/50 bg-accent-orange/10 text-accent-orange hover:bg-accent-orange/20 hover:shadow-lg hover:shadow-accent-orange/20" },
    { name: "Dassault Systèmes", color: "border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20" },
  ];

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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-foreground">
            Industry-Aligned <span className="text-primary">STEM</span> Curriculum
          </h2>
          <p className="mt-5 text-lg text-[hsl(210_30%_82%)] leading-relaxed">
            Aliko Academy STEM designs its programs based on globally recognized 
            engineering platforms and vendor ecosystems.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {ecosystems.map((ecosystem) => (
              <span
                key={ecosystem.name}
                className={cn(
                  "inline-flex items-center px-5 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 cursor-default",
                  ecosystem.color
                )}
              >
                {ecosystem.name}
              </span>
            ))}
          </div>
          <p className="mt-10 text-sm text-[hsl(210_30%_78%)]">
            Certification exams and credentials are administered by third-party vendors. 
            Aliko Academy STEM provides training and preparation only.
          </p>
        </div>
      </div>
    </section>
  );
}
