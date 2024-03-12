export default function setFromArray(set, array) {
  for (const i of array) if (!set.has(i)) return false;
  return true;
}
