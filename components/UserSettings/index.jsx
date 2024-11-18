// pages/user-settings.js
import React, { useState } from "react";
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
      <main className="flex flex-col w-full bg-gray-100 overflow-y-auto  space-y-4">
        <div className="flex flex-row justify-between lg:px-4 pt-8">
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

export default UserSettings;
