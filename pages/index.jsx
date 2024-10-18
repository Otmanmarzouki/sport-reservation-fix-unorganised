import React from "react";
import AuthForm from "@/components/Login/index";

export default function authentification() {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-8 sm:px-16">
        <div className="flex rounded-lg shadow-lg w-full lg:w-3/4 xl:w-2/3 bg-white sm:mx-0">
          <div className="flex flex-col w-full md:w-1/2 p-8 ">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <AuthForm />
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 rounded-r-lg bg-[url('/img/login.png')] bg-cover bg-center transition-all duration-300 lg:bg-contain"></div>
        </div>
      </div>
    </div>
  );
}
