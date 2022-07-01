// integers literals

/*  10
100
1000  alt+shift+a */

let billion = 1_000_000_000

//Arithmetic
//+,-,/,*,**,%
console.log(2**4) //output: 16

console.log(Math.pow(2, 9))
console.log(Math.pow(3, 1/3))
console.log(Math.round(.6))
console.log(Math.ceil(.6))
console.log(Math.floor(.6))
console.log(Math.abs(-9))
console.log(Math.min(2,3,7,4,8))
console.log(Math.max(2,3,7,4,8))
console.log(Math.random())

//ES6 new methods

Math.cbrt(27);
Math.hypot(3, 4)
console.log(Math.clz32(0xf));  //28

//infinity , no errors; just infinity
//divide by 0; it's just NaN

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.isNaN(2)) //functions related to Number , started with is ; hint

console.log(Number.parseInt("3a"))


let statementOne = .3 - .2
let statementTwo = .2 - .1

console.log(statementOne === statementTwo)


//BigInt

let googol = "1" + "0".repeat(100)
console.log(BigInt(googol))