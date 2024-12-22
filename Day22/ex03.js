// function compressString(stringInput) {
//   let result = "";
//   for (let i = 0; i < stringInput.length - 1; i++) {
//     let count = 0;
//     for (let j = 1; j < stringInput.length; j++) {
//       if (stringInput[i] === stringInput[j]) {
//         count = count + 1;
//       }
//     }
//     result = result + stringInput[i] + count;
//   }
//   return result;
// }

// console.log(compressString("aaabbc"));

// function compressString(stringInput) {
//   let result = "";
//   for (let i = 0; i < stringInput.length; i++) {
//     let count = 1;
//     for (let j = 1; j < stringInput.length; j++) {
//       if (stringInput[i] === stringInput[j]) {
//         count = count + 1;
//       }
//     }
//     result = result + stringInput[i] + count;
//   }
//   return result;
// }

function compressString(stringInput) {
  let result = "";
  let temp = "";
  for (let i = 0; i < stringInput.length - 1; i++) {
    let count = 1;
    if (stringInput[i] === temp) {
      continue;
    }
    for (let j = 1; j < stringInput.length; j++) {
      if (stringInput[i] === stringInput[j]) {
        count = count + 1;
      }
    }
    result = result + stringInput[i] + count;
    temp = stringInput[i];
  }
  return result;
}
console.log(compressString("aaabbc"));
