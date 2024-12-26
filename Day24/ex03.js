/**
 * sort
 */

// const arr1 = [5, 100, 7, 1, 4, 2];
// console.log(arr1.sort((a, b) => a - b));
// console.log(arr1.sort((a, b) => b - a));

const students = [
  { id: 1, fullName: "Le Van Minh", age: 28, adress: "Nghe An" },
  { id: 2, fullName: "Hoang Quang Thang", age: 18, adress: "Vinh Phuc" },
  { id: 3, fullName: "Kieu Minh Tue", age: 21, adress: "Nghe An" },
  { id: 4, fullName: "Nguyen Van Cong", age: 18, adress: "Ha Noi" },
];

function sortbyName(data) {
  for (let i = 0; i < data.length; i++) {
    const arrFullName = data[i].fullName.split(" ");
    // console.log(arrFullName[2]);
    for (let j = 0; j < arrFullName.length; j++) {
      if (arrFullName.pop()) {
        arrFullName.shift();
      } else {
        arrFullName[2];
      }
    }
  }
}
console.log;

// console.log(students.sort((a, b) => a.age - b.age));
