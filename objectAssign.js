// Object assign 메서드.

var healthObj = {
  showHealth: function () {
    console.log("오늘은 운동시간 : " + this.healthTime);
  },
};

const myHealth = Object.assign(Object.create(healthObj), {
  healthTime: "11:20",
  name: "crong",
});

console.log(myHealth);

// immutable 객체 만들기
const previousObj = {
  name: "Crong",
  lastTime: "12:20",
};

const myHealth = Object.assign({}, previousObj, {
  lastTime: "12:30",
  name: "honux",
  age: 99,
});

console.log("myhealth is ", myHealth);
console.log(previousObj === myHealth);
