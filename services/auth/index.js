export const auth = async (isSignUp, name, email, password) => {
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
      const errorMessage = isSignUp ? "Email ou Nom déjà utilisé" : "Échec de la connexion";
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Une erreur s'est produite. Veuillez réessayer.");
  }
};