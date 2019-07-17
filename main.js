// #############-PALINDROME CHEKER-############

function palindrome(str) {
  // 1. Remove all characters which are not letter or digits
  // 2. Remove falsy values if any
  // 3. Convert to lower case
  // 4. Join words if more than one word and store in a variable
  // 5. Split string into letters
  // 6. Reverse the letters
  // 7. Join letters to form a string and store in a variable
  // 8. Compare string in 5 with string in 8 to check if it is Palindrome

  let initialString = str
    .replace(/\W|_/g, " ")
    .split(" ")
    .filter(el => {
      if (el) return el;
    })
    .map(el => el.toLowerCase())
    .reduce((joinedStr, el) => joinedStr + el);

  let reverseString = initialString
    .split("")
    .reverse()
    .reduce((joinedStr, el) => joinedStr + el);
  return reverseString === initialString;
}
// document.write(palindrome("e%Ye"));
// console.log(palindrome("raCE CA-R  "));

//   #############-END PALINDROME CHEKER-############

// #############-CAESARS CIPHER-############
/**
 * A common modern use is the ROT13 cipher, where the values of the
 * letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and
 * returns a decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic
 * character (i.e. spaces, punctuation), but do pass them on.
 */
function rot13(str) {
  // LBH QVQ VG!
  let charCodes = [];
  for (i = 0; i < str.length; i++) {
    let charCode = str.toUpperCase().charCodeAt(i);
    if (charCode >= 65 && charCode <= 77) {
      charCode = charCode + 13;
      charCodes.push(charCode);
    } else if (charCode >= 78 && charCode <= 90) {
      charCode = charCode - 13;
      charCodes.push(charCode);
    } else {
      charCodes.push(charCode);
    }
  }
  let newWord = String.fromCharCode(...charCodes);
  // console.log(charCodes);
  // console.log(newWord);
  return newWord;
}
rot13("v'ir 100% qbar vg");
