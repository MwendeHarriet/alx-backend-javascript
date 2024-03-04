export default function createIteratorObject(report) {
  const result = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees[department]) {
      const employees = report.allEmployees[department];
      result.push(...employees);
    }
  }
  return result;
}
