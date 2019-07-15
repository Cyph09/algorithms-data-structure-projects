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
document.write(palindrome("e%Ye"));
console.log(palindrome("raCE CA-R  "));

//   #############-END PALINDROME CHEKER-############
