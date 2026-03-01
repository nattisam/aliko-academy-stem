// Thumbnail mapping for program cards
import autocadThumb from "@/assets/programs/autocad-thumb.jpg";
import civil3dThumb from "@/assets/programs/civil3d-thumb.jpg";
import microstationThumb from "@/assets/programs/microstation-thumb.jpg";
import openroadsThumb from "@/assets/programs/openroads-thumb.jpg";
import etabsThumb from "@/assets/programs/etabs-thumb.jpg";
import sap2000Thumb from "@/assets/programs/sap2000-thumb.jpg";
import revitStructureThumb from "@/assets/programs/revit-structure-thumb.jpg";
import solidworksThumb from "@/assets/programs/solidworks-thumb.jpg";
import catiaThumb from "@/assets/programs/catia-thumb.jpg";
import creoThumb from "@/assets/programs/creo-thumb.jpg";
import siemensNxThumb from "@/assets/programs/siemens-nx-thumb.jpg";
import inventorThumb from "@/assets/programs/inventor-thumb.jpg";
import fusion360Thumb from "@/assets/programs/fusion360-thumb.jpg";
import ansysThumb from "@/assets/programs/ansys-thumb.jpg";
import ansysFluentThumb from "@/assets/programs/ansys-fluent-thumb.jpg";
import aspenPlusThumb from "@/assets/programs/aspen-plus-thumb.jpg";
import aspenHysysThumb from "@/assets/programs/aspen-hysys-thumb.jpg";
import aspenPimsThumb from "@/assets/programs/aspen-pims-thumb.jpg";
import chemcadThumb from "@/assets/programs/chemcad-thumb.jpg";
import etapThumb from "@/assets/programs/etap-thumb.jpg";
import digsilentThumb from "@/assets/programs/digsilent-thumb.jpg";
import pscadThumb from "@/assets/programs/pscad-thumb.jpg";
import psseThumb from "@/assets/programs/psse-thumb.jpg";
import revitArchThumb from "@/assets/programs/revit-arch-thumb.jpg";
import sketchupThumb from "@/assets/programs/sketchup-thumb.jpg";
import archicadThumb from "@/assets/programs/archicad-thumb.jpg";
import navisworksThumb from "@/assets/programs/navisworks-thumb.jpg";
import primaveraThumb from "@/assets/programs/primavera-thumb.jpg";
import primaveraCloudThumb from "@/assets/programs/primavera-cloud-thumb.jpg";
import msProjectThumb from "@/assets/programs/ms-project-thumb.jpg";
import astaPowerprojectThumb from "@/assets/programs/asta-powerproject-thumb.jpg";
import arcgisThumb from "@/assets/programs/arcgis-thumb.jpg";
import arcgisOnlineThumb from "@/assets/programs/arcgis-online-thumb.jpg";
import qgisThumb from "@/assets/programs/qgis-thumb.jpg";
import globalMapperThumb from "@/assets/programs/global-mapper-thumb.jpg";
import nxAerospaceThumb from "@/assets/programs/nx-aerospace-thumb.jpg";
import solidworksAerospaceThumb from "@/assets/programs/solidworks-aerospace-thumb.jpg";
import ansysAerospaceThumb from "@/assets/programs/ansys-aerospace-thumb.jpg";

export const programThumbnails: Record<string, string> = {
  // Civil Engineering
  "autocad": autocadThumb,
  "civil-3d": civil3dThumb,
  "microstation": microstationThumb,
  "openroads-designer": openroadsThumb,
  
  // Structural
  "etabs": etabsThumb,
  "sap2000": sap2000Thumb,
  "revit-structure": revitStructureThumb,
  
  // Mechanical Engineering
  "solidworks": solidworksThumb,
  "catia": catiaThumb,
  "creo-parametric": creoThumb,
  "siemens-nx": siemensNxThumb,
  "inventor": inventorThumb,
  "fusion-360": fusion360Thumb,
  "ansys-mechanical": ansysThumb,
  "ansys-fluent": ansysFluentThumb,
  
  // Chemical Engineering
  "aspen-plus": aspenPlusThumb,
  "aspen-hysys": aspenHysysThumb,
  "aspen-pims": aspenPimsThumb,
  "chemcad": chemcadThumb,
  
  // Electrical Engineering
  "etap": etapThumb,
  "digsilent-powerfactory": digsilentThumb,
  "pscad": pscadThumb,
  "psse": psseThumb,
  
  // Architectural Engineering
  "autocad-arch": autocadThumb,
  "revit-architecture": revitArchThumb,
  "archicad": archicadThumb,
  "sketchup": sketchupThumb,
  "navisworks": navisworksThumb,
  
  // Project Controls
  "primavera-p6": primaveraThumb,
  "primavera-cloud": primaveraCloudThumb,
  "ms-project": msProjectThumb,
  "asta-powerproject": astaPowerprojectThumb,
  
  // GIS
  "arcgis-pro": arcgisThumb,
  "arcgis-online": arcgisOnlineThumb,
  "qgis": qgisThumb,
  "global-mapper": globalMapperThumb,
  
  // Aviation & Aerospace
  "catia-aerospace": catiaThumb,
  "nx-aerospace": nxAerospaceThumb,
  "solidworks-aerospace": solidworksAerospaceThumb,
  "ansys-aerospace": ansysAerospaceThumb,
};

export function getProgramThumbnail(slug: string): string | undefined {
  return programThumbnails[slug];
}
