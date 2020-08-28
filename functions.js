//Named function
function sum(number1, number2) {
    return number1 + number2
}

console.log(sum(1, 2))

//No Named function
const sub = function (n1, n2) {
    return n1 - n2
}
console.log(sub(20, 12))

//Arrow function 
const mut = (n1, n2) => {
    return n1 * n2
}

console.log(mut(5, 2))
