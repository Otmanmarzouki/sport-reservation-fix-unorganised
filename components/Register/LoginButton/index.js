import { useRouter } from "next/navigation";

export default function SignUpButton({ name, email, password }) {
  const router = useRouter();

  async function handleSignUp(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/adduser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Register failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      router.push("/home");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col mt-8">
      <button
        className="flex bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded justify-center items-center"
        onClick={handleSignUp}
      >
        Register
      </button>
    </div>
  );
}
