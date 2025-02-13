// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastname: "sok", batch: "A1", age: 20 },
  { firstName: "Bình", lastname: "rafat", batch: "A2", age: 22 },
  { firstName: "Cẩm", lastname: "lucky", batch: "B2", age: 21 },
  { firstName: "An", lastname: "hong", batch: "B2", age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {string} lastname - the student last name
 * @param {string} batch
 * @param {number} newAge  
 */
function updateStudentAge(firstName, lastname, batch, newAge) {
  let student = STUDENTS_DATA.find(
    (s) =>s.firstName === firstName && s.lastname === lastname && s.batch === batch
  );
  if (student) {
    student.age = newAge;
  }
}
// 1 - Update An age to 30
updateStudentAge("An", "sok", "A1", 30);
// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
