function Fibonacci(n) {
  let a = 0,
    b = 1,
    next;
  console.log(a);
  while (b <= n) {
    if (typeof n === "number" && !isNaN(n) && n > 0) {
      console.log(b);
      next = a + b;
      a = b;
      b = next;
    } else {
      console.log("số không hợp lệ");
    }
  }
}
Fibonacci(10);
Fibonacci(5);
