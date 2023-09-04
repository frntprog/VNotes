export default function truncateWords(str, maxLength) {
  if (str.length < maxLength) return str;
  return str.substring(0, maxLength) + "...";
}
