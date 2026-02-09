// Software icon mapping - maps software/program names to visual identifiers
// Uses vendor initials and accent colors for visual distinction

export interface SoftwareIcon {
  initials: string;
  color: string;
  vendor: string;
}

// Map program slugs/titles to their software visual representation
export const softwareIconMap: Record<string, SoftwareIcon> = {
  // Autodesk Products
  "civil-3d": { initials: "C3D", color: "accent-orange", vendor: "Autodesk" },
  "autocad": { initials: "CAD", color: "accent-orange", vendor: "Autodesk" },
  "autocad-civil-3d": { initials: "C3D", color: "accent-orange", vendor: "Autodesk" },
  "revit": { initials: "RVT", color: "primary", vendor: "Autodesk" },
  "revit-structure": { initials: "RST", color: "primary", vendor: "Autodesk" },
  "revit-architecture": { initials: "RAC", color: "accent", vendor: "Autodesk" },
  "revit-mep": { initials: "MEP", color: "electrical", vendor: "Autodesk" },
  "navisworks": { initials: "NW", color: "accent-green", vendor: "Autodesk" },
  "infraworks": { initials: "IW", color: "accent-orange", vendor: "Autodesk" },
  "inventor": { initials: "INV", color: "accent-green", vendor: "Autodesk" },
  "3ds-max": { initials: "3DS", color: "accent", vendor: "Autodesk" },
  "autocad-electrical": { initials: "ACE", color: "electrical", vendor: "Autodesk" },
  "robot-structural": { initials: "RSA", color: "primary", vendor: "Autodesk" },
  
  // Bentley Products
  "microstation": { initials: "MS", color: "accent-green", vendor: "Bentley" },
  "openroads": { initials: "OR", color: "accent-orange", vendor: "Bentley" },
  "openbridge": { initials: "OB", color: "accent-orange", vendor: "Bentley" },
  "staad-pro": { initials: "STD", color: "primary", vendor: "Bentley" },
  "plaxis": { initials: "PLX", color: "accent-green", vendor: "Bentley" },
  
  // CSI Products
  "etabs": { initials: "ETB", color: "primary", vendor: "CSI" },
  "sap2000": { initials: "SAP", color: "primary", vendor: "CSI" },
  "safe": { initials: "SAF", color: "primary", vendor: "CSI" },
  "csi-bridge": { initials: "CSB", color: "primary", vendor: "CSI" },
  
  // MIDAS Products
  "midas-civil": { initials: "MC", color: "accent", vendor: "MIDAS" },
  "midas-gen": { initials: "MG", color: "accent", vendor: "MIDAS" },
  
  // Trimble/Tekla
  "tekla-structures": { initials: "TKL", color: "accent-orange", vendor: "Trimble" },
  "tekla": { initials: "TKL", color: "accent-orange", vendor: "Trimble" },
  "sketchup": { initials: "SKP", color: "accent-orange", vendor: "Trimble" },
  
  // Dassault Products
  "solidworks": { initials: "SW", color: "accent-green", vendor: "Dassault" },
  "catia": { initials: "CAT", color: "primary", vendor: "Dassault" },
  "abaqus": { initials: "ABQ", color: "accent-green", vendor: "Dassault" },
  
  // ANSYS Products
  "ansys": { initials: "ANS", color: "accent-orange", vendor: "ANSYS" },
  "ansys-mechanical": { initials: "ANM", color: "accent-orange", vendor: "ANSYS" },
  "ansys-fluent": { initials: "FLU", color: "accent", vendor: "ANSYS" },
  
  // Power Systems
  "etap": { initials: "ETP", color: "electrical", vendor: "ETAP" },
  "digsilent": { initials: "DGS", color: "electrical", vendor: "DIgSILENT" },
  "pscad": { initials: "PSC", color: "electrical", vendor: "Manitoba" },
  
  // Oracle/Primavera
  "primavera-p6": { initials: "P6", color: "accent-orange", vendor: "Oracle" },
  "primavera": { initials: "P6", color: "accent-orange", vendor: "Oracle" },
  
  // Microsoft
  "ms-project": { initials: "MSP", color: "primary", vendor: "Microsoft" },
  "microsoft-project": { initials: "MSP", color: "primary", vendor: "Microsoft" },
  
  // MathWorks
  "matlab": { initials: "MAT", color: "accent-orange", vendor: "MathWorks" },
  "simulink": { initials: "SIM", color: "accent-orange", vendor: "MathWorks" },
  
  // GIS
  "arcgis": { initials: "ARC", color: "accent-green", vendor: "Esri" },
  "gis-arcgis": { initials: "ARC", color: "accent-green", vendor: "Esri" },
  "qgis": { initials: "QG", color: "accent-green", vendor: "Open Source" },
  
  // Visualization
  "lumion": { initials: "LUM", color: "accent", vendor: "Lumion" },
  "enscape": { initials: "ENS", color: "accent", vendor: "Enscape" },
  "twinmotion": { initials: "TM", color: "accent", vendor: "Epic" },
  "rhino": { initials: "RH", color: "accent", vendor: "McNeel" },
  
  // Other
  "blender": { initials: "BLN", color: "accent-orange", vendor: "Blender" },
  "archicad": { initials: "AC", color: "accent", vendor: "Graphisoft" },
  "vectorworks": { initials: "VW", color: "accent", vendor: "Vectorworks" },
  "comsol": { initials: "CMS", color: "primary", vendor: "COMSOL" },
  "hypermesh": { initials: "HM", color: "accent-green", vendor: "Altair" },
  "nastran": { initials: "NAS", color: "accent-green", vendor: "MSC" },
  "labview": { initials: "LV", color: "electrical", vendor: "NI" },
};

// Get software icon data from slug or title
export const getSoftwareIcon = (slugOrTitle: string): SoftwareIcon => {
  // Try direct match first
  const directMatch = softwareIconMap[slugOrTitle.toLowerCase()];
  if (directMatch) return directMatch;
  
  // Try to find partial match
  const key = Object.keys(softwareIconMap).find(k => 
    slugOrTitle.toLowerCase().includes(k) || k.includes(slugOrTitle.toLowerCase().split(' ')[0])
  );
  
  if (key) return softwareIconMap[key];
  
  // Default fallback
  return {
    initials: slugOrTitle.slice(0, 3).toUpperCase(),
    color: "primary",
    vendor: "Engineering"
  };
};

// Color style mappings - enhanced contrast with brighter text
export const iconColorStyles: Record<string, { bg: string; text: string; border: string }> = {
  "primary": {
    bg: "bg-primary/15",
    text: "text-[hsl(207_90%_70%)]",
    border: "border-primary/40"
  },
  "accent": {
    bg: "bg-accent/15",
    text: "text-[hsl(195_100%_75%)]",
    border: "border-accent/40"
  },
  "accent-green": {
    bg: "bg-accent-green/15",
    text: "text-[hsl(80_70%_70%)]",
    border: "border-accent-green/40"
  },
  "accent-orange": {
    bg: "bg-accent-orange/15",
    text: "text-[hsl(40_95%_72%)]",
    border: "border-accent-orange/40"
  },
  "electrical": {
    bg: "bg-[hsl(280_68%_55%)]/15",
    text: "text-[hsl(280_68%_78%)]",
    border: "border-[hsl(280_68%_55%)]/40"
  }
};
