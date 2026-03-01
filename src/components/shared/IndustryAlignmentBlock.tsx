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
  { name: "Autodesk", logo: autodeskLogo, description: "BIM, CAD & Infrastructure" },
  { name: "Bentley Systems", logo: bentleyLogo, description: "Infrastructure Engineering" },
  { name: "Esri", logo: esriLogo, description: "GIS & Spatial Analysis" },
  { name: "MathWorks", logo: mathworksLogo, description: "MATLAB & Simulink" },
  { name: "Siemens", logo: siemensLogo, description: "Industrial Automation" },
  { name: "Oracle", logo: oracleLogo, description: "Primavera Project Controls" },
  { name: "ANSYS", logo: ansysLogo, description: "Engineering Simulation" },
  { name: "Trimble", logo: trimbleLogo, description: "Construction Technology" },
  { name: "Dassault Systèmes", logo: dassaultLogo, description: "SOLIDWORKS & 3D Design" },
];

export function IndustryAlignmentBlock({ variant = "default" }: IndustryAlignmentBlockProps) {
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {ecosystems.slice(0, 5).map((eco) => (
            <div
              key={eco.name}
              className="bg-card border border-divider rounded-xl p-4 flex flex-col items-center text-center card-hover"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden mb-3">
                <img src={eco.logo} alt={eco.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-bold text-foreground leading-tight">{eco.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{eco.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto mt-5">
          {ecosystems.slice(5).map((eco) => (
            <div
              key={eco.name}
              className="bg-card border border-divider rounded-xl p-4 flex flex-col items-center text-center card-hover"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden mb-3">
                <img src={eco.logo} alt={eco.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-bold text-foreground leading-tight">{eco.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{eco.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground text-center max-w-3xl mx-auto">
          Certification exams and credentials are administered by third-party vendors. 
          Aliko Academy STEM provides training and preparation only.
        </p>
      </div>
    </section>
  );
}
