export function classifyStudentV3(mark) {
  if (mark < 0 || mark > 10) return "Invalid mark";

  if (mark >= 8) return "Excellence";
  if (mark >= 7) return "Good";
  if (mark >= 5) return "Not Good";

  return "Bad";
}
