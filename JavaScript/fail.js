const arr = [2, 1, 5, 4, 3, 2, 1, 8, 5, 6, 4, 1];

let count = 0;
let final = [];
// let arra = [];

const key = new Set(arr);
key.forEach((a) => {
  arr.forEach((b) => {
    if (a === b) {
      count++;
    }
  });
  final.push({ element: a, occurence: count });
  count = 0;
});
console.log(final);

// reducer

console.log(
  arr.reduce((p, c) => {
    return p + c;
  }, 0)
);
function recurse(a, b) {
  if (a % b == 2) return a;
  else return recurse(a + b, a - b);
}
console.log(recurse(7, 2));
