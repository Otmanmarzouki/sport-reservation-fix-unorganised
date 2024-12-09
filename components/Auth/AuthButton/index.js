import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/services/auth";

export default function AuthButton({ isSignUp, name, email, password }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors("");
    try {
      const data = await auth(isSignUp, name, email, password);
      console.log(data)
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem("userEmail", data.user.email);
      localStorage.setItem("token", data.token);
      router.push("/home");
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
      {errors && (
        <span className="flex items-center justify-center text-red-600 text-xs">{errors}</span>
      )}
    </div>
  );
}
