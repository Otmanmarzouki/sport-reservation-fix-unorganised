import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthButton({ isSignUp, name, email, password }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = isSignUp ? "http://127.0.0.1:8000/api/adduser" : "http://127.0.0.1:8000/api/login";
    const body = isSignUp
      ? JSON.stringify({ name, email, password })
      : JSON.stringify({ email, password });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error(isSignUp ? "Registration failed" : "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      router.push("/home");
    } catch (err) {
      console.error(err);
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
