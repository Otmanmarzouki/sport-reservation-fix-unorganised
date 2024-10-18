import { useRouter } from "next/navigation";

export default function AuthButton({ isSignUp, name, email, password }) {
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();

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
    }
  };

  return (
    <div className="flex flex-col mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded justify-center items-center"
        onClick={handleAuth}
      >
        {isSignUp ? "S'inscrire" : "Se connecter"}
      </button>
    </div>
  );
}
