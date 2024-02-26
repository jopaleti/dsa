/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let reversed = 0;
    while (x !== 0) {
        const pop = x % 10;
        x = Math.trunc(x / 10);
        
        if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && pop > 7)) {
            return 0;
        }
        if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && pop < -8)) {
            return 0;
        }
        reversed = reversed * 10 + pop;
    }
    return reversed;
};


// Example usage:
const input = 123;
const output = reverse(input);
console.log(output); // Output: 321