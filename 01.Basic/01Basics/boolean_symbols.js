// boolean

let score = 100
//true
if(score === 100){
    console.log("its true value")
}

 //false values
 /* undefined
 null
 0
 -0
 NaN
 "" */ //these are treated as flase in js

 console.log(typeof(false.toString()));

 // null : special object whose value is "no object"

 console.log(typeof(null))      //o/p => object , null is a language keyword
 console.log(typeof(undefined))  //o/p => undefined , undefined is a predefined global constant

 // both define absense of value

//  == , ==== show the difference

//symbol

String("Sar")
"sar"
let mySYm = Symbol("p1")        
let mySYm2 = Symbol("p1")

console.log(mySYm === mySYm2)  //o/p => false ; if we use symbol value not be change

let priority = Symbol.for("p1")
let priority2 = Symbol.for("p1")

console.log(mySYm === mySYm2)  //o/p => true ; to get equal value since we 

console.log (priority === priority2)

const WIN = "WINDOW"
const AILE = "AILE"
const MID = "MID"

const crew = "WINDOW"

function getSeat(getValue){
    switch (getValue){
        case WIN:
            return "Seat is allocated"
            case AILE:
            return "Seat is allocated"
            case MID:
            return "Seat is allocated"
            default:
                console.log("No seat allocated")
    }
}

console.log(getSeat(crew))


// Global Object
/* constants like undefined , NaN
functions like isNaN() , parseInt() , eval()
constructor like Date() , String() , Object()
Math , Json 

these are not reserved keywords , null is reserved keyword
global object should be treated as reserved*/


// what is global ? 
// Node from Node js and Browser from browser(window)

console.log(this)  //o/p => {} ; in here global is node
console.log(this)  
/* o/p =>    ; this is when run console log from broser , so global is browser
Window {0: global, 1: Window, 2: global, 3: Window, window: Window, self: Window, document: document, name: '', location: Location, …} */

//ES2020 globalThis
console.log(globalThis)


