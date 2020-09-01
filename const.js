function home() {
  const homename = "my house";
  //  homename = "your house"; error
  console.log(homename);
}

home();

// const를 기본으로 사용한다.
// 변경이 될 수 있는 변수는 let을 사용한다.
// var는 사용하지 않는다

function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
  console.log(list); // 배열이나 객체에서 추가, 삭제는 가능
}
// immutable array를 어떻게 만들지
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list === list2);
