/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    let abrstr1 = handleBackspaces(S.split(""))
    let abrstr2 = handleBackspaces(T.split(""));
    return abrstr1.toString()===abrstr2.toString();
}
const handleBackspaces = (arr) =>{
    while(arr.indexOf("#")!==-1){
        const index = arr.indexOf("#");
        if(index !==0){
            arr.splice(index-1,2)
        }else{
            arr.splice(index,1)
        }
    }
    return arr;
}
console.log(backspaceStringCompare(S1,T1))
console.log(backspaceStringCompare(S2,T2))
console.log(backspaceStringCompare(S3,T3))
console.log(backspaceStringCompare(S4,T4))



/*****************************************************************************/

module.exports = { backspaceStringCompare };