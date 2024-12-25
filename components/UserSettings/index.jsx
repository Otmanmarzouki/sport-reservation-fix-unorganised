import { useState, useEffect } from "react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";
import Header from "../../Commons/Header";

const UserSettings = () => {
  const [user, setUser] = useState({
    nomUsage: "",
    dateNaissance: "",
    email: "",
    numeroTelephone: "",
    adresse: "",
    genre: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
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
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-6">
      <div className="flex flex-col lg:flex-row justify-between mt-7 lg:w-auto ">
        <Header title="Réservations" className="text-2xl" />
      </div>
      <div className=" w-full max-w-3xl mx-auto bg-white shadow-lg  rounded-lg p-6 mt-7">
        <div className="relative flex items-center justify-center space-x-4">
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
                className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200 p-2 rounded-full hover:bg-indigo-100"
                title="Modifier"
              >
                <FaEdit size={16} />
              </button>
              <button
                onClick={handleImageRemove}
                className=" text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-100"
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
            <h3 className="text-xl font-bold">{user.nomUsage || "Nom d'usage"}</h3>
            <p className="text-gray-500">{user.email || "Adresse email"}</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
              <label className="block text-xs font-medium text-gray-500">Nom d'utilisateur</label>
              <input
                type="text"
                name="nomUsage"
                value={user.nomUsage}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border text-sm border-gray-300 rounded-md"
                placeholder="Entrez votre nom d'usage"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <label className="block text-xs font-medium text-gray-500">Date de naissance</label>
              <input
                type="date"
                name="dateNaissance"
                value={user.dateNaissance}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
              <label className="block text-xs font-medium text-gray-500">E-mail</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-md"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <label className="block text-xs font-medium text-gray-500">téléphone</label>
              <input
                type="text"
                name="numeroTelephone"
                value={user.numeroTelephone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-md"
                placeholder="Entrez votre numéro de téléphone"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
              <label className="block text-xs font-medium text-gray-500">Adresse</label>
              <input
                type="text"
                name="adresse"
                value={user.adresse}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-sm border border-gray-300 rounded-md"
                placeholder="Entrer votre adresse"
              />
            </div>
            <div className="w-full lg:w-1/2 px-3">
              <label className="block text-xs font-medium text-gray-500">Genre</label>
              <select
                name="genre"
                value={user.genre}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-sm border border-gray-200 rounded-md"
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
              className="bg-orange-400 hover:bg-orange-700 text-white font-medium py-1 px-4 rounded"
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
