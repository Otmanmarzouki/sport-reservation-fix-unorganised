import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/SignIn");
    } else {
      router.push("/");
      console.log("token founded ");
    }
  }, []);

  async function Login() {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,
        password: Password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className=" bg-gray-200 flex justify-center items-center  min-h-screen ">
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
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border bg-transparent rounded border-grey-400"
                      name="Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label className="block text-gray-400 text-xs font-medium mb-2" htmlFor="email">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded bg-transparent border border-grey-400"
                      name="Password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col mt-8">
                    <a
                      className="flex bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded  justify-center items-center"
                      onClick={Login}
                    >
                      Login
                    </a>
                  </div>
                </form>
                <div className=" mt-4 flex mx-9 ">
                  <a className="no-underline hover:underline text-blue-dark text-xs grow ">
                    Forgot Your Password?
                  </a>
                  <a className="no-underline  hover:underline text-blue-dark text-xs">sign Up</a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 rounded-r-lg bg-[url('../../public/img/login.png')] bg-cover bg-center "></div>
        </div>
      </div>
    </div>
  );
}
