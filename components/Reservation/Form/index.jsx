import React, { useState } from "react";

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    tel: "",
    email: "",
    sexe: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.prenom) newErrors.prenom = "Le prénom est requis";
    if (!formData.nom) newErrors.nom = "Le nom est requis";
    if (!formData.tel) newErrors.tel = "Le téléphone est requis";
    if (!formData.email) newErrors.email = "L'email est requis";
    if (!formData.email.includes("@")) newErrors.email = "L'email est invalide";
    if (!formData.sexe) newErrors.sexe = "Le genre est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your server
      alert("Formulaire soumis avec succès!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Informations personnelles
      </h2>

      {["prenom", "nom", "tel", "email"].map((field) => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block text-gray-700 text-sm font-bold mb-2">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={
              field === "tel" ? "Téléphone" : field.charAt(0).toUpperCase() + field.slice(1)
            }
          />
          {errors[field] && <p className="text-red-500 text-xs italic">{errors[field]}</p>}
        </div>
      ))}

      <div className="mb-4">
        <label htmlFor="sexe" className="block text-gray-700 text-sm font-bold mb-2">
          Genre
        </label>
        <select
          id="sexe"
          name="sexe"
          value={formData.sexe}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Sélectionnez votre genre</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
          <option value="other">Autre</option>
        </select>
        {errors.sexe && <p className="text-red-500 text-xs italic">{errors.sexe}</p>}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Détails sport</h2>
      <div className="mb-6">
        <label htmlFor="details" className="block text-gray-700 text-sm font-bold mb-2">
          Détails
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          placeholder="Entrez les détails de votre sport"
        ></textarea>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Procéder
        </button>
      </div>
    </form>
  );
}
