
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const createCounter = (n) => {
    let current = n - 1;
    return function () {
        current = current + 5;
        return current;
    }
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());