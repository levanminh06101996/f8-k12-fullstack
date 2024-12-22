const products = [
  {
    id: 1,
    name: "Apple iPhone 12",
    price: 1000,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 900,
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 800,
  },
  {
    id: 4,
    name: "Apple iPhone 11",
    price: 700,
  },
  {
    id: 5,
    name: "Samsung Galaxy S20",
    price: 600,
  },
  {
    id: 6,
    name: "Xiaomi Mi 10",
    price: 500,
  },
];
function getTopProducts(products, top) {
  let result = [];
  for (let i = 0; i < products.length - 1; i++) {
    for (let j = i + 1; j < products.length; j++) {
      if (products[i].price < products[j].price) {
        let temp = products[i];
        products[i] = products[j];
        products[j] = temp;
      }
    }
  }
  for (let i = 0; i < top; i++) {
    result.push(products[i]);
  }
  return result;
}
const result = getTopProducts(products, 3);
console.log(result);
