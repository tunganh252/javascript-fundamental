// Check object in array have gender: female + name: Alice (regardless of capital or lowercase)
// [{name: "Alice", gender: "female"}] --> true

// for...i
// forEach
// find
// findIndex
// filter

function isAlice(student) {
  if (!student || Object.keys(student) === 0) return false;
  const NAME_CHECK = "Alice";
  const GENDER_CHECK = "female";

  return (
    student.name.toLowerCase() === NAME_CHECK.toLowerCase() &&
    student.gender === GENDER_CHECK
  );
}

/**
 *
 * @param {Array} studentList
 */
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.findIndex(isAlice) >= 0;
}

console.log(
  hasAlice([
    { id: 1, name: "Anna", gender: "female" },
    { id: 2, name: "Alice", gender: "female" },
  ])
);
