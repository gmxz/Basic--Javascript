//Adulthood test

let age = 19;

if (age < 18) {
    console.log('You are not adult');
}
else {
    console.log('You are adult');
} //you are adult

// Can also be passed through a function

function isAdult(age) {
    if (age < 18) {
        return 'You are not adult';
    }
    else {
        return 'You are adult';
    }
}

console.log(isAdult(17)) //You are not adult

//switch case *-*

function whatSex(sex) {
    switch (sex) {
        case 'M':
            return 'Male';
        case 'F':
            return 'Female';
        default:
            return 'Other'
    }
}

console.log(whatSex('F')) //Female

//Ternary conditional

function oddTest(number) {
    return (number % 2 === 1) ? true : false
}
console.log(oddTest(17)) //true
console.log(oddTest(12)) //false
