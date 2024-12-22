// function taskA() {
//     console.log("mua nha ");
// }
// function kiemTien(callback) {
//     console.log("kiem du tien");
//     callback();
// }
// function muaXe(){
//     console.log("mua xe");
// }

// kiemTien(taskA);
// kiemTien(muaXe);

// const sum1 = (a,b) => a + b;
// const getUserInfor = () => ({
//     username: "Minh",
//     age:28,
// });

function calcBMI(weight, height) {
    let weight = parseFloat(window.prompt("moi nhap can nang (kg)"));
    let height = parseFloat(window.prompt("moi nhap chieu cao (cm)"));
    let resutl = weight/(height**height);
    if (weight===weight || heigh===height) {
        console.log("Invalid");
        return false;
    }
    console.log(weight, height);
    return;

    // if (resutl<18.5) {
    //     console.log("la thieu can");
    // } else if(18.5<resutl<22.9) {
    //     console.log("la binh thuong");
    // } else if (23<=resutl<=24.9){
    //     console.log("la thua can ");
    // } else {
    //     console.log ("ban la beo phi")
    // }
}

calcBMI();
