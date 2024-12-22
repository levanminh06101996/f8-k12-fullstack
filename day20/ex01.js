// const students= ["Minh","Tue","Son","Thang"]
// console.log(students[0]);
// console.log(students.length);
// students[7] = "Vinh";
// students[7] = "Cong";
// for (let i=0 ;i<students.length; i++) {
//     console.log(students[i]);
// }

// let content="";
// for (value of students) {
//     content+=content + ",";
// }
// console.log(content);

// students.unshift("Vinh")  
// console.log(students);

// /*  - unshift thêm phần tử vào đầu mảng 
//     - trả về độ dài mới của mảng*/

// /*shift()
//  - xoa 1 phan tu o dau mang 
//  - thay doi mang goc
//  - tra ve phan tu bi xoa */    

// students.shift();
// console.log(students);
// console.log(students.shift());

// console.log(students.push("dung","honag","mang"));
// console.log(students);

// // unshift push
// // shift   PopS

// let user = ["Cong","Minh", "Tue" , "Son" , "Thang", "Dung","Hoang" ];
// let newUser = [];
// for(let i=0 ; i<user.length;i++) {
//     newUser.unshift(user[i])
    
// }
// console.log(newUser);



// const users = [
//     { id: 1, username: "Minh", address: "NgheAn" },
//     { id: 2, username: "Tue", address: "VinhPhuc" },
//     { id: 3, username: "Son", address: "HaNoi" },
//     { id: 4, username: "Cong", address: "HaNoi" },
//     { id: 5, username: "Toan", address: "HaNam" },
//     { id: 6, username: "Giang", address: "HaNoi" },
//     ];
// const newUsers = {};
//     for(i=0 ; i<users.length; i++) {
//         console.log(users[i].address);
//         if(newUsers[users[i].address] === undefined) {
//             newUsers[users[i].address] = []
//         }
//         newUsers[users[i].address].push(users[i])
//     }

//     console.log(newUsers);

//    const userName = {};
//    for (let i = 0; i<users.length; i++) {
//         console.log(users[i].address);
//         userName[users[i].address].push(users[i]);

//    }
//    console.log(userName);

   const students = [
    {id:1 , username: "Son", score: 8 },
    {id:2, username: "Dung", score: 5},
    {id:3, username: "Minh", score: 2},
   ]

    let highest = students[0];
    let lowest  = students[2];

   for (i=1; i<students.length; i++) {
        console.log(students[i].score);
        if(students[i].score>highest.score) {
            highest = students[i];
        }
   } 

   for (i=0; i<students.length; i++) {
    console.log(students[i].score);
    if(students[i].score<lowest.score) {
        lowest = students[i];
    }
   } 


   console.log(`nguoi diem cao nhat ${highest.username}`);
   console.log(`nguoi diem thap nhat ${lowest.username}`);


   const products = [
    {id: 1 , title: "Product A", price: 200},
    {id: 2 , title: "Product B"},
    {id: 3 , title: "Product C", price: 200},
   ]

   for (let i=1;i<products.length; i++) {
        console.log(products[i].price);
        if(products[i].price==kjn  || products[i].price <= 0 || !isNaN(products[i].price)) {
            console.log(products[i]);
            console.log(`Vi tri cua la ${i}`);
            break;
        }
         
   } 

indexOf . 



   



    






