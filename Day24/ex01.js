const arr1 = [1, 2, 3, 4, "5", "Minh", NaN];
console.log(arr1.includes(2));
console.log(arr1.find((item) => item % 2 === 0));
console.log(arr1.findIndex((item) => item === "Minh"));
const arrFilter = arr1.filter((item) => {
  return item % 2 !== 0;
});
console.log(arrFilter);
const students = [
  { id: 1, fullName: "Le Van Minh", age: 28, adress: "Nghe An" },
  { id: 2, fullName: "Hoang Quang Thang", age: 18, adress: "Vinh Phuc" },
  { id: 3, fullName: "Kieu Minh Tue", age: 21, adress: "Nghe An" },
];

const newStudent = students.filter((item) => item.age > 18);
console.log(newStudent);
const someResult = students.some((item) => item.age > 22);
console.log(someResult);
const everyResult = students.every((item) => item.age > 18);
console.log(everyResult);

const aReo1 = [1, 2, 3, 4];
const aReo2 = ["a", "b", "c", "d"];
console.log(aReo1.concat(aReo2, 100, ["x", "y", "z"], { tiltle: "F8" }));

const arr1DeepCopy = structuredClone(arr1); //Deep copy
arr1DeepCopy[4][0] = "F99";
console.log(arr1);

/**
 * Shallow copy
 * - concat()
 * - spread
 * - slice
 *
 * Deep copy
 * -Json : nhươc điểm là không xử li được phương thức và các giá trị đặc biệt
 * - dùng thư viện : lodash.
 * - structuredClone()
 */
