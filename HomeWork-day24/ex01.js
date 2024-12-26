const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];
function removeDuplicate(arr) {
  const result = fruits.filter((name, index) => {
    return fruits.indexOf(name) === index;
  });
  return result;
}

const result = removeDuplicate(fruits);

console.log(result); // ["apple", "banana", "kiwi", "orange"]
