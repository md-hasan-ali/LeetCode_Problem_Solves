const map = (arr, plusone) => {
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        let number = plusone(arr[i], i)
        numbers.push(number)
    }
    return numbers
}

let array = [1, 2, 3]; 
let plusone = (n, i) => {
    return n + 1;  
}

const result = map(array, plusone)
console.log(result)


