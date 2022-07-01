const date  = new Date()
const day = date.getDate().toString().padStart(2, '0')
console.log(day);   // 21 0r 02  , with 2 digits