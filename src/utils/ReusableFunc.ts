export const formatCount = (viewCount: string | number): string => {
  const count = Number(viewCount);
  if (isNaN(count) || count < 0) return "Invalid Count";
  if (count >= 1e9) return `${(count / 1e9).toFixed(1)}B`;
  else if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
  else if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
  else return `${count}`;
};


export const timeAgo = (publishedAt: string): string => {
  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);
  const timeDifferenceInSeconds = Math.floor(
    (currentDate.getTime() - publishedDate.getTime()) / 1000
  );
  const years = Math.floor(timeDifferenceInSeconds / (60 * 60 * 24 * 365));
  const months = Math.floor(
    (timeDifferenceInSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30)
  );
  const days = Math.floor(
    (timeDifferenceInSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24)
  );
  const hours = Math.floor(
    (timeDifferenceInSeconds % (60 * 60 * 24)) / (60 * 60)
  );
  const minutes = Math.floor((timeDifferenceInSeconds % (60 * 60)) / 60);
  if (years > 0) return `${years} ${years === 1 ? "year" : "years"} ago`;
  else if (months > 0)
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  else if (days > 0) return `${days} ${days === 1 ? "day" : "days"} ago`;
  else if (hours > 0) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  else return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
};


export const formatDate = (publishedAt: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Date(publishedAt).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};


export const formatVideoDuration = (duration: string): string => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return "Invalid Duration";
  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;
  const formattedDuration = `${hours > 0 ? hours + ":" : ""}${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return formattedDuration;
};
