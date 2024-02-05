// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function () {

    return function (...args) {
        return "Hello World"
        // console.log("Hello World")
    }
};
const result = createHelloWorld([])
console.log(result());



