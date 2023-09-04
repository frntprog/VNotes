export default function truncateWords(str, maxLength) {
  console.log(str.length, maxLength);
  if (str.length < maxLength) return str;
  return str.substring(0, maxLength) + "...";
}
