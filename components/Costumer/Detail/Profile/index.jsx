import React from "react";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Image from "next/image";

export default function ClientProfile({ name, gender, avatarSrc }) {
  return (
    <div className="flex lg:flex-row flex-col w-full rounded-xl lg:space-x-3 space-y-3 items-center">
      <div>
        <Image src={avatarSrc} width={120} height={120} alt="avatar" />
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
