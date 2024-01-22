/**
 * What is Isomorphic Strings in data structure and algorithm??? 
 * Isomorphic strings are strings that have a one-to-one mapping between
 * the characters of the two strings. In other words, you can replace each 
 * character in one string with a corresponding character in the other 
 * string in such a way that the two strings become identical.
 */

/**
 * QUESTION:
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * 
 * Example:
 * Input: s = "egg", t = "add"
 * Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const mappingS_to_T = {};
    const mappingT_to_S = {};
    
    for(let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (mappingS_to_T[charS]) {
            if (mappingS_to_T[charS] !== charT){
                return false;
            }
        }else {
                mappingS_to_T[charS] = charT
            }
        
        if (mappingT_to_S[charT]) {
            if (mappingT_to_S[charT] !== charS) {
                return false;
            }
        }else {
                mappingT_to_S[charT] = charS;
            }
    }
    return true;
};

// Testing the function
const s = "egg";
const t = "add";
const result = isIsomorphic(s, t);
console.log(result);