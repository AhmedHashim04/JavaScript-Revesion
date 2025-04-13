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
console.log(theName.lastIndexOf("d",2)) //4
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
// Lesson 31 / 188

console.log(1=='1'); //true compare value only
console.log(1!='1'); //false compare value only
console.log(1==='1'); //false compare value , type
console.log(1!=='1'); //true compare value , type

// Lesson 33 / 188

if (4+5==9)
    console.log(44444);

if (4+5==9){
    console.log(44444);
}



if (4+5==19){
    console.log(5555555);
} else if (44==444){
    console.log(66666666);
}else{
    console.log(777777);
}

// Lesson 34  / 188
if (4==4){
    console.log('first if is true')
    if(54 ==5)
        console.log('second if also true ')
}

// Lesson 35  / 188
if (5==5) console.log("ternary")
// (5==5) ? console.log("ternary") : console.log('itis false')

let y = (5==5) ? 1000 : 10
// console.log (y)
let isTall = true

console.log(` hey ${isTall ? 'mohammed':"ahmed"} , iknown you as you are tall`)

let x = (5 == 15) ? 1000 : (10 == 10) ? 2000 : 20;

console.log(x);

// Lesson 36  / 188

// Nullish coalescing operator
let username = null ?? "Guest"; // "Guest"
let number = 0 ?? 42; // 0
let emptyString = "" ?? "Default"; // ""
let undefinedValue = undefined ?? "Default Value"; // "Default Value"

// Lesson 38  / 188
let day = 4

switch(day){
    case 1:
        console.log('it is first day');
        break
    case 2: 
        console.log('it is second day')
        break
    case 3: 
    case 4: 
        console.log('it is three and four day')
            break
    case 5: 
    case 6: //=case 5||6: 
            console.log('it is five and six day')
            break
    default : //if it puted on first line after swich it won,t printed to arrive last
        console.log("it is if all is false it printed if not break")
        break
    }
    
// Lesson 40  / 188

let myArray = [40,'Mohamed']
console.log(myArray) //(2) [40, 'Mohamed']
console.log(typeof(myArray)) //object
console.log(Array.isArray(myArray)) //true

// Lesson 41  / 188
console.log(myArray.length) //40
myArray[-1]=4 //(2) [40, 'Mohamed', -1: 4]
myArray[7]=400 //(8) [40, 'Mohamed', empty × 5, 400, -1: 4]
console.log(myArray) //(2) [40, 'Mohamed']
console.log(myArray.length) //40

*/

// Lesson 41  / 188

// let myArray = [1,2,3,4,5,6,7,8,9,10]
// myArray.unshift('Osama', 'Ahmed' ) // (12) ['Osama', 'Ahmed', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(myArray) 
// myArray.push(80,90,100) // add to end
// console.log(myArray) 
// myArray.shift() // remove from beginning and can store it in variable
// console.log(myArray) 
// let removed_num = myArray.pop() // remove from end and can store it in variable
// console.log(myArray)

// Lesson 43  / 188
// let myArray = [7,8,9,1,2,3,4,5,6,10]
// myArray.sort() // sort array but not good for numbers becuse sorted by first num only
// console.log(myArray)
// myArray.reverse() // it will reverse sorted array
// console.log(myArray)

// Lesson 45  / 188

// let myArray = [1,2,3,4,5,6,7,8,9,10]
// // myArray.splice(0,5) // (5) [6, 7, 8, 9, 10]
// // console.log(myArray.splice(0,5)) // (5) [1, 2, 3, 4, 5] print spliced array

// myArray.splice(0,5,'Osama','Ahmed') // add to beginning ,delete before add
// console.log(myArray) //(10) ['Osama', 'Ahmed', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Lesson 46  / 188

// let myArray = [1,2,3,4,5,6,7,8,9,10]
// let newArray = ['ali','ahmed','mohamed']
// var mynewArray = myArray.concat(newArray,100,"www")
// console.log(mynewArray)
// newArray.join("|") //Dont work in place

// console.log(newArray.join("|").toUpperCase()) //ali|ahmed|mohamed

// Lesson 48:55  / 188
// let array = [10,20,30,40,50,60,70,80,90,100]
// titlenumberloop:for (let i = 0; i < 10;) {
//     i++;
//     console.log(i,"Title");
//     nestedloop:for (let j = 0; j < array.length; j++) {
//         console.log(array[j]);
//         if (array[j] == 40)
//             break titlenumberloop;        
//     }
// }

// let i = 0
// for (; i < 10; i++) {
//     console.log(i);
// }
// for (;; i++) {
//     if (i < 20) {
//         break;
//     }
//     console.log(i);
// }

// let products = ["Mouse","Keyboard","Monitor","Webcam"]
// let color = ["Red","Green","Blue"]
// for (let i = 0; i < products.length; i++) {
//     document.write("<br>");
//     document.write("<div>");
//     for (let j = 0; j < color.length; j++) {
//         document.write(`${i}-${products[i]} ${color[j]}\n`);
//     }
//     document.write("</div>");
// }

// while (condition) {
    
// }
// Lesson 56  / 188

// do {
    
// } while (condition);

// Lesson 57  / 188

// function sayHello(gg) {
//     console.log(gg);
// }
// sayHello(4)

// function sayHello(gg) {
//     return(gg);
// }
// console.log(sayHello(4))

// function calc(...nums) { //*args
//     let c = 0
//         for (let i = 0; i < nums.length; i++) {
//             c += nums[i];
//         } 
//         return c;
// }

// console.log(calc(1,2,3,4,5,6,7,8,9,10))

// let sayHello = function (gg) {
//     return gg;
// }

// console.log(sayHello(4))


// let sayHelloArrow = (gg) => gg;

// // Arrow function with multiple parameters
// let add = (a, b) => a + b;

// // Arrow function with multiple lines needs curly braces and return
// let multiply = (a, b) => {
//     let result = a * b;
//     return result;
// };

// // Arrow function with no parameters needs empty parentheses
// let greet = () => "Hello!"; // == let green = "Hello!"
// let red = _ => "Hello!"; // == let red = "Hello!"

// // Arrow function with single parameter can omit parentheses
// let square = x => x * x;

// console.log(sayHelloArrow(4));      // 4
// console.log(add(5, 3));             // 8
// console.log(multiply(4, 2));        // 8
// console.log(greet());               // "Hello!"
// console.log(square(5));             // 25

// Lesson 67 / 155

// let a = "from global let"
// var b = "from global var"

//  function sayHello(){ // search in local then global
//     let a = "from local let"
//     console.log(a);
//     console.log(b); //undefiend if b is var and error if b is let
//     var b = "from local var"
// }
// sayHello()

// function bye() {
//     console.log(a);
//     console.log(b);
// }
// bye()

let c = 10

if (4==4) {
    let c = 30
    console.log(c) //30
}


if (4==4){
    console.log(c) }//10
    
var w = 50
if (4==4){
    console.log(w) 
    w = 80
}//50

if (8==8) {
    console.log(w)//80
    console.log(c)//
}