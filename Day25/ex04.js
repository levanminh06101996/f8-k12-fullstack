function user(email, name, address) {
  this.email = email;
  this.name = name;
  this.address = address;
  this.hello = function () {
    console.log("hello ban than");
  };
}

user.prototype.hello = function () {
  console.log(`minh la ${this.name}, minh den tu ${this.address}`);
};

const minh = new user("levanminh@gmail.com", "minh", "nghe an ");
console.log(Object.getPrototypeOf(minh));
