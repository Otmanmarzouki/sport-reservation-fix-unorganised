// Function to format date
export const formatDate = (date) => {
  const parts = date.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  return `${day} ${getMonthName(month)} ${year}`;
};

const getMonthName = (month) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[parseInt(month, 10) - 1];
};
