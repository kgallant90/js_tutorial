let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//------------ MAP ------------\\

//urls: IMPERATIVE VERSION
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
    //console.log(imperativeUrls(states));

//urls: FUNCTIONAL VERSION
function functionalUrls(elements) {
  return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
}
    //console.log(functionalUrls(states));

//urls: FULL FUNCTIONAL VERSION -> i.e. with website repo built in
function functionalFullUrls(elements) {
 return elements.map(element => element.toLowerCase().split(/\s+/).join('-').replace(/^/,'https://example.com/'));
}
    //console.log(functionalFullUrls(states));

//------------ FILTER ------------\\

//singles: IMPERATIVE FUNCTION
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
    //console.log(imperativeSingles(states));

//singles: FUNCTIONAL VERSION
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
    //console.log(functionalSingles(states));


//------------ REDUCE ------------\\
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: IMPERATIVE SOLUTION
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
    //console.log(imperativeSum(numbers));

    // sum: FUNCTIONAL SOLUTION
    //function functionalSum(elements) {
    //  return elements.reduce((total, n) => {
    //    total += n;
    //    return total;
    //  }, 0);
    //}
    //console.log(functionalSum(numbers));

// sum: FUNCTIONAL SOLUTION
// reduced based on defaults
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n });
}
    //console.log(functionalSum(numbers));

// lengths: IMPERATIVE SOLUTION
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
    //console.log(imperativeLengths(states));

// lengths: FUNCTIONAL SOLUTION
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));
