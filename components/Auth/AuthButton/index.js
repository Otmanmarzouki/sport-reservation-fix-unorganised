import { useState } from "react";

import { useRouter } from "next/navigation";
import { auth } from "@/services/auth";

export default function AuthButton({ isSignUp, name, email, password, setErrors }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const validateForm = (isSignUp, name, email, password) => {
    const errors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "L'email est requis et doit être valide.";
    }
    if (!password) {
      errors.password = "Le mot de passe est requis.";
    } else if (password.length < 6) {
      errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (isSignUp && !name) {
      errors.name = "Le nom est requis.";
    }

    return errors;
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    const validationErrors = validateForm(isSignUp, name, email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
    try {
      const data = await auth(isSignUp, name, email, password);
      localStorage.setItem("token", data.token);
      router.push("/user-settings");
    } catch (err) {
      setErrors(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded justify-center items-center relative"
        onClick={handleAuth}
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" fill="currentColor" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
              />
            </svg>
            {isSignUp ? "S'inscrire" : "Se connecter"}
          </span>
        ) : isSignUp ? (
          "S'inscrire"
        ) : (
          "Se connecter"
        )}
      </button>
    </div>
  );
}
