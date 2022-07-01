// primitive values
// undefined, null , strings, number : No change (immutable)

let myString = "Sarmitha"      // its not change
myString.toLocaleLowerCase()    // its not change ,return new string

// objects are mutable (you can change)

let myObject = {name: "Sarmitha"}
myObject.name = "Sarmitha Krishnagobal"
myObject.lastName = "editted"

// arrays are also mutable

let hereScore = [4, 5, 6, 1, 2, 3]
hereScore[1] = 10

// objects are called as reference types
//reference is assigned

let arrayRef = [1, 2]
let anotherArrayRef = arrayRef;
anotherArrayRef[1] = 5

console.log(anotherArrayRef === arrayRef)   //true

let yetAnotherArray = Array.from(arrayRef)    //one of the way to copy the array original value

console.log(yetAnotherArray === arrayRef)   //false    

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

//type conversion
//JS gets what JS wants

console.log(10 + " Objects")         //10 Objects
console.log("10" * "8")             // 80

let num = 1 - "x"
console.log(num)                //NaN
console.log(num + " Objects")       //NaN Objects


//true gets to 1
// false, "" get to 0

// forcefull conversion
Number("3")         // 3
let infosysStock = 1600.4343
infosysStock.toFixed(2)

console.log(Boolean(""))            // false
console.log(Boolean([]))            // true

// objects to primitive value (boolean , string) algorithm
/* 1. prefer-string
2. prefer-number
3. No-prefernce */


let colorValue = 14
let binaryValue = colorValue.toString(2)
console.log(binaryValue)        //1110

console.log({1 : "one"}.toString());   // [object Object]
let newDate = new Date(2022, 1,1)
console.log(newDate.valueOf())      // 1643653800000


// preferNumber alg => valueOf()  => toString



