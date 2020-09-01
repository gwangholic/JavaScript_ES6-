// WeakMap 활용
/*
function Area(height, width) {
  this.height = height;
  this.width = width;
}

Area.prototype.getArea = function () {
  return this.height * this.width;
};

let myarea = new Area(10, 20);
console.log(myarea.getArea());
console.log(myarea.height);
*/

const wm = new WeakMap();
function Area(height, width) {
  wm.set(this, { height, width });
}

Area.prototype.getArea = function () {
  const { height, width } = wm.get(this);
  return height * width;
};

let myarea = new Area(10, 20);
console.log(myarea.getArea());

myarea = null;
console.log(wm);
console.log(wm.has(myarea));
// garbage collection 대상이 됨

const obj = {};
function Area2(height, width) {
  obj.height = height;
  obj.width = width;
}

Area.prototype.getArea = function () {
  return obj.height * obj.width;
};
let myarea2 = new Area2(10, 20);

console.log(obj);

myarea2 = null;
console.log(obj);
