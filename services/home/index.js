export const getCount = async (action) => {
  const response = await fetch("http://127.0.0.1:8000/api/counts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: action }),
  });
  const data = await response.json();
  return data;
};
