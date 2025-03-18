import React, { useState } from "react";

export default function ReservationForm({ formData, setFormData, onSubmit }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.Prenom) newErrors.Prenom = "Le prénom est requis";
    if (!formData.Nom) newErrors.Nom = "Le nom est requis";
    if (!formData.Tel) newErrors.Tel = "Le téléphone est requis";
    if (!formData.Email) newErrors.Email = "L'email est requis";
    if (!formData.Email.includes("@")) newErrors.Email = "L'email est invalide";
    if (!formData.Sexe) newErrors.Sexe = "Le genre est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
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

      {["Prenom", "Nom", "Tel", "Email"].map((field) => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block text-gray-700 text-sm font-bold mb-2">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "Email" ? "email" : "text"}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={
              field === "Tel" ? "Téléphone" : field.charAt(0).toUpperCase() + field.slice(1)
            }
          />
          {errors[field] && <p className="text-red-500 text-xs italic">{errors[field]}</p>}
        </div>
      ))}

      <div className="mb-4">
        <label htmlFor="Sexe" className="block text-gray-700 text-sm font-bold mb-2">
          Genre
        </label>
        <select
          id="Sexe"
          name="Sexe"
          value={formData.Sexe}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Sélectionnez votre genre</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
          <option value="other">Autre</option>
        </select>
        {errors.Sexe && <p className="text-red-500 text-xs italic">{errors.Sexe}</p>}
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
      <div className="mb-10 flex items-center">
        <input
          type="checkbox"
          id="paid"
          name="paid"
          checked={formData.paid || false}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, paid: e.target.checked }))}
          className="hidden"
        />
        <label htmlFor="paid" className="flex items-center cursor-pointer">
          <div
            className={`w-5 h-5 rounded-full border-2 border-blue-500 transition-all ${
              formData.paid ? "bg-blue-500" : "bg-white"
            }`}
          ></div>
          <span
            className={`ml-2 ${formData.paid ? "text-gray-700 font-medium" : "text-gray-400 "} text-sm `}
          >
            Paiement espece
          </span>
        </label>
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
