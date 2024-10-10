import React from "react";
import Image from "next/image";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";

export default function ClientProfile({ name, gender, avatarSrc, handleImageChange }) {
  return (
    <div className="flex lg:flex-row flex-col w-full rounded-xl lg:space-x-3 space-y-3 items-center">
      <div>
        <label htmlFor="avatarUpload" className="cursor-pointer">
          <Image
            src={avatarSrc}
            width={120}
            height={120}
            alt="avatar"
            className="rounded-full border border-gray-300"
          />
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>
      <div className="flex flex-col justify-around space-y-2">
        <div className="text-sm lg:text-lg text-black font-semibold">{name}</div>
        <div className="flex flex-row text-slate-500 font-medium items-center space-x-4">
          <div className="flex flex-row items-center space-x-2 w-full">
            <div>{gender === "male" ? <BiMaleSign /> : <BiFemaleSign />}</div>
            <div className="text-sm lg:text-lg">{gender === "male" ? "Monsieur" : "Madame"}</div>
          </div>
          <div>
            <FiEdit />
          </div>
        </div>
      </div>
    </div>
  );
}
