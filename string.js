// ES2015 string에 새로운 메서드들

let str = "hello world ! ^^ ~~";
let matchstr = "hello";
let matchstr2 = "^^ ~~";
console.log(str.startsWith(matchstr)); // true
console.log(str.endsWith(matchstr2)); // true
console.log(str.includes("world")); // true
