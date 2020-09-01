function getObj() {
  const name = "crong";
  const getName = function () {
    return name;
  };
  const setName = function (newname) {
    name = newname;
  };
  const printName = function () {
    console.log(name);
  };
  return {
    getName,
    setName,
  };
}

let obj = getObj();
console.log(obj.getName());

const data = {
  name,
  getName() {},
  age,
};
