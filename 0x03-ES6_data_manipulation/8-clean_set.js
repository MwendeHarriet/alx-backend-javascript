export default function cleanSet(Set, startString) {
    let result = "";
    Set.forEach(value => {
        if (value.startsWith(startString)) {
            result += value.substring(startString.length) + "-";
        }
    });
    return result.slice(0, -1);
}
