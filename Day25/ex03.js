const products = [
  { id: 1, title: "Product A", quantity: 2, price: 200 },
  { id: 2, title: "Product B", quantity: 1, price: 300 },
  { id: 3, title: "Product C", quantity: 4, price: 240 },
];

function Cart(products, userId) {
  this.products = products;
  this.userId = userId;
}

Cart.prototype.getTotal = function () {
  //   return products.reduce((acc, curr) => {
  //     return (acc += curr.price * curr.quantity);
  //   }, 0);

  return products.reduce((acc, curr) => (acc += curr.price * curr.quantity));
};

const cartofMinh = new Cart(products, "123");
const cartofLong = new Cart(products, "456");
console.log(cartofMinh.getTotal());
console.log(cartofLong.getTotal());
