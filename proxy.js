// Proxy interception

const myObj = { name: "crong" };

const proxy = new Proxy(myObj, {
  get: function (target, property, receiver) {
    console.log("get value");
    return target[property];
  },
  set: function (target, property, value) {
    console.log("change value");
    target[property] = value;
  },
});
proxy.name = "jisu";
toString.call(proxy);
console.log(proxy === myObj);
console.log(proxy.name === myObj.name);

0;
