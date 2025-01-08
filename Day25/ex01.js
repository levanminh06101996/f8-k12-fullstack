// const arr1 = [1, 2, 3, 4, 5];


// let total = 0;
// for (let i = 0; i < arr1.length; i++) {
//   total += arr1[i];
// }
// console.log(total);

// let total2 = arr1.reduce((acc, currentValue, index, arr) => {
//   console.log(`acc : ${acc}`);
//   console.log(`currentvalue : ${currentValue}`);
// });

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11];
const arrA = [];
// let n = arr2[length - 1];
// for (let i = 2; i < arr2.length; i++) {
//   n = arr2[i] * arr2[i];
//   arrA = arr2[i];
//   console.log(arrA);
// }

function checkSNT(n) {
  for (let i = 2; i < n; i++) {
    let j = n * n;
    if (j % i === 0) return false;
    return true;
    arrA = arr2[i];
  }
}
console.log(arrA);

let reSurl = arrA.reduce(2, 3, 2, arrA);
console.log(result);

/**
 * Cho mảng fruits.
 *
 * NHÓM CÁC PHẦN TỬ CÓ ĐẶC ĐIỂM CHUNG.
 * Đếm các loại trái cây xuất hiện nhiều lần và thống kê lại thành 1 object.
 *
 * LOẠI BỎ PHẦN TỬ TRÙNG LẶP
 * Tạo ra mảng fruitsRemoveDuplicated chỉ chứa các phần tử không trùng lặp của fruits
 */
// Input:
const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "orange",
  "apple",
  "kiwi",
  "apple",
];
// Output:
const fruitsCount = {
  apple: 3,
  banana: 1,
  orange: 2,
  kiwi: 2,
};





const fruitscount = fruits.reduce((acc),cur) => (console.log(acc);)

if (!acc[cur]) {
    acc[cur] = 0;

// buoc 2
acc[cur]++;
return acc ;
}, {});
console.log(fruittsCount);


