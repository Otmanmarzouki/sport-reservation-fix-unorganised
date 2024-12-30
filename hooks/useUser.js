import { useEffect } from "react";
import useUserStore from "@/Stores/userStore";

export default function useUser() {
  const { user, loading, error, setUser, setLoading, setError } = useUserStore();

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    setLoading(true); // Set loading to true before fetching.
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setUser({
        name: data.name || "",
        email: data.email || "",
        dob: data.dob || "",
        tel: data.tel || "",
        adresse: data.adresse || "",
        gender: data.gender || "",
        avatar: data.avatar || "",
      });
    } catch (err) {
      setError(err.message || "Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error };
}
