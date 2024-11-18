export const validateTerrainData = (data) => {
  const errors = {};

  if (!data.Nom_Terrain || !data.Nom_Terrain.trim()) {
    errors.Nom_Terrain = "Le nom du terrain est requis.";
  }

  if (!data.activité) {
    errors.activité = "L'activité est requise.";
  }

  if (!data.type_Terrain) {
    errors.type_Terrain = "Le type de terrain est requis.";
  }

  if (!data.Capacité || isNaN(data.Capacité) || data.Capacité <= 0) {
    errors.Capacité = "La capacité doit être un nombre valide supérieur à 0.";
  }

  if (!data.prix || isNaN(data.prix) || data.prix <= 0) {
    errors.prix = "Le prix doit être un nombre valide supérieur à 0.";
  }

  const dimensionsValid =
    data.dimension1 &&
    !isNaN(data.dimension1) &&
    data.dimension1 > 0 &&
    data.dimension2 &&
    !isNaN(data.dimension2) &&
    data.dimension2 > 0;

  if (!dimensionsValid) {
    errors.dimensions = "Les dimensions doivent être des nombres valides supérieurs à 0.";
  }

  return errors;
};
