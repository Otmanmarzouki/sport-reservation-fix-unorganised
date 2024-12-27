export const updateUserProfile = async (userData) => {
  console.log("from service", userData);
  try {
    const response = await fetch("http://127.0.0.1:8000/api/user/modifier", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: userData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
