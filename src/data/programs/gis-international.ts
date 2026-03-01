import { Program } from "../programs";

export const gisInternationalPrograms: Program[] = [
  {
    id: "arcgis-pro",
    slug: "arcgis-pro",
    title: "ArcGIS Pro",
    shortDescription: "Professional GIS desktop application for spatial analysis.",
    fullDescription: "ArcGIS Pro is Esri's next-generation GIS application. Master mapping, spatial analysis, and data management for engineering applications.",
    domain: "GIS & Infrastructure Intelligence",
    subcategory: "GIS",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 10,
    weeklyHours: 8,
    prerequisites: ["GIS concepts"],
    skillsGained: ["Mapping", "Spatial analysis", "Geoprocessing", "3D GIS", "Data management"],
    industryApplications: ["Infrastructure planning", "Environmental", "Utilities", "Urban planning"],
    curriculum: [
      { title: "Module 1: Fundamentals", topics: ["Interface", "Maps", "Data management"] },
      { title: "Module 2: Analysis", topics: ["Geoprocessing", "Spatial analysis", "ModelBuilder"] },
      { title: "Module 3: Advanced", topics: ["3D scenes", "Layout", "Sharing"] }
    ],
    alignmentStatement: "Aligned with Esri ArcGIS certification.",
    featured: true,
    careerOutcomes: ["GIS Analyst", "Geospatial Engineer", "Mapping Specialist"]
  },
  {
    id: "arcgis-online",
    slug: "arcgis-online",
    title: "ArcGIS Online",
    shortDescription: "Cloud-based GIS platform for web mapping and collaboration.",
    fullDescription: "ArcGIS Online enables web-based mapping and sharing. Master cloud GIS, web applications, and organizational content management.",
    domain: "GIS & Infrastructure Intelligence",
    subcategory: "Cloud GIS",
    level: "Beginner",
    deliveryMode: "Online",
    durationWeeks: 6,
    weeklyHours: 6,
    prerequisites: ["Basic computer skills"],
    skillsGained: ["Web mapping", "Content management", "App creation", "Collaboration"],
    industryApplications: ["Field data collection", "Public engagement", "Dashboards"],
    curriculum: [
      { title: "Module 1: Basics", topics: ["Interface", "Content", "Web maps"] },
      { title: "Module 2: Applications", topics: ["Web AppBuilder", "StoryMaps", "Dashboards"] },
      { title: "Module 3: Administration", topics: ["Organization", "Sharing", "Integration"] }
    ],
    alignmentStatement: "Aligned with Esri ArcGIS Online workflows.",
    featured: false
  },
  {
    id: "qgis",
    slug: "qgis",
    title: "QGIS",
    shortDescription: "Free and open-source geographic information system.",
    fullDescription: "QGIS is a powerful free GIS platform. Master mapping, analysis, and plugin development for professional GIS work.",
    domain: "GIS & Infrastructure Intelligence",
    subcategory: "Open Source GIS",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 8,
    weeklyHours: 6,
    prerequisites: ["GIS basics"],
    skillsGained: ["Map composition", "Vector/raster analysis", "Plugins", "Python scripting"],
    industryApplications: ["Academia", "NGOs", "Government", "Consulting"],
    curriculum: [
      { title: "Module 1: Fundamentals", topics: ["Interface", "Data loading", "Styling"] },
      { title: "Module 2: Analysis", topics: ["Vector tools", "Raster analysis", "Processing"] },
      { title: "Module 3: Advanced", topics: ["Print composer", "Plugins", "Python"] }
    ],
    alignmentStatement: "Aligned with QGIS community best practices.",
    featured: false
  },
  {
    id: "global-mapper",
    slug: "global-mapper",
    title: "Global Mapper",
    shortDescription: "Versatile GIS software with extensive format support.",
    fullDescription: "Global Mapper provides comprehensive GIS capabilities. Master terrain analysis, LiDAR processing, and format conversion.",
    domain: "GIS & Infrastructure Intelligence",
    subcategory: "GIS/Remote Sensing",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 6,
    weeklyHours: 6,
    prerequisites: ["GIS basics"],
    skillsGained: ["Terrain analysis", "LiDAR processing", "Format conversion", "Digitizing"],
    industryApplications: ["Surveying", "Mining", "Environmental", "Infrastructure"],
    curriculum: [
      { title: "Module 1: Basics", topics: ["Interface", "Data loading", "Projection"] },
      { title: "Module 2: Terrain", topics: ["DEM analysis", "Contours", "Volumes"] },
      { title: "Module 3: LiDAR & Export", topics: ["Point cloud", "Classification", "Export"] }
    ],
    alignmentStatement: "Aligned with Blue Marble Global Mapper workflows.",
    featured: false
  },
  {
    id: "civil-3d-gis",
    slug: "civil-3d-gis",
    title: "Civil 3D GIS Workflows",
    shortDescription: "Integration of GIS data with Civil 3D for infrastructure projects.",
    fullDescription: "Learn to integrate GIS data with Civil 3D. Master data import, georeferencing, and GIS-enabled infrastructure design.",
    domain: "GIS & Infrastructure Intelligence",
    subcategory: "CAD-GIS Integration",
    level: "Intermediate",
    deliveryMode: "Online",
    durationWeeks: 4,
    weeklyHours: 6,
    prerequisites: ["Civil 3D basics", "GIS concepts"],
    skillsGained: ["GIS data import", "Coordinate systems", "Feature lines from GIS", "Export to GIS"],
    industryApplications: ["Infrastructure design", "Utility mapping", "Land development"],
    curriculum: [
      { title: "Module 1: Setup", topics: ["Coordinate systems", "Data shortcuts", "GIS import"] },
      { title: "Module 2: Integration", topics: ["Feature extraction", "Surfaces from GIS", "Parcels"] },
      { title: "Module 3: Export", topics: ["SHP export", "KML", "Collaboration"] }
    ],
    alignmentStatement: "Aligned with Autodesk Civil 3D GIS workflows.",
    featured: false
  },
  {
    id: "bentley-opencities",
    slug: "bentley-opencities",
    title: "Bentley OpenCities",
    shortDescription: "Digital twin platform for cities and infrastructure.",
    fullDescription: "OpenCities enables city-scale digital twins. Master reality modeling, asset management, and urban visualization.",
    domain: "GIS & Infrastructure Intelligence",
    subcategory: "Digital Twins",
    level: "Professional",
    deliveryMode: "Hybrid",
    durationWeeks: 8,
    weeklyHours: 8,
    prerequisites: ["BIM/GIS experience"],
    skillsGained: ["Reality modeling", "Asset federation", "Web visualization", "Analytics"],
    industryApplications: ["Smart cities", "Urban planning", "Asset management", "Utilities"],
    curriculum: [
      { title: "Module 1: Platform", topics: ["Architecture", "Data sources", "Integration"] },
      { title: "Module 2: Modeling", topics: ["Reality capture", "Mesh processing", "Federation"] },
      { title: "Module 3: Applications", topics: ["Web clients", "Analytics", "Workflows"] }
    ],
    alignmentStatement: "Aligned with Bentley OpenCities workflows.",
    featured: false
  }
];
