// let j = 0 ;
// total = 0;
// while(j<=100) {
//     if(j%2==) {
//         total += j;
//     }
// }

// const students = [
//   { name: "minh", age: 18 },
//   { name: "thang", age: 20 },
//   { name: "son", age: 24 },
// ];
// for (let i = 0; i < students.length; i++) {
// //   console.log(`xin chao ban ${students[i]}`);
//   if (students[i].age < 20) {
//     console.log(`xin chao ban ${students[i].name}`);
//   }
// }

const cart = [{id:1, title:"tivi xiaomi X",price:100000, quantity:2},
                {id:1, title:"Iphone promax 16",price: 300000,quantity:3}, 
]

function calcPayment() {
    let total = 0;
    for(let i = 0; i<cart.length;i++) {
        console.log(`tinh tong tien ${cart}`)
        total += cart[i].quantity * cart[i].price
            return total;
    }
}

console.log(calcPayment(cart))