let myStr = new String("abc");
console.log(myStr);
function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const myBook = new Books("hoc lap trinh", "le van minh", 2024);
console.log(myBook);

function user(email, name, address) {
  this.email = email;
  this.name = name;
  this.address = address;
  this.hello = function () {
    console.log("hello ban than");
  };
}

const minh = new user("levanminh", "minh", "nghe an ");
minh.hello();

user.prototype.getInfor = function () {
  console.log(
    `name : ${this.name}, address: ${this.address},email: ${this.email} `
  );
};

minh.getInfor();
