function sort(a, b, c) {
    if (a > b) [a, b] = [b, a];
    if (a > c) [a, c] = [c, a];
    if (b > c) [b, c] = [c, b];
    return [a, b, c];
  }
  
  console.log(sort(6, 8, 4));



