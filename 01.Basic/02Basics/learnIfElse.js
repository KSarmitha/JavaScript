let whoIsHere = 'use'

if (whoIsHere === 'user') {
    console.log('Greeting message for USER');
    console.log('Allow access to view all courses');
} else if (whoIsHere === 'teacher') {
    console.log('Greeting message for TEACHER');
    console.log('Allow access to his courses');
} else {
    console.log('MESSAGE: Please verify your email');
    console.log('Send user an email for verification');
}

let marks = 1;

if (marks === 10 ) {
    console.log("Amazing")
} else if (marks === 5) {
    console.log("Good")
} else if (marks === 3) {
    console.log("Poor")
} else {
    console.log("Fail")
}
