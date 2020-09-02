// this context of Arrow function

/*const myObj = {
  runTimeout() {
    setTimeout(
      function () {
        //      console.log(this === window); // true
        this.printData(); // function을 사용시 bind를 해줘야 함
      }.bind(this),
      200
    );
  },
  printData() {
    console.log("hi codesquad!");
  },
};

myObj.runTimeout();
*/
const myObj = {
  runTimeout() {
    setTimeout(() => {
      // arrow function은 context를 유지함
      this.printData();
    }, 200);
  },
  printData() {
    console.log("hi codesquad!");
  },
};

myObj.runTimeout();
