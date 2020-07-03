let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palidrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });
    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });
    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });
    it("should return true for a palindrome with null elements (i.e. numbers)", function() {
      let numberedPalindrome = new Phrase("ab123454321ba");
      assert(numberedPalindrome.palindrome());
    });
    it("should return false for an empty string", function() {
      let blankPalindrome = new Phrase("");
      assert(!blankPalindrome.palindrome());
    });

    describe("#letters", function() {
      it("should return only letters", function() {
        let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
        assert(punctuatedPalindrome.letters(), "MadamImAdam");
      });

    });
  });
});

              // TO CHECK IN REPL:
              // let Phrase = require("./index.js");
              // let palindrome = require("./index.js");
              // let A = Phrase("A man, a plan, a canal - Panama!");
              // $ A.palindrome();
              // > true
              // let B = Phrase("I am not a Palindrome.");
              // $ B.palindrome();
              // > false
