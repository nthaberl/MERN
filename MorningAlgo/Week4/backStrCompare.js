/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    Ninja Bonus: solve in O(n) time
*/

const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//          v
const S2 = "ab##";
// a -> ab -> a -> ""
const T2 = "c#d#";
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".


//psuedo code 

function backspaceStringCompare(S, T) {

    //// inner function
    function extract(str) {
    arr = []
    for (let i = 0 ; i < str.length ; i++){
        if (str[i] != "#"){
            arr.push(str[i])
        } else {arr.pop()}
    }
    //// end inner function
    return arr
    }
    const arr1 = extract(S);
    const arr2 = extract(T);
    console.log("Array 1: ",arr1)    
    console.log("Array 2: ",arr2) 
    if (arr1.length == 0 && arr2.length == 0){
        return true
    }
    if (arr1.length !== arr2.length){
        return false;
    } else {
        for (let j = 0; j < arr1.length; j++){
            if (arr1[j] !== arr2[j]){
                return false
            }
            return true;
        }
    }
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))