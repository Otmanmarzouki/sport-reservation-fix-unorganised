/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserSettings = () => {
  const [nomUsage, setNomUsage] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [email, setEmail] = useState("");
  const [numeroTelephone, setNumeroTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [genre, setGenre] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    if (userName) setNomUsage(userName);
    if (userEmail) setEmail(userEmail);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nomUsage,
      dateNaissance,
      email,
      numeroTelephone,
      adresse,
      genre,
    });
  };

  return (
    <main className="min-h-screen w-full bg-gray-100 py-8 px-4">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="relative flex items-center space-x-4">
          <label
            htmlFor="avatarUpload"
            className="cursor-pointer group relative flex flex-col items-center"
          >
            <Image
              src={imagePreview || "/default-avatar.png"}
              width={120}
              height={120}
              alt="User Avatar"
              className="object-cover w-32 h-32 rounded-full ring-2 ring-indigo-300"
            />
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => document.getElementById("avatarUpload").click()}
                className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200 p-1 rounded-full hover:bg-indigo-100"
                title="Modifier"
              >
                <FaEdit size={16} />
              </button>
              <button
                onClick={handleImageRemove}
                className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1 rounded-full hover:bg-red-100"
                title="Supprimer"
              >
                <FaTrash size={16} />
              </button>
            </div>
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <div>
            <h3 className="text-xl font-bold">{nomUsage || "Nom d'usage"}</h3>
            <p className="text-gray-500">{email || "Adresse email"}</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
              <label className="block text-sm font-medium text-gray-700">Nom d'usage</label>
              <input
                type="text"
                value={nomUsage}
                onChange={(e) => setNomUsage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Entrez votre nom d'usage"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
              <input
                type="date"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
              <label className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
              <input
                type="text"
                value={numeroTelephone}
                onChange={(e) => setNumeroTelephone(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Entrez votre numéro de téléphone"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
              <label className="block text-sm font-medium text-gray-700">Adresse</label>
              <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Entrer votre adresse"
              />
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <label className="block text-sm font-medium text-gray-700">Genre</label>
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Sélectionnez votre genre</option>
                <option value="Monsieur">Monsieur</option>
                <option value="Madame">Madame</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UserSettings;
