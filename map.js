// map & WeakMap
// Array -> Set, WeakSet
// Object -> Map, WeakMap

// map은 key/value
let wm = new WeakMap();
let myfun = function () {};
// 이 함수가 얼마나 실행될지?를 알려고 할 때.

wm.set(myfun, 0);
console.log(wm);

let count = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(myfun); // get valuee
  count++;
  wm.set(myfun, count);
}
myfun = null;
console.log(wm.get(myfun));
