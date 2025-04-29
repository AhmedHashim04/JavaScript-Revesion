// Revesion From 0 day in JavaScript
// ==================================

// First note: JavaScript compiler reads from top to bottom, meaning that if there
// is a script tag at the top of an HTML file, it will be read first, followed by
// the HTML script. This means that if there is an <h1> tag, it won't be affected by
// the JavaScript code.

// تعريف المتغيرات
let a;
let b = null;
let c = "hello" / 5;

// طباعة القيم
console.log("a =", a);         // undefined
console.log("b =", b);         // null
console.log("c =", c);         // NaN

// طباعة الأنواع
console.log("typeof a =", typeof a); // "undefined"
console.log("typeof b =", typeof b); // "object"
console.log("typeof c =", typeof c); // "number"

// المقارنات
console.log("a == b :", a == b);     // true (قريبين من بعض)
console.log("a === b :", a === b);   // false (أنواع مختلفة)

console.log("Number('abc') =", Number("abc")); // NaN
console.log("isNaN(c) =", isNaN(c));           // true

// مزيد من الجنون 🤪
console.log("NaN === NaN :", NaN === NaN);     // false
console.log("isNaN(NaN) :", isNaN(NaN));       // true


let n1 = 10;let n2 = 80;console.log(n1+n2); // 90 (num)
let s3 = "mosa";console.log(s3+n1); // mosa10 (str)

console.log(1/0); // Infinity
console.log(-1/0); // -Infinity

console.log(+'4 dsagfa') // NaN
console.log(Number('4 4')) // NaN 
console.log(Number('4 4asdsa')) // NaN 
console.log(parseFloat('4asdsa')) // 4
console.log(typeof(parseInt('4'))) // number