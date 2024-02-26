/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let i = 0;

    // Step 1: Ignore leading whitespace
    while (s[i] === " ") {
      i++;
    }

    // Step 2: Check for '+' or '-'
    let sign = 1;
    if (s[i] === "-" || s[i] === "+") {
      sign = s[i] === "-" ? -1 : 1;
      i++;
    }

    // Step 3: Read characters until non-digit or end of string
    let result = 0;
    while (i < s.length && /^\d$/.test(s[i])) {
      const digit = parseInt(s[i]);
      // Step 4: Check for overflow/underflow
      if (result > (INT_MAX - digit) / 10) {
        return sign === 1 ? INT_MAX : INT_MIN;
      }
      result = result * 10 + digit;
      i++;
    }

    // Step 5: Apply sign
    return result * sign;
};


// Example usage:
const input = "   -42";
const result = myAtoi(input);
console.log(result); // Output: -42