export default function updateStudentGradeByCity(listi, city, newGrades) {
  if (!Array.isArray(listi)) return [];

  const updatedStudents = listi
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      if (gradeObject) {
        // eslint-disable-next-line no-param-reassign
        student.grade = gradeObject.grade;
      } else {
        // eslint-disable-next-line no-param-reassign
        student.grade = 'N/A';
      }
      return student;
    });

  return updatedStudents;
}
