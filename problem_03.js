const expect = (value) => {
    const toBe = (value2) => {
        if (value === value2) {
            return true;
        } else if (value2 !== null) {
            return "Not Equal"
        } else {
            return 'Not Equal';
        }
    }
    const notToBe = (value3) => {
        if (value !== value3) {
            return true;
        } else if(value3 !== null) {
            return true;
        } else {
            return "Equal";
        }
    }
    return { toBe, notToBe }
}

console.log(expect(5).toBe(3))
console.log(expect(5).notToBe(null))