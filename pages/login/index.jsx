import React, { useState, useEffect } from "react";
import SignInForm from "@/components/Login";
export default function login() {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-xl text-center font-bold">Welcome Back</h1>
              <SignInForm />
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 rounded-r-lg bg-[url('../../public/img/login.png')] bg-cover bg-center "></div>
        </div>
      </div>
    </div>
  );
}
