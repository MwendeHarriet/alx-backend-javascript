export default function cleanSet(set, string) {
  let x = '';
  for (const i of set) {
    if (i.startsWith(string)) x += `${i.slice(string.length)}-`;
  }
  return x.slice(0, -1);
}
