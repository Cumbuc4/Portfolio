export function formatDate(date: string, includeRelative = false, locale = "en-US") {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  let relative = formattedDate;
  if (typeof Intl !== "undefined" && Intl.RelativeTimeFormat) {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
    if (yearsAgo > 0) {
      relative = rtf.format(-yearsAgo, "year");
    } else if (monthsAgo > 0) {
      relative = rtf.format(-monthsAgo, "month");
    } else if (daysAgo > 0) {
      relative = rtf.format(-daysAgo, "day");
    } else {
      relative = rtf.format(0, "day");
    }
  }

  return `${fullDate} (${relative})`;
}
