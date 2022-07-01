// ----Tip:1 (includes)----

// if (a === 1 || a === 2 || a === 3 , a === 4){
//     console.log("print something")
// }
// // samething doing by this line
// if ( [1, 2, 3, 4].includes(a)){
//     console.log("print something2")
// }

// ----Tip:2(Filter)----

const array = [1, 2, 3, 4, undefined, null , NaN, "" , false, 0]
const filteredArray = array.filter(Boolean)

console.log(filteredArray)    // o/p => [1, 2, 3, 4]


// ----Tip:3(Fill)----

//  [1 , 2, 3].fill('🤣') // [ '🤣', '🤣', '🤣' ]
//  [1 , 2, 3].fill('🤣',1,2) // [ 1, '🤣', 3 ]
//  [1 , 2, 3].fill('🤣',1) //[ 1, '🤣', '🤣' ]


// ----Tip:4(Shift)----

const sampleArray = [1, 2, 3, 4]
const firstElement = sampleArray.shift()

console.log(sampleArray)  // [2,3,4]
console.log(firstElement)  // 1

// ----Tip:5(Some)----
// some method tests whether at least one element in the array passes the test implemented by the provided function.

function isBiggerThan10(element, index, array){
    return element > 10;
}

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  //false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10))  //true

// ----Tip:6(Every)----
// The every method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function isBiggerThan10(element, index, array){
    return element > 10;
}

console.log([2, 5, 8, 1, 4].every(isBiggerThan10));  //false
console.log([12, 15, 18, 11, 14].every(isBiggerThan10))  //true

const Rating = rate => "1,1,1,1,1,2,2,2,2,2".slice(5-rate, 10-rate);
const stars = Rating(3)
console.log(stars)

// ----Tip:6(Object)----
/* The entries method of an Object returns an array of a given object's string-keyed property -  [key, value] pairs */

const obj = {
    name: 'Sar',
    projects: 5
}

console.log(Object.entries(obj))        //[ [ 'name', 'Sar' ], [ 'projects', 5 ] ]