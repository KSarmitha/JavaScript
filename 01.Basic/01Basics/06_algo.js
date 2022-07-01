100 + " Mongoes"         //10 Mogoes
"7" * "4"       //28

Number(3) //3
Number("") //0
Number([]) //0
Number([99]) //99
Number([99 , 88]) //NaN

// objects to primitive value (boolean , string) algorithm
/* 1. prefer-string
2. prefer-number
3. No-prefernce */


//toString()  //valueOf()  

// if primitive type first will call toString;valueOf
//else valueOf then toString

let date = new Date(2022 ,3,4);
let dateString = date.toString();
console.log(dateString);        //Mon Apr 04 2022 00:00:00 GMT+0530 (India Standard Time)
console.log(date.valueOf())                 //1649010600000



