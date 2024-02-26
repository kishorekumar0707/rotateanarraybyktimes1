let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Anonymous Function
let k = 3;
for (let i = 0; i < k; i++) {
  arr.unshift(arr.pop());
}
console.log("Anonymous Function:",arr);

// IIFE
let rotateIIFE = (function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})(arr, k);
console.log("IIFE:",rotateIIFE);