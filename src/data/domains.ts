// CMS-like data structure for engineering domains
import { DomainCategory } from "./programs";

export interface Domain {
  id: string;
  name: DomainCategory;
  shortName: string;
  description: string;
  introText: string;
  progressionPath: string;
  icon: string;
  color: string;
  topPrograms: string[]; // program slugs
}

export const domains: Domain[] = [
  {
    id: "civil",
    name: "Civil Engineering",
    shortName: "Civil",
    description: "Infrastructure design and land development systems",
    introText: "Civil engineering software powers the design of roads, bridges, water systems, and land development projects. Our programs cover industry-standard tools for terrain modeling, corridor design, drainage analysis, and construction documentation.",
    progressionPath: "AutoCAD → Civil 3D → InfraWorks → Infrastructure Design Suite",
    icon: "Building2",
    color: "civil",
    topPrograms: ["civil-3d", "infraworks"]
  },
  {
    id: "structural-bim",
    name: "Structural / BIM & Infrastructure",
    shortName: "Structural & BIM",
    description: "Building information modeling and structural detailing",
    introText: "BIM and structural engineering software enables integrated design, analysis, and coordination of buildings and infrastructure. Our programs cover structural modeling, detailing, coordination, and digital construction workflows.",
    progressionPath: "Revit Basics → Revit Structure → Tekla/Steel → Navisworks → BIM Coordination",
    icon: "Building",
    color: "structural",
    topPrograms: ["revit-structure", "tekla-structures", "navisworks"]
  },
  {
    id: "architectural",
    name: "Architectural Engineering",
    shortName: "Architectural",
    description: "Building design and architectural documentation",
    introText: "Architectural software enables comprehensive building design from concept through construction. Our programs cover BIM modeling, documentation, visualization, and collaboration workflows for architectural practice.",
    progressionPath: "SketchUp/AutoCAD → Revit Architecture → Design Development → Coordination",
    icon: "Home",
    color: "architectural",
    topPrograms: ["revit-architecture"]
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    description: "Product design, simulation, and manufacturing",
    introText: "Mechanical engineering software drives product development from conceptual design through manufacturing. Our programs cover 3D CAD modeling, finite element analysis, motion simulation, and design automation.",
    progressionPath: "AutoCAD Mechanical → SOLIDWORKS/Inventor → FEA Basics → ANSYS Advanced",
    icon: "Cog",
    color: "mechanical",
    topPrograms: ["solidworks", "inventor", "ansys-mechanical"]
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    shortName: "Electrical",
    description: "Power systems analysis and control design",
    introText: "Electrical engineering software addresses power system design, analysis, and control system development. Our programs cover power flow studies, protection coordination, arc flash analysis, and electrical schematic design.",
    progressionPath: "Electrical Fundamentals → AutoCAD Electrical → ETAP Power Systems → Advanced Studies",
    icon: "Zap",
    color: "electrical",
    topPrograms: ["etap", "autocad-electrical"]
  },
  {
    id: "project-controls",
    name: "Construction Planning & Project Controls",
    shortName: "Project Controls",
    description: "Project scheduling and construction management",
    introText: "Project controls software enables planning, scheduling, and management of construction and engineering projects. Our programs cover enterprise scheduling, resource management, progress tracking, and earned value analysis.",
    progressionPath: "MS Project Basics → Primavera P6 Fundamentals → Advanced Scheduling → Portfolio Management",
    icon: "Calendar",
    color: "project",
    topPrograms: ["primavera-p6", "ms-project"]
  },
  {
    id: "international",
    name: "Middle East / International Systems",
    shortName: "International Systems",
    description: "GIS, computational, and regional engineering tools",
    introText: "Regional and international engineering systems address specialized needs in geographic analysis, computational engineering, and standards applicable to Middle East and global markets.",
    progressionPath: "GIS Fundamentals → ArcGIS Pro → MATLAB → Specialized Analysis",
    icon: "Globe",
    color: "primary",
    topPrograms: ["gis-arcgis", "matlab"]
  }
];

export const getDomainById = (id: string): Domain | undefined => {
  return domains.find(d => d.id === id);
};

export const getDomainByName = (name: DomainCategory): Domain | undefined => {
  return domains.find(d => d.name === name);
};