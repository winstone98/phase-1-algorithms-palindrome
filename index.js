function isPalindrome(word) {
  // Write your algorithm here
  const alphanumericOnly = word.toLowerCase()
  .match(/[a-z0-9]/g)
  
  return alphanumericOnly.join('') ===
    alphanumericOnly.reverse().join('');
  
}

/* 
  Add your pseudocode here
  //Perfom lowercase for all the words passed.
  //return word === reversedword
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
