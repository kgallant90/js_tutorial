// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  //RETURNS A CAPITALIZED PHRASE (NOT IN CODE TUTORIAL)
  this.louder = function louder() {
  let processContent = this.content.toUpperCase();
  return processContent;
  }

  this.blank = function blank() {
    return !this.content.match(/^\s+$/) === null;
  }

}

  // OLD (BUT NOT THE OLDEST) CODE
  // // Reverses a string.
  // function reverse(string) {
  //   return Array.from(string).reverse().join("");
  // }
  //
  // // Defines a Phrase object.
  // function Phrase(content) {
  //   this.content = content;
  //
  //   this.processor = function processor() {
  //     return this.content.toLowerCase();
  //   }
  //
  //   // Returns content processed for palindrome testing.
  //   this.processedContent = function processedContent() {
  //     return this.processor();
  //   }
  //
  //   // Returns true if the phrase is a palindrome, false otherwise.
  //   this.palindrome = function palindrome() {
  //     return this.processedContent() === reverse(this.processedContent());
  //   }
  //
  //   // Returns a capitalized phrase
  //   this.louder = function louder() {
  //     let processContent = this.content.toUpperCase();
  //     return processContent;
  //   }
  // }
  //
  // // Defines a TranslatedPhrase object.
  // function TranslatedPhrase(content, translation) {
  //   this.content = content;
  //   this.translation = translation;
  //
  //   // Returns translation processed for palindrome testing.
  //   this.processedContent = function processedContent() {
  //     return this.processor();
  //   }
  // }
  //
  // TranslatedPhrase.prototype = new Phrase();


  // OLD CODE
  // // Reverses a string.
  // function reverse(string) {
  //   return Array.from(string).reverse().join("");
  // }
  //
  // // Defines a Phrase object.
  // function Phrase(content) {
  //   this.content = content;
  //
  //   // Returns content processed for palindrome testing.
  //   this.processedContent = function processedContent() {
  //     return this.content.toLowerCase();
  //   }
  //
  //   // Returns true if the phrase is a palindrome, false otherwise.
  //   this.palindrome = function palindrome() {
  //     return this.processedContent() === reverse(this.processedContent());
  //   }
  //
  //   // Returns a capitalized phrase
  //   this.louder = function louder() {
  //     let processContent = this.content.toUpperCase();
  //     return processContent;
  //   }
  // }
  //
  // // Defines a TranslatedPhrase object.
  // function TranslatedPhrase(content, translation) {
  //   this.content = content;
  //   this.translation = translation;
  //
  //   // Returns translation processed for palindrome testing.
  //   this.processedContent = function processedContent() {
  //     return this.translation.toLowerCase();
  //   }
  // }
  //
  // TranslatedPhrase.prototype = new Phrase();
