// rest parameters

// function checkNum() {
//   const argArray = Array.prototype.slice.call(arguments);
//   console.log(toString.call(argArray));
//   const result = argArray.every((v) => typeof v === "number");
//   console.log(result);
// }
function checkNum(...argArray) {
  console.log(toString.call(argArray));
  const result = argArray.every((v) => typeof v === "number");
  console.log(result);
}
const result = checkNum(10, 2, 3, 4, 5);
