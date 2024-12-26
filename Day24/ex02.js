// const arr = [1, 2, 3, [4, 5, [8, 9, [1, 8]]], 4];
// console.log(arr.flat(Infinity)); // defaut 1 level;
// console.log(arr.flat(0));
// không làm phẳng chỉ copy thôi

/**
 * flat() :  làm phăng mảng
 *
 * - defautt : khi không truyền tham số  , depth = 1 , truyền mấy cấp thì điền số cấp vào đấy , làm phăng hết mọi cấp thì truyền số dương vô cùng vào đấy (Infinity) , flat(Infinity)
 * truyền các thuộc tính vào death không hợp lệ thì chuyểh về 0 ;
 * làm phẳng ở cấp độ nào thì mất phần tử emty ở cấp độ đấy
 *
 *
 */

/** ES6 (2015) for array
 * destruturing
 * rest :
 * - phần còn lại của array là array , phần còn lại của object là object ,  rest luôn đứng cuối khai báo trong destructuring
 * spread :
 * - rải những phần tử của mảng cũ vào một khai báo mảng mới.
 * - dùng khi nối mảng , thêm phần tử mảng , copy mảng (shallow copy).
 *
 */

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const [first, second, ...rest] = array1;
// console.log(first);
// console.log(second);
// console.log(rest);

// const newArray = [...array1, "Minh", ...array2];
// console.log(newArray);
// const conpyArray1 = [...array1];
// console.log(conpyArray1);
