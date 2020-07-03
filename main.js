let Phrase = require("kelton_gallant-palindrome");

function palindromeTester (event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});


//
// Prompt user to enter information (as opposed to text prompt)
//
// let Phrase = require("<username>-palindrome");
//
// function palindromeTester() {
//   let string = prompt("Please enter a string for palindrome testing:");
//   let phrase = new Phrase(string);
//   let palindromeResult = document.querySelector("#palindromeResult");
//
//   if (phrase.palindrome()) {
//     palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
//   } else {
//     palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
//   }
// }
//
// document.addEventListener("DOMContentLoaded", function() {
//   let button = document.querySelector("#palindromeTester");
//   button.addEventListener("click", function() {
//     palindromeTester();
//   });
// });
