/* Important : strings are return new string , which means those are taking new space to store in DOM , coz strings immutable */

// windows + . // to prompt unicode values

let dollar = "$"   //8 bit unicode
let love = "❤️"    //16 bit unicode

/* console.log(dollar.length);
console.log(love.length); */

let myString = "hello, hitesh"

console.log(myString.substring(1, 4));   //first charactor is inclusive in the range , last number in the range not inclusive    o/p => ell
console.log(myString.slice(-6))
console.log(myString.indexOf("e" ,3))
console.log(myString.lastIndexOf("h"))
console.log(myString.startsWith("+94"))
console.log(myString.endsWith("@gmail.com"))
console.log(myString.includes("hit"))
console.log(myString.toLowerCase())
console.log(myString.toUpperCase())
console.log(myString.normalize())

console.log("HDFC123456".padStart(12 , "0"))
console.log("HDFC123456".padEnd(15 , "0"))

console.log("*".repeat(10))  

let score = 100
let greeting = `
${dollar} is at
value of ${score}
\u2718
`

console.log(greeting)


let myNewString = '\u2718'.length
console.log(myNewString)

let myNewString1 = String.raw`\u2718`.length
console.log(myNewString1)






