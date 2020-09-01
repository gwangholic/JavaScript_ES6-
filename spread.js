// spread operator, 펼침 연산자

let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);
console.log(pre === newData); // false

pre = [100, 200, "hello", null];

newData = [0, 1, 2, 3, ...pre, 4];
console.log(newData);

let num = [100, 200, 300];
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.apply(null, num));
console.log("result=>", sum(...num));
