import React, { useState } from "react";
import SpinnerComponent from "./components/SubComponents/SpinnerComponent";
import { useRouter } from "next/router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function SpinnerDelay() {
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }

  function toSignIn() {
    router.push("/SignIn");
  }
  async function addUser() {
    setIsLoading(true);
    await fetch("http://127.0.0.1:8000/api/adduser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    SpinnerDelay();
    router.push("/SignIn");
  }

  return (
    <div className="bg-gray-200 flex justify-center items-center  min-h-screen ">
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-xl text-center font-bold">Welcome Back</h1>
                <div className="w-full mt-4">
                  <form className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                    <div className="flex flex-col mt-4">
                      <label
                        className="block text-gray-400 text-xs font-medium  mb-2"
                        htmlFor="Name"
                      >
                        Name
                      </label>
                      <input
                        id="Name"
                        type="text"
                        className="flex-grow h-8 px-2 border bg-transparent rounded border-grey-400"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label
                        className="block text-gray-400 text-xs font-medium  mb-2"
                        htmlFor="Email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="text"
                        className="flex-grow h-8 px-2 border bg-transparent rounded border-grey-400"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label
                        className="block text-gray-400 text-xs font-medium  mb-2"
                        htmlFor="Password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="flex-grow h-8 px-2 rounded bg-transparent border border-grey-400"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col mt-8">
                      <a
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded text-center"
                        onClick={addUser}
                      >
                        Sign Up
                      </a>
                    </div>
                  </form>
                  <div className=" mt-4 flex mx-9 ">
                    <a className="no-underline hover:underline text-blue-dark text-xs grow ">
                      Forgot Your Password?
                    </a>
                    <a
                      className="no-underline  hover:underline text-blue-dark text-xs "
                      onClick={toSignIn}
                    >
                      sign In
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg bg-[url('../../public/img/login.png')] bg-cover bg-center "></div>
          </div>
        </div>
      )}
    </div>
  );
}
