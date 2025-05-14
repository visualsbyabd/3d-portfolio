export function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  } else if (num >= 1000 && num < 1000000) {
    return Math.floor(num / 1000) + "K";
  } else if (num >= 1000000 && num < 1000000000) {
    return Math.floor(num / 1000000) + "M";
  } else {
    return Math.floor(num / 1000000000) + "B";
  }
}

export function formatStringLength(text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}
