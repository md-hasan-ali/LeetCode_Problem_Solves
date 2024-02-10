// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = (init) => {
    let counter = init;
    return {
        increment: () => {
            return ++counter;
        },
        reset: () => {
            counter = init;
            return counter;
        },
        decrement: () => {
            return --counter;
        }

    }

}
const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
