const user = {
  name: "Minh",
  sayHello() {
    console.log("hello");
  },
};

const client = Object.create(user, { email: { value: "levanminh" } });
console.log(client);
client.sayHello();

// const nullObj = Object.create(null);
// const normalObj = Object.create({});
// console.log(nullObj);
// console.log(normalObj);

// writable co the ghi de lai duoc hay khong .
//enumerable: defauvale
