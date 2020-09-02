// setPrototypeOf

const healthObj = {
  showHealth: function () {
    console.log("오늘 운동시간 : " + this.healthTime);
  },
  setHealth: function (newTime) {
    this.healthTime = newTime;
  },
};

const newObj = Object.setPrototypeOf(
  {
    name: "crong",
    lastTime: "11:20",
  },
  healthObj
);
console.log("myhealth is ", newObj);

// prototype chain
//child obj
const healthChildObj = {
  getAge: function () {
    return this.age;
  },
};
const childObj = Object.setPrototypeOf(
  {
    age: 22,
  },
  healthChildObj
);

console.log("childobj is ", childObj);
