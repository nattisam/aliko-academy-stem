// CMS-like data structure for programs
export type ProgramLevel = "Beginner" | "Intermediate" | "Professional";
export type DeliveryMode = "Online" | "Hybrid";
export type DomainCategory = 
  | "Civil Engineering" 
  | "Structural / BIM & Infrastructure" 
  | "Architectural Engineering"
  | "Mechanical Engineering" 
  | "Chemical Engineering"
  | "Chemical Engineering"
  | "Electrical Engineering"
  | "Construction Planning & Project Controls"
  | "GIS & Infrastructure Intelligence"
  | "Aviation & Aerospace Engineering";

export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  domain: DomainCategory;
  subcategory: string;
  level: ProgramLevel;
  deliveryMode: DeliveryMode;
  durationWeeks: number;
  weeklyHours: number;
  prerequisites: string[];
  skillsGained: string[];
  industryApplications: string[];
  curriculum: CurriculumModule[];
  alignmentStatement: string;
  externalReferenceLink?: string;
  featured: boolean;
}

// Import domain-specific programs
import { civilStructuralPrograms } from "./programs/civil-structural";
import { mechanicalPrograms } from "./programs/mechanical";
import { electricalPrograms } from "./programs/electrical";
import { architecturalPrograms } from "./programs/architectural";
import { projectControlsPrograms } from "./programs/project-controls";
import { gisInternationalPrograms } from "./programs/gis-international";
import { aviationPrograms } from "./programs/aviation";
import { chemicalPrograms } from "./programs/chemical";

// Combine all programs
export const programs: Program[] = [
  ...civilStructuralPrograms,
  ...mechanicalPrograms,
  ...chemicalPrograms,
  ...electricalPrograms,
  ...architecturalPrograms,
  ...projectControlsPrograms,
  ...gisInternationalPrograms,
  ...aviationPrograms
];

export const getProgramsByDomain = (domain: DomainCategory): Program[] => {
  return programs.filter(p => p.domain === domain);
};

export const getFeaturedPrograms = (): Program[] => {
  return programs.filter(p => p.featured);
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find(p => p.slug === slug);
};

export const getDomainProgramCount = (domain: DomainCategory): number => {
  return programs.filter(p => p.domain === domain).length;
};

export const engineeringDomains: DomainCategory[] = [
  "Civil Engineering",
  "Structural / BIM & Infrastructure",
  "Architectural Engineering",
  "Mechanical Engineering",
  "Chemical Engineering",
  "Electrical Engineering"
];

export const industryDomains: DomainCategory[] = [
  "Construction Planning & Project Controls",
  "GIS & Infrastructure Intelligence",
  "Aviation & Aerospace Engineering"
];

export const allDomains = [...engineeringDomains, ...industryDomains];
