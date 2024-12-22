// const obj1= {
//     username : "Le Van Minh",
// };

/** key :value
 * key : string hoac symbol
 * value : có thể nhận mọi giá loại dữ liệu : number number, string strings,aray sub....
 */

const userInfor = {
    fullname: "Le van Minh",
    address : "Nghe An",
    learn: function(lessson,time) {
        console.log(`toi hoc  ${lessson} vao thoi gian ${time}`);
    }
}
console.log(userInfor.fullname);
userInfor.learn("Js,Css,HTML");

const obj2 = new Object ();
console.log(obj2);
userInfor.age = 33;
console.log(userInfor);
const newkey = "email"
userInfor[newkey] = "minhlv@gmail.com"
console.log(userInfor);
userInfor["so thich"] = ["coding","reading book"];
console.log(userInfor);

let title = "tivi samsung lg";
let price = 200000;
let adress = "Korea";
const products = {title,price,adress};
console.log(products);


