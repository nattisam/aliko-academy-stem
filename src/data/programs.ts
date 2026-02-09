// CMS-like data structure for programs
export type ProgramLevel = "Beginner" | "Intermediate" | "Professional";
export type DeliveryMode = "Online" | "Hybrid";
export type DomainCategory = 
  | "Civil Engineering" 
  | "Structural / BIM & Infrastructure" 
  | "Architectural Engineering"
  | "Mechanical Engineering" 
  | "Electrical Engineering"
  | "Construction Planning & Project Controls"
  | "Middle East / International Systems";

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

export const programs: Program[] = [
  // Civil Engineering Programs
  {
    id: "civil-3d",
    slug: "civil-3d",
    title: "AutoCAD Civil 3D",
    shortDescription: "Master civil infrastructure design with corridors, surfaces, and grading tools.",
    fullDescription: "AutoCAD Civil 3D is the industry-standard software for civil infrastructure design. This program covers terrain modeling, corridor design, pipe networks, and construction documentation workflows used in transportation, land development, and water resources projects.",
    domain: "Civil Engineering",
    subcategory: "Infrastructure Design",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 10,
    weeklyHours: 8,
    prerequisites: ["Basic AutoCAD knowledge", "Understanding of civil engineering concepts"],
    skillsGained: [
      "Create and analyze terrain surfaces",
      "Design road corridors and alignments",
      "Model pipe networks and drainage systems",
      "Generate construction documentation",
      "Perform quantity takeoffs"
    ],
    industryApplications: [
      "Road and highway design",
      "Land development projects",
      "Stormwater management",
      "Site grading and earthwork"
    ],
    curriculum: [
      {
        title: "Module 1: Surfaces & Terrain",
        topics: ["Surface creation", "Contour analysis", "Volume calculations"]
      },
      {
        title: "Module 2: Alignments & Profiles",
        topics: ["Horizontal alignments", "Profile views", "Vertical design"]
      },
      {
        title: "Module 3: Corridors",
        topics: ["Assembly creation", "Corridor modeling", "Sections"]
      },
      {
        title: "Module 4: Pipe Networks",
        topics: ["Storm drainage", "Sanitary systems", "Analysis tools"]
      }
    ],
    alignmentStatement: "Aligned with Autodesk Civil 3D official workflows and industry best practices.",
    externalReferenceLink: "https://www.autodesk.com/products/civil-3d",
    featured: true
  },
  {
    id: "infraworks",
    slug: "infraworks",
    title: "InfraWorks",
    shortDescription: "Create conceptual infrastructure designs with real-world context and visualization.",
    fullDescription: "InfraWorks enables engineers to create conceptual infrastructure designs in a real-world context. Learn to aggregate data, design alternatives, and communicate project intent with stakeholders using 3D visualization.",
    domain: "Civil Engineering",
    subcategory: "Conceptual Design",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 6,
    weeklyHours: 6,
    prerequisites: ["Basic CAD experience", "Understanding of infrastructure projects"],
    skillsGained: [
      "Aggregate GIS and CAD data",
      "Create conceptual road designs",
      "Generate design alternatives",
      "Produce compelling visualizations"
    ],
    industryApplications: [
      "Project proposals",
      "Stakeholder presentations",
      "Feasibility studies",
      "Urban planning"
    ],
    curriculum: [
      {
        title: "Module 1: Model Building",
        topics: ["Data import", "Terrain generation", "Model configuration"]
      },
      {
        title: "Module 2: Road Design",
        topics: ["Alignment tools", "Component roads", "Intersections"]
      },
      {
        title: "Module 3: Visualization",
        topics: ["Storyboards", "Animations", "Presentation exports"]
      }
    ],
    alignmentStatement: "Aligned with Autodesk InfraWorks workflows for preliminary engineering.",
    featured: false
  },
  // Structural / BIM Programs
  {
    id: "revit-structure",
    slug: "revit-structure",
    title: "Revit Structure",
    shortDescription: "Design structural systems with BIM methodology for buildings and infrastructure.",
    fullDescription: "Revit Structure provides comprehensive BIM capabilities for structural engineers. This program covers structural modeling, analysis integration, documentation, and collaboration workflows essential for modern structural design practice.",
    domain: "Structural / BIM & Infrastructure",
    subcategory: "BIM",
    level: "Intermediate",
    deliveryMode: "Hybrid",
    durationWeeks: 12,
    weeklyHours: 10,
    prerequisites: ["Basic structural engineering knowledge", "Introduction to BIM concepts"],
    skillsGained: [
      "Model concrete and steel structures",
      "Create structural documentation",
      "Coordinate with architectural and MEP models",
      "Perform clash detection",
      "Generate structural schedules"
    ],
    industryApplications: [
      "Commercial buildings",
      "Industrial facilities",
      "Infrastructure projects",
      "Renovation projects"
    ],
    curriculum: [
      {
        title: "Module 1: Structural Fundamentals",
        topics: ["Grids and levels", "Columns and beams", "Foundations"]
      },
      {
        title: "Module 2: Advanced Modeling",
        topics: ["Slabs and walls", "Reinforcement", "Steel connections"]
      },
      {
        title: "Module 3: Documentation",
        topics: ["Structural drawings", "Schedules", "Details"]
      },
      {
        title: "Module 4: Collaboration",
        topics: ["Worksharing", "Coordination", "Analysis links"]
      }
    ],
    alignmentStatement: "Aligned with Autodesk Revit workflows and BIM Level 2 standards.",
    externalReferenceLink: "https://www.autodesk.com/products/revit",
    featured: true
  },
  {
    id: "tekla-structures",
    slug: "tekla-structures",
    title: "Tekla Structures",
    shortDescription: "Create detailed 3D models for steel and concrete detailing with production outputs.",
    fullDescription: "Tekla Structures is the leading structural detailing software for steel and precast concrete. Learn to create constructible models with full fabrication details, connections, and production drawings.",
    domain: "Structural / BIM & Infrastructure",
    subcategory: "Structural Detailing",
    level: "Professional",
    deliveryMode: "Hybrid",
    durationWeeks: 14,
    weeklyHours: 12,
    prerequisites: ["Structural engineering background", "Basic 3D modeling experience"],
    skillsGained: [
      "Create detailed steel structures",
      "Model precast concrete elements",
      "Design connections and joints",
      "Generate fabrication drawings",
      "Export to CNC machines"
    ],
    industryApplications: [
      "Steel fabrication",
      "Precast concrete production",
      "Industrial structures",
      "Complex geometry projects"
    ],
    curriculum: [
      {
        title: "Module 1: Steel Modeling",
        topics: ["Member creation", "Assemblies", "Component connections"]
      },
      {
        title: "Module 2: Concrete Detailing",
        topics: ["Cast-in-place", "Precast elements", "Reinforcement"]
      },
      {
        title: "Module 3: Drawings & Reports",
        topics: ["GA drawings", "Shop drawings", "Material reports"]
      }
    ],
    alignmentStatement: "Aligned with Trimble Tekla Structures professional workflows.",
    featured: true
  },
  {
    id: "navisworks",
    slug: "navisworks",
    title: "Navisworks",
    shortDescription: "Coordinate multi-discipline BIM models and perform clash detection analysis.",
    fullDescription: "Navisworks is essential for BIM coordination and project review. This program covers model aggregation, clash detection, 4D simulation, and quantification workflows used in construction coordination.",
    domain: "Structural / BIM & Infrastructure",
    subcategory: "BIM Coordination",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 6,
    weeklyHours: 6,
    prerequisites: ["Experience with BIM software", "Understanding of construction workflows"],
    skillsGained: [
      "Aggregate multi-format models",
      "Perform clash detection",
      "Create 4D construction simulations",
      "Generate quantity takeoffs",
      "Produce coordination reports"
    ],
    industryApplications: [
      "Design coordination",
      "Construction planning",
      "Project reviews",
      "Facility management"
    ],
    curriculum: [
      {
        title: "Module 1: Model Aggregation",
        topics: ["File formats", "Append and merge", "Selection sets"]
      },
      {
        title: "Module 2: Clash Detection",
        topics: ["Clash tests", "Grouping", "Reporting"]
      },
      {
        title: "Module 3: 4D & Quantification",
        topics: ["TimeLiner", "Quantification", "Simulation"]
      }
    ],
    alignmentStatement: "Aligned with Autodesk Navisworks coordination workflows.",
    featured: false
  },
  // Architectural Engineering
  {
    id: "revit-architecture",
    slug: "revit-architecture",
    title: "Revit Architecture",
    shortDescription: "Design buildings with full BIM capabilities from concept to construction documents.",
    fullDescription: "Revit Architecture is the foundation of BIM for architects. This comprehensive program covers architectural modeling, documentation, visualization, and collaboration using industry-standard workflows.",
    domain: "Architectural Engineering",
    subcategory: "BIM",
    level: "Beginner",
    deliveryMode: "Online",
    durationWeeks: 12,
    weeklyHours: 10,
    prerequisites: ["Basic architectural drafting knowledge"],
    skillsGained: [
      "Create architectural BIM models",
      "Generate construction documents",
      "Develop design presentations",
      "Coordinate with consultants",
      "Manage project data"
    ],
    industryApplications: [
      "Residential design",
      "Commercial architecture",
      "Interior design",
      "Renovation projects"
    ],
    curriculum: [
      {
        title: "Module 1: Core Modeling",
        topics: ["Walls, doors, windows", "Floors and roofs", "Stairs and railings"]
      },
      {
        title: "Module 2: Documentation",
        topics: ["Views and sheets", "Annotations", "Schedules"]
      },
      {
        title: "Module 3: Design Development",
        topics: ["Materials and rendering", "Phasing", "Design options"]
      },
      {
        title: "Module 4: Collaboration",
        topics: ["Worksharing", "Linking", "Coordination"]
      }
    ],
    alignmentStatement: "Aligned with Autodesk Revit official curriculum and BIM standards.",
    externalReferenceLink: "https://www.autodesk.com/products/revit",
    featured: true
  },
  // Mechanical Engineering
  {
    id: "solidworks",
    slug: "solidworks",
    title: "SOLIDWORKS",
    shortDescription: "Master 3D mechanical design with parametric modeling and simulation tools.",
    fullDescription: "SOLIDWORKS is the leading 3D CAD software for mechanical design. This program covers part modeling, assemblies, drawings, and simulation tools used throughout the product development process.",
    domain: "Mechanical Engineering",
    subcategory: "CAD",
    level: "Beginner",
    deliveryMode: "Hybrid",
    durationWeeks: 10,
    weeklyHours: 10,
    prerequisites: ["Basic technical drawing knowledge", "Understanding of manufacturing"],
    skillsGained: [
      "Create 3D part models",
      "Build complex assemblies",
      "Generate manufacturing drawings",
      "Perform motion studies",
      "Apply materials and rendering"
    ],
    industryApplications: [
      "Product design",
      "Machine design",
      "Consumer products",
      "Manufacturing engineering"
    ],
    curriculum: [
      {
        title: "Module 1: Part Modeling",
        topics: ["Sketching", "Features", "References"]
      },
      {
        title: "Module 2: Assemblies",
        topics: ["Mates", "Configurations", "Motion"]
      },
      {
        title: "Module 3: Drawings",
        topics: ["Views", "Annotations", "BOM"]
      },
      {
        title: "Module 4: Simulation Basics",
        topics: ["Static analysis", "Motion studies", "Flow simulation intro"]
      }
    ],
    alignmentStatement: "Aligned with Dassault Systèmes SOLIDWORKS official training paths.",
    externalReferenceLink: "https://www.solidworks.com",
    featured: true
  },
  {
    id: "ansys-mechanical",
    slug: "ansys-mechanical",
    title: "ANSYS Mechanical",
    shortDescription: "Perform structural finite element analysis for stress, vibration, and thermal studies.",
    fullDescription: "ANSYS Mechanical is the industry-standard FEA software for structural analysis. This program covers static, dynamic, thermal, and nonlinear analysis workflows used in product validation and optimization.",
    domain: "Mechanical Engineering",
    subcategory: "FEA",
    level: "Professional",
    deliveryMode: "Hybrid",
    durationWeeks: 12,
    weeklyHours: 10,
    prerequisites: ["Solid mechanics knowledge", "CAD modeling experience", "Engineering mathematics"],
    skillsGained: [
      "Set up structural FEA models",
      "Perform stress and deformation analysis",
      "Conduct modal and harmonic analysis",
      "Execute thermal simulations",
      "Interpret and validate results"
    ],
    industryApplications: [
      "Aerospace structures",
      "Automotive components",
      "Pressure vessels",
      "Industrial machinery"
    ],
    curriculum: [
      {
        title: "Module 1: FEA Fundamentals",
        topics: ["Meshing", "Boundary conditions", "Material models"]
      },
      {
        title: "Module 2: Static Analysis",
        topics: ["Linear statics", "Contact", "Nonlinear materials"]
      },
      {
        title: "Module 3: Dynamic Analysis",
        topics: ["Modal analysis", "Harmonic response", "Transient dynamics"]
      },
      {
        title: "Module 4: Thermal Analysis",
        topics: ["Steady-state thermal", "Transient thermal", "Coupled analysis"]
      }
    ],
    alignmentStatement: "Aligned with ANSYS Workbench professional simulation workflows.",
    externalReferenceLink: "https://www.ansys.com",
    featured: true
  },
  {
    id: "inventor",
    slug: "inventor",
    title: "Autodesk Inventor",
    shortDescription: "Design mechanical components and assemblies with parametric 3D modeling.",
    fullDescription: "Autodesk Inventor provides professional-grade mechanical design tools. This program covers part and assembly modeling, design automation, and manufacturing documentation for industrial applications.",
    domain: "Mechanical Engineering",
    subcategory: "CAD",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 10,
    weeklyHours: 8,
    prerequisites: ["Basic CAD knowledge", "Technical drawing fundamentals"],
    skillsGained: [
      "Create parametric part models",
      "Design complex assemblies",
      "Use content center libraries",
      "Generate manufacturing drawings",
      "Perform stress analysis"
    ],
    industryApplications: [
      "Industrial machinery",
      "Tooling design",
      "Plant equipment",
      "Consumer products"
    ],
    curriculum: [
      {
        title: "Module 1: Part Modeling",
        topics: ["Sketching", "Part features", "iFeatures"]
      },
      {
        title: "Module 2: Assembly Design",
        topics: ["Constraints", "Content Center", "Design accelerators"]
      },
      {
        title: "Module 3: Documentation",
        topics: ["Drawing views", "Annotations", "Parts lists"]
      }
    ],
    alignmentStatement: "Aligned with Autodesk Inventor professional workflows.",
    featured: false
  },
  // Electrical Engineering
  {
    id: "etap",
    slug: "etap",
    title: "ETAP Power Systems",
    shortDescription: "Analyze electrical power systems with load flow, short circuit, and protection studies.",
    fullDescription: "ETAP is the comprehensive power system analysis software. This program covers power flow, short circuit, motor starting, protection coordination, and arc flash studies for electrical power systems.",
    domain: "Electrical Engineering",
    subcategory: "Power Systems",
    level: "Professional",
    deliveryMode: "Hybrid",
    durationWeeks: 14,
    weeklyHours: 10,
    prerequisites: ["Power systems theory", "Electrical engineering degree or equivalent"],
    skillsGained: [
      "Build power system one-line diagrams",
      "Perform load flow analysis",
      "Conduct short circuit studies",
      "Design protection coordination",
      "Execute arc flash analysis"
    ],
    industryApplications: [
      "Industrial facilities",
      "Power utilities",
      "Oil and gas",
      "Data centers"
    ],
    curriculum: [
      {
        title: "Module 1: System Modeling",
        topics: ["One-line diagrams", "Equipment libraries", "System configuration"]
      },
      {
        title: "Module 2: Power Flow",
        topics: ["Load flow analysis", "Voltage regulation", "Power factor correction"]
      },
      {
        title: "Module 3: Short Circuit & Protection",
        topics: ["Fault analysis", "Device coordination", "TCC curves"]
      },
      {
        title: "Module 4: Arc Flash",
        topics: ["IEEE 1584", "Hazard analysis", "Labeling requirements"]
      }
    ],
    alignmentStatement: "Aligned with ETAP professional power systems analysis workflows.",
    externalReferenceLink: "https://etap.com",
    featured: true
  },
  {
    id: "autocad-electrical",
    slug: "autocad-electrical",
    title: "AutoCAD Electrical",
    shortDescription: "Create electrical control system designs with intelligent symbols and automation.",
    fullDescription: "AutoCAD Electrical streamlines electrical design with purpose-built tools. This program covers schematic design, panel layouts, PLC I/O, and report generation for industrial control systems.",
    domain: "Electrical Engineering",
    subcategory: "Control Systems",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 8,
    weeklyHours: 8,
    prerequisites: ["Basic AutoCAD knowledge", "Electrical drafting fundamentals"],
    skillsGained: [
      "Create electrical schematics",
      "Design panel layouts",
      "Generate wire lists and reports",
      "Use symbol libraries effectively",
      "Manage project data"
    ],
    industryApplications: [
      "Manufacturing automation",
      "Building controls",
      "Industrial machinery",
      "Process control"
    ],
    curriculum: [
      {
        title: "Module 1: Schematic Design",
        topics: ["Symbol insertion", "Wire numbering", "Cross-referencing"]
      },
      {
        title: "Module 2: Panel Layouts",
        topics: ["Footprints", "Terminal strips", "Wiring diagrams"]
      },
      {
        title: "Module 3: PLC & Reports",
        topics: ["PLC modules", "I/O design", "Report generation"]
      }
    ],
    alignmentStatement: "Aligned with Autodesk AutoCAD Electrical official workflows.",
    featured: false
  },
  // Project Controls
  {
    id: "primavera-p6",
    slug: "primavera-p6",
    title: "Primavera P6",
    shortDescription: "Plan and control complex projects with enterprise scheduling capabilities.",
    fullDescription: "Oracle Primavera P6 is the leading enterprise project scheduling software. This program covers project planning, resource management, progress tracking, and earned value analysis for large-scale projects.",
    domain: "Construction Planning & Project Controls",
    subcategory: "Project Scheduling",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 8,
    weeklyHours: 8,
    prerequisites: ["Project management fundamentals", "Understanding of construction processes"],
    skillsGained: [
      "Create WBS and activities",
      "Develop project schedules",
      "Assign and level resources",
      "Track progress and updates",
      "Perform earned value analysis"
    ],
    industryApplications: [
      "Construction projects",
      "Engineering projects",
      "Infrastructure development",
      "Industrial shutdowns"
    ],
    curriculum: [
      {
        title: "Module 1: Project Setup",
        topics: ["EPS and OBS", "WBS development", "Activity creation"]
      },
      {
        title: "Module 2: Scheduling",
        topics: ["Relationships", "Constraints", "Critical path"]
      },
      {
        title: "Module 3: Resources & Costs",
        topics: ["Resource loading", "Leveling", "Cost baseline"]
      },
      {
        title: "Module 4: Progress & Reporting",
        topics: ["Updating schedules", "Earned value", "Reports"]
      }
    ],
    alignmentStatement: "Aligned with Oracle Primavera P6 professional project controls workflows.",
    externalReferenceLink: "https://www.oracle.com/primavera",
    featured: true
  },
  {
    id: "ms-project",
    slug: "ms-project",
    title: "Microsoft Project",
    shortDescription: "Manage project schedules and resources with industry-standard planning tools.",
    fullDescription: "Microsoft Project provides powerful project management capabilities. This program covers project planning, scheduling, resource management, and reporting for projects of all sizes.",
    domain: "Construction Planning & Project Controls",
    subcategory: "Project Management",
    level: "Beginner",
    deliveryMode: "Online",
    durationWeeks: 4,
    weeklyHours: 6,
    prerequisites: ["Basic computer skills", "Understanding of project concepts"],
    skillsGained: [
      "Create project schedules",
      "Manage resources and costs",
      "Track project progress",
      "Generate project reports",
      "Share project information"
    ],
    industryApplications: [
      "General project management",
      "IT projects",
      "Small construction projects",
      "Business initiatives"
    ],
    curriculum: [
      {
        title: "Module 1: Project Setup",
        topics: ["Task creation", "Duration and milestones", "Dependencies"]
      },
      {
        title: "Module 2: Resources",
        topics: ["Resource assignment", "Cost tracking", "Workload management"]
      },
      {
        title: "Module 3: Tracking & Reporting",
        topics: ["Baseline and variance", "Progress updates", "Reports and views"]
      }
    ],
    alignmentStatement: "Aligned with Microsoft Project professional planning workflows.",
    featured: false
  },
  // Middle East / International Systems
  {
    id: "gis-arcgis",
    slug: "gis-arcgis",
    title: "ArcGIS Pro",
    shortDescription: "Analyze spatial data and create maps for infrastructure and planning projects.",
    fullDescription: "ArcGIS Pro is the industry-standard GIS software for spatial analysis. This program covers data management, spatial analysis, mapping, and 3D visualization for engineering and planning applications.",
    domain: "Middle East / International Systems",
    subcategory: "GIS",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 10,
    weeklyHours: 8,
    prerequisites: ["Basic understanding of geography", "Computer proficiency"],
    skillsGained: [
      "Manage spatial databases",
      "Perform spatial analysis",
      "Create professional maps",
      "Develop 3D scenes",
      "Automate GIS workflows"
    ],
    industryApplications: [
      "Urban planning",
      "Infrastructure management",
      "Environmental assessment",
      "Utility networks"
    ],
    curriculum: [
      {
        title: "Module 1: GIS Fundamentals",
        topics: ["Data types", "Coordinate systems", "Data management"]
      },
      {
        title: "Module 2: Spatial Analysis",
        topics: ["Vector analysis", "Raster analysis", "Network analysis"]
      },
      {
        title: "Module 3: Cartography",
        topics: ["Map design", "Symbology", "Layouts and export"]
      }
    ],
    alignmentStatement: "Aligned with Esri ArcGIS Pro professional GIS workflows.",
    externalReferenceLink: "https://www.esri.com/arcgis",
    featured: false
  },
  {
    id: "matlab",
    slug: "matlab",
    title: "MATLAB for Engineers",
    shortDescription: "Develop engineering algorithms, simulations, and data analysis with MATLAB.",
    fullDescription: "MATLAB is essential for engineering computation and analysis. This program covers programming fundamentals, numerical methods, data visualization, and Simulink for engineering applications.",
    domain: "Middle East / International Systems",
    subcategory: "Computational Engineering",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 10,
    weeklyHours: 8,
    prerequisites: ["Engineering mathematics", "Basic programming concepts"],
    skillsGained: [
      "Write MATLAB scripts and functions",
      "Perform numerical analysis",
      "Create data visualizations",
      "Build Simulink models",
      "Process engineering data"
    ],
    industryApplications: [
      "Control systems",
      "Signal processing",
      "Data analysis",
      "Algorithm development"
    ],
    curriculum: [
      {
        title: "Module 1: MATLAB Fundamentals",
        topics: ["Syntax and data types", "Arrays and matrices", "Scripting"]
      },
      {
        title: "Module 2: Programming",
        topics: ["Functions", "Control flow", "File I/O"]
      },
      {
        title: "Module 3: Visualization & Simulink",
        topics: ["2D/3D plotting", "Simulink basics", "Model simulation"]
      }
    ],
    alignmentStatement: "Aligned with MathWorks MATLAB professional engineering workflows.",
    externalReferenceLink: "https://www.mathworks.com/matlab",
    featured: false
  }
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
  "Electrical Engineering"
];

export const industryDomains: DomainCategory[] = [
  "Construction Planning & Project Controls",
  "Middle East / International Systems"
];

export const allDomains = [...engineeringDomains, ...industryDomains];