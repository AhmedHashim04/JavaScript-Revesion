/*
// Lesson 21 / 188
let a =4;
a += 5 ;

// Lesson 22 / 188

//To make greater number we can use underscore , or we can make it good style
console.log(1000_000) //1000000
console.log(1e6) //1000000
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MAX_VALUE) //1.7976931348623157e+308
// Lesson 23 / 188

console.log((100).toString()) //Must on brakets to learn him that not dicimal
console.log(100.10.toString()) // not brakets  him that know that dicimal

console.log(100.16666666.toFixed(2)) //100.17 but it is string

console.log(parseInt(Number("100.16666666"))) //100
console.log(parseInt(100.16666666)) //100
console.log(parseInt("100.16666666 asdsad")) //100 get integer from mixied types not round
console.log(parseInt("asdsad 100.16666666 ")) //NaN Can,t get integer from mixied types if not on beginning

console.log(parseFloat("100.16666666 asdsad")) //100.16666666 get float from mixied types not round

console.log(Number.isInteger(100)) //true
console.log(Number.isInteger(100.5)) //false
console.log(Number.isInteger('100.5')) //false

console.log(Number.isNaN(100)) //false
console.log(Number.isNaN('100')) //false
console.log(Number.isNaN('asdasda')) //true !!

// Lesson 25 / 188

console.log(Math.round(100.2)) //100
console.log(Math.round(100.5)) //101

console.log(Math.random()) //0.575544120395151
console.log(Math.trunc(40.66)) //40 remove float from decimal number and return clear integer

// Lesson 27 / 188

let theName = "ahmed"

console.log(theName[0]) //A
console.log(theName.charAt(1)) //h
console.log(theName.indexOf("d",2)) //4
console.log(theName.slice(0,3)) //Ahm

// slice() is similar to substring() but works  differently:
// 1. slice() supports negative indices (counting from end)
// 2. If startIndex > endIndex
// , slice() returns empty string 
// while substring() swaps them
console.log(theName.slice(3,0)) //
console.log(theName.substring(6,2 )) //Ahm

// ... existing code ...
console.log(theName.slice(3,1)) //print empty string
console.log(theName.substring(4,2 )) //swap to be 2,4

theName = "   Ahmed"
console.log(theName.trim()) //Ahmed
console.log(theName.toUpperCase()) //AHMED
console.log(theName.toLowerCase()) //ahmed

console.log(theName.length) //5
console.log(theName.repeat(4)) 
console.log(theName.split(" ",1)) //[ 'Ahmed' ]
console.log(theName.split(" ",2)) //[ 'Ahmed', '' ]
console.log(theName.split(" ")) 

console.log(theName.includes("Ah")) //true
console.log(theName.includes("Ah",1)) //false
console.log(theName.startsWith("Ah")) //true
console.log(theName.endsWith("ed")) //true
*/
// Lesson 31 / 188

console.log(1=='1'); //true compare value only
console.log(1!='1'); //false compare value only
console.log(1==='1'); //false compare value , type
console.log(1!=='1'); //true compare value , type

// Lesson 32 / 188

