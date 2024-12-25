/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import FormInput from "./FormInput";
import AuthButton from "./AuthButton";
import Logo from "./Logo";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleFormSwitch = (formType) => {
    setIsSignUp(formType === "signup");
    if (formType === "signup") {
      setName("");
    }
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <Logo />
      <div className="bg-white p-6 w-full max-w-md shadow-lg">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => handleFormSwitch("signin")}
            className={`px-4 transition-colors duration-300 ${
              !isSignUp ? "text-black" : "text-gray-300"
            }`}
          >
            Se connecter
          </button>
          <button
            onClick={() => handleFormSwitch("signup")}
            className={`px-4 transition-colors duration-300 ${
              isSignUp ? "text-black" : "text-gray-300"
            }`}
          >
            S'inscrire
          </button>
        </div>
        <form className="form-horizontal  mx-auto">
          {isSignUp && (
            <FormInput
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthButton
            email={email}
            password={password}
            name={isSignUp ? name : null}
            isSignUp={isSignUp}
            setErrors={setErrors}
          />
        </form>
        {Object.keys(errors).length > 0 && (
          <div className="flex flex-col justify-center text-gray-600 text-xs m-2">
            {Object.values(errors).map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
