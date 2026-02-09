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

  return (
    <section className="section-padding gradient-section">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Industry-Aligned STEM Curriculum
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aliko Academy – STEM designs its programs based on globally recognized 
            engineering platforms and vendor ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ecosystems.map((ecosystem) => (
              <span
                key={ecosystem}
                className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-divider text-sm font-medium text-foreground"
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