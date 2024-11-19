// pages/user-settings.js
/*import React, { useState } from "react";
import Image from "next/image";

const UserSettings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password, image });
  };

  return (
    <>
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-8">
        <div className="flex flex-row justify-between lg:px-6 pt-8">
          <div className="mx-2">
            <h3 className="lg:text-2xl text-lg font-semibold">User Settings</h3>
          </div>
        </div>

        <div className="flex lg:justify-center lg:px-6">
          <div className="shadow-lg w-full relative overflow-hidden bg-white p-4 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex lg:flex-row flex-col w-full rounded-xl lg:space-x-3 space-y-3 items-center">
                <div>
                  <label htmlFor="avatarUpload" className="cursor-pointer">
                    <Image
                      src={`http://127.0.0.1:8000/storage/logos/avatar/maleAvatar.png`}
                      width={120}
                      height={120}
                      alt="avatar"
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    />
                    <input type="file" id="avatarUpload" accept="image/*" className="hidden" />
                  </label>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="py-2 px-7 text-sm font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                  >
                    Change Picture
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-7 text-sm font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                  >
                    Delete Picture
                  </button>
                </div>
              </div>

              <div className="lg:flex flex-row lg:gap-4">
                <div className="lg:w-1/2 w-full">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                    Nom
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex flex-row-reverse w-full">
                <button
                  type="submit"
                  className="  bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserSettings;*/
import { useState } from "react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserSettings = () => {
  const [nomUsage, setNomUsage] = useState("");
  const [nomComplet, setNomComplet] = useState("");
  const [email, setEmail] = useState("");
  const [numeroTelephone, setNumeroTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nomUsage,
      nomComplet,
      email,
      numeroTelephone,
      adresse,
      genre,
      image,
    });
  };

  return (
    <main className="flex flex-col items-center w-full bg-gray-100 py-8 px-4 space-y-8">
      {/* User Header */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <div className="relative flex items-center space-x-4">
          {/* Profile Image */}
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
            {/* Edit and Delete Icons */}
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

          {/* User Info */}
          <div>
            <h3 className="text-xl font-bold">{nomUsage || "User"}</h3>
            <p className="text-gray-500">{adresse || "City, Country"}</p>
          </div>
        </div>
      </div>

      {/* User Form */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom d'usage et nom complet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom d'usage
              </label>
              <input
                type="text"
                value={nomUsage}
                onChange={(e) => setNomUsage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                placeholder="Entrez votre nom d'usage"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                value={nomComplet}
                onChange={(e) => setNomComplet(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                placeholder="Entrez votre nom complet"
                required
              />
            </div>
          </div>

          {/* Email et numéro de téléphone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Numéro de téléphone
              </label>
              <input
                type="text"
                value={numeroTelephone}
                onChange={(e) => setNumeroTelephone(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                placeholder="Entrez votre numéro de téléphone"
              />
            </div>
          </div>

          {/* Adresse et Genre */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                placeholder="Ville, Pays"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Genre
              </label>
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                required
              >
                <option  value="">Sélectionnez votre genre</option>
                <option value="masculin">Masculin</option>
                <option value="féminin">Féminin</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          {/* Save Button */}
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
