// const products = {
//   title: "san pham A",
//   price: 200,
//   description: "thong tin chi tiet abc...",
// };
// for (key in products) {
//   console.log(`gia tri cua ${key} la ${products[key]}`);
// }
// console.log(Object.keys(products));
// console.log(Object.values(products));
// console.log(Object.entries(products));

// const arrInfo = [
//   ["full name ", "minhna"],
//   ["age", 28],
//   ["address", "nghe an"],
// ];
// const obj = {};

// for (let item of arrInfo) {
//   console.log(item);
//   obj[arrInfo[1][0]] = obj[arrInfo[i][1]];
// }

const cart = {
  products: [
    {
      id: 1,
      tittle: "san pham A",
      price: 200,
      quantity: 2,
    },
    {
      id: 2,
      tittle: "san pham B",
      price: 300,
      quantity: 4,
    },
    {
      id: 3,
      tittle: "san pham c",
      price: 300,
      quantity: 1,
    },
  ],
  getTotal: function () {
    let total = 0;
    for (let value of this.products) {
      console.log(value);
      total += value.price * value.quantity;
    }
  },
};
