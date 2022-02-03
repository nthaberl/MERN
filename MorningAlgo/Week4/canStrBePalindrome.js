/* 
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar


const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//            V
const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"


// check length?
// {
//     a: 3,
//     d: 2
// }
// for in 
  // is Odd flag?
  // check odds/even? length?


const str6 = "abc";
const expected6 = false;

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const charFrequencies = {};
  let oddFreqCount = 0;
  let isOddLen = str.length % 2 !== 0;

  for (const char of str) {
    if (!charFrequencies.hasOwnProperty(char)) {
      charFrequencies[char] = 1;
    } else {
      charFrequencies[char]++;
    }
  }

  for (const key in charFrequencies) {
    const charFreq = charFrequencies[key];

    // if odd occurrences
    if (charFreq % 2 !== 0) {
      oddFreqCount++;

      if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
        return false;
      }
    }
  }
  return true;
}

canBecomePalindrome(str1);
canBecomePalindrome(str2);
canBecomePalindrome(str3);
canBecomePalindrome(str4);
canBecomePalindrome(str5);

// console.log(canBecomePalindrome(str1) === expected1); // false
// console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true