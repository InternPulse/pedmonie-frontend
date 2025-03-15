export function timeFormatter(dateString) {
  const date = new Date(dateString);
  const dateNow = new Date();

  const seconds = Math.floor((dateNow.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2628000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    seconds: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);

    if (count >= 1) {
      return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "Just now";
}
