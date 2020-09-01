//weakset
// 참조를 가지고 있는 객체만 저장이 가능하다.
// 객체 형태를 중복없이 저장하려고 할 때 유용하다
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
let ws = new WeakSet();
ws.add(arr);
ws.add(arr2);
ws.add(obj);
//ws.add(111); error
//ws.add("111"); error
//ws.add(null); error
// ws.add(function () {});
arr = null;
console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
// 객체가 null이되거나 필요가 없어지면 garbage collection대상이 됨
