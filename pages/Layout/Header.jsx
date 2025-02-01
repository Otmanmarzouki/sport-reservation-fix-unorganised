import React, { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import useUser from "@/hooks/useUser";

export default function Header({ handleToggle }) {
  const { user } = useUser();
  const [avatarUrl, setAvatarUrl] = useState("http://127.0.0.1:8000/storage/avatar/maleAvatar.png");

  useEffect(() => {
    if (user?.avatar) {
      setAvatarUrl(`http://127.0.0.1:8000/storage/${user.avatar}`);
    }
  }, [user?.avatar]);

  return (
    <header className="flex items-center justify-between bg-white h-16 px-5 shadow-lg">
      <button onClick={handleToggle} className="lg:hidden text-xl text-gray-800">
        <FaBars />
      </button>

      <div className="hidden lg:block">
        <Image src={logo} width={120} height={120} alt="logo" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-black focus:outline-none">
            <IoIosNotificationsOutline className="text-xl" />
          </button>
          <div className="absolute top-0 right-0 h-3 w-3 bg-blue-600 rounded-full"></div>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src={avatarUrl}
            width={100}
            height={100}
            className="h-12 w-12 rounded-full"
            alt="User Avatar"
            onError={() => setAvatarUrl("http://127.0.0.1:8000/storage/avatar/maleAvatar.png")}
          />
          <div className="flex flex-col justify-center">
            <div className="text-black text-xs font-semibold">{user?.name || ""}</div>
          </div>
          <MdKeyboardArrowDown className="text-blue-600 h-6 w-6" />
        </div>
      </div>
    </header>
  );
}
