export const validateTerrainData = (data) => {
  console.log(data);
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
    errors.Capacité = "La capacité doit être un nombre valide.";
  }

  if (!data.prix || isNaN(data.prix) || data.prix <= 0) {
    errors.prix = "Le prix doit être un nombre valide.";
  }

  if (
    !data.dimension1 ||
    isNaN(data.dimension1) ||
    data.dimension1 <= 0 ||
    !data.dimension2 ||
    isNaN(data.dimension2) ||
    data.dimension2 <= 0
  ) {
    errors.dimensions = "Les dimensions doivent être des nombres valides.";
  }

  return errors;
};
