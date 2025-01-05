import { useState, useEffect } from "react";
import Image from "next/image";
import useUserStore from "@/Stores/userStore";
import { motion } from "framer-motion";
import Header from "../../Commons/Header";
import useUser from "@/hooks/useUser";
import Loader from "@/Commons/Loader";
import { FaAvianex, FaRegTrashAlt } from "react-icons/fa";

const UserSettings = () => {
  const { user, loading, error } = useUser();
  const { setUser, setAvatar } = useUserStore();
  const [formValues, setFormValues] = useState({
    name: "",
    dob: "",
    email: "",
    tel: "",
    adresse: "",
    gender: "",
  });

  useEffect(() => {
    if (user) {
      setFormValues({
        name: user.name || "",
        dob: user.dob || "",
        email: user.email || "",
        tel: user.tel || "",
        adresse: user.adresse || "",
        gender: user.gender || "",
      });
    }
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      if (formValues[key]) formData.append(key, formValues[key]);
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/modifier", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      const data = await response.json();
      setUser(data.user);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/modifier", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload avatar");
      }

      const data = await response.json();
      setAvatar(data.user.avatar);
    } catch (err) {
      console.error("Error uploading avatar:", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) handleUpload(file);
  };

  if (loading || !user) {
    return (
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-6">
        <Loader />
      </main>
    );
  }
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full bg-gray-100 overflow-y-auto px-4 space-y-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <Header title="Paramètres utilisateur" className="m-10 text-3xl " />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-xl rounded-3xl p-8 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="relative group">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src={
                    `http://127.0.0.1:8000/storage/${user.avatar}` ||
                    `http://127.0.0.1:8000/storage/logos/avatar/maleAvatar.png`
                  }
                  width={100}
                  height={100}
                  alt="User Avatar"
                  className="rounded-full w-32 h-32 object-cover transition duration-300 ease-in-out group-hover:opacity-75"
                />
                <label
                  htmlFor="avatarUpload"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer"
                >
                  <span className="text-sm font-medium">Modifier</span>
                </label>
                <input
                  type="file"
                  id="avatarUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -bottom-2 -right-2 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
              >
                <FaRegTrashAlt size={20} />
              </motion.button>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {user.name || "Nom inconnu"}
              </h3>
              <p className="text-gray-500 mb-4">{user.email || "Email inconnu"}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-3xl p-8 space-y-8"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Utilisateur
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleChange}
                className="block w-full border-gray-200 rounded-full shadow-sm  p-2   transition duration-300 sm:text-sm"
                placeholder="Entrez votre nom d'usage"
                required
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                Date de naissance
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formValues.dob}
                onChange={handleChange}
                className="block w-full border-gray-200 rounded-full shadow-sm  p-2   transition duration-300 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                className="block w-full border-gray-200 rounded-full shadow-sm  p-2   transition duration-300 sm:text-sm"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                value={formValues.tel}
                onChange={handleChange}
                className="block w-full border-gray-200 rounded-full shadow-sm  p-2   transition duration-300 sm:text-sm"
                placeholder="Entrez votre numéro de téléphone"
              />
            </div>
            <div>
              <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input
                type="text"
                name="adresse"
                id="adresse"
                value={formValues.adresse}
                onChange={handleChange}
                className="block w-full border-gray-200 rounded-full shadow-sm  p-2   transition duration-300 sm:text-sm"
                placeholder="Entrer votre adresse"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                Genre
              </label>
              <select
                name="gender"
                id="gender"
                value={formValues.gender}
                onChange={handleChange}
                className="block w-full border-gray-200 rounded-full shadow-sm  p-2   transition duration-300 sm:text-sm"
              >
                <option value="">Sélectionnez votre genre</option>
                <option value="Monsieur">Monsieur</option>
                <option value="Madame">Madame</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              Enregistrer
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.main>
  );
};

export default UserSettings;
