/**
 * 📝 School Report Card Generator
 *
 * Sharma ji ke bete ka report card generate karna hai! Student ko naam aur
 * subjects ke marks milenge, tujhe pura analysis karke report card banana hai.
 *
 * Rules:
 *   - student object: { name: "Rahul", marks: { maths: 85, science: 92, ... } }
 *   - Calculate using Object.values() and array methods:
 *     - totalMarks: sum of all marks (use reduce)
 *     - percentage: (totalMarks / (numSubjects * 100)) * 100,
 *       rounded to 2 decimal places using parseFloat(val.toFixed(2))
 *     - grade based on percentage:
 *       "A+" (>= 90), "A" (>= 80), "B" (>= 70), "C" (>= 60), "D" (>= 40), "F" (< 40)
 *     - highestSubject: subject name with highest marks (use Object.entries)
 *     - lowestSubject: subject name with lowest marks
 *     - passedSubjects: array of subject names where marks >= 40 (use filter)
 *     - failedSubjects: array of subject names where marks < 40
 *     - subjectCount: total number of subjects (Object.keys().length)
 *   - Hint: Use Object.keys(), Object.values(), Object.entries(),
 *     reduce(), filter(), map(), Math.max(), Math.min(), toFixed()
 *
 * Validation:
 *   - Agar student object nahi hai ya null hai, return null
 *   - Agar student.name string nahi hai ya empty hai, return null
 *   - Agar student.marks object nahi hai ya empty hai (no keys), return null
 *   - Agar koi mark valid number nahi hai (not between 0 and 100 inclusive),
 *     return null
 *
 * @param {{ name: string, marks: Object<string, number> }} student
 * @returns {{ name: string, totalMarks: number, percentage: number, grade: string, highestSubject: string, lowestSubject: string, passedSubjects: string[], failedSubjects: string[], subjectCount: number } | null}
 *
 * @example
 *   generateReportCard({ name: "Rahul", marks: { maths: 85, science: 92, english: 78 } })
 *   // => { name: "Rahul", totalMarks: 255, percentage: 85, grade: "A",
 *   //      highestSubject: "science", lowestSubject: "english",
 *   //      passedSubjects: ["maths", "science", "english"], failedSubjects: [],
 *   //      subjectCount: 3 }
 *
 *   generateReportCard({ name: "Priya", marks: { maths: 35, science: 28 } })
 *   // => { name: "Priya", totalMarks: 63, percentage: 31.5, grade: "F", ... }
 */
export function generateReportCard(student) {
  function gradesSubject(totalmarks) {
    if (totalmarks >= 90) {
      return "A+";
    } else if (totalmarks >= 80) {
      return "A";
    } else if (totalmarks >= 70) {
      return "B";
    } else if (totalmarks >= 60) {
      return "C";
    } else if (totalmarks >= 40) {
      return "D";
    } else if (totalmarks < 40) {
      return "F";
    } else {
      return "";
    }
  }

  function objectSubjectKeys(obj, bool) {
    if (bool) {
      return Object.keys(
        Object.fromEntries(
          Object.entries(obj).filter(([key, value]) => value >= 40),
        ),
      ).length > 0
        ? Object.keys(
            Object.fromEntries(
              Object.entries(obj).filter(([key, value]) => value >= 40),
            ),
          )
        : [];
    } else {
      return Object.keys(
        Object.fromEntries(
          Object.entries(obj).filter(([key, value]) => value < 40),
        ),
      ).length > 0
        ? Object.keys(
            Object.fromEntries(
              Object.entries(obj).filter(([key, value]) => value < 40),
            ),
          )
        : [];
    }
  }



  if (
    student == null ||
    Array.isArray(student) ||
    typeof student !== "object" ||
    student.marks == null ||
    Array.isArray(student.marks) ||
    typeof student.marks !== "object" ||
    Object.values(student.marks).length <= 0

  ) {
    return null;
  }

  let marksValue = Object.values( student.marks).filter(
    (ele) => typeof ele == "number" && ele > 0 && ele < 100,
  );
  if (marksValue.length !== Object.values(student.marks).length ) {
    return null;
  }

  if (
    typeof student == "object" &&
    typeof student.name == "string" &&
    student.name.length > 0
  ) {
    let name = student.name;
    let marks = student.marks;
    let scoredMarks = 0;
    let highest = 0;
    let lowest = 100;
    let totalmarks =
      Object.values(marks).map((ele) => {
        scoredMarks += ele;
        if (highest < ele) {
          highest = ele;
        }
        if (lowest > ele) {
          lowest = ele;
        }
      }).length * 100;

    let totalSubject = totalmarks / 100;
    let highestSubject = Object.keys(student.marks)[
      Object.values(student.marks).indexOf(highest)
    ];
    let lowestSubject = Object.keys(student.marks)[
      Object.values(student.marks).indexOf(lowest)
    ];
    let passedSubject = objectSubjectKeys(student.marks, true);
    let failedSubject = objectSubjectKeys(student.marks, false);

    let percentage = Number(((scoredMarks / totalmarks) * 100).toFixed(2));
    let grade = gradesSubject(percentage);


    return {
      name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
      totalMarks: scoredMarks,
      percentage: percentage,
      grade: grade,
      highestSubject: highestSubject,
      lowestSubject: lowestSubject,
      passedSubjects: passedSubject,
      failedSubjects: failedSubject,
      subjectCount: totalSubject,
    };
  }

  return null;
}
