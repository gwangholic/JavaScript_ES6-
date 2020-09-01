var data = [1, 2, undefined, NaN, null, ""];

for (var i = 0; i < data.length; i++) {
  console.log(i);
}

data.forEach(function (value) {
  console.log("valueis", value);
});

Array.prototype.getIndex = function () {};

for (let idx in data) {
  // for in은 array에서 쓰면 안된다. 상위의 데이터 까지 순회하기 때문
  console.log(data[idx]); // function이 출력됨
}

for (let value of data) {
  console.log(value);
}

var str = "hello world!!!";
for (let value of str) {
  console.log(value);
}
