var name = "global var";

function home() {
  var homevar = "homevar";
  for (var i = 0; i < 100; i++) {}
  console.log(i);
}

home(); // prints: 100

function home() {
  var homevar = "homevar";
  for (let i = 0; i < 100; i++) {} // i값이 for문 안에서만 유효
  console.log(i);

  if (true) {
    let myif = "myif";
  }
  //console.log(myif);
}

// home(); error

var list = document.querySelectorAll("li");
for (var i = 0; i < list.length; i++) {
  // let으로 closure 문제 해결
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.");
  });
}
