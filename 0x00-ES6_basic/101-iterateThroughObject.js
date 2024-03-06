export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator
    .map((element, index) => (index !== reportWithIterator.length - 1 ? `${element} |` : element))
    .join(' ');
}
