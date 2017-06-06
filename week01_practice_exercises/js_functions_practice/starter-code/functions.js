// Question 1
function maxOfTwoNumbers(x,y) {
  if (x > y) return x;
  else return y;
}

// Question 2
function maxOfThree(x,y,z) {
  if (x >= y)
  {
    if (x >= z) return x;
    else return z;
  }
  else {
    if (y >= z) return y;
    else return z;
  }
}

// console.log(maxOfThree(4,100.98,3.2));

// Question 3
function isCharacterAVowel(c) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(c) != -1)
    return true;
  return false;
}

// console.log(isCharacterAVowel('u'));

// Question 4
function sumArray(arr) {
  var sum = 0;
  for (i in arr)
    sum += arr[i];
  return sum;
}

// console.log(sumArray([5, 4, 3, 2, 1, 6, 7, 8, 9, 10]));

// Question 4
function multiplyArray(arr) {
  var product = 1;
  for (i in arr)
    product *= arr[i];
  return product;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}

// console.log(numberOfArguments(4,100.98,3.2));


// Question 6
var reverseString = function(str){
  var arr = str.split('');
  var rev = [];
  for (var i = arr.length - 1; i >= 0; i--)
    rev.push(arr[i]);
  return rev.join('');
}
// console.log(reverseString("but.t"));

// Question 7
function findLongestWord (arr) {
  var w = "";
  for (var i = 0; i < arr.length; i++)
    if (arr[i].length > w.length) w = arr[i];
  return w;
}
// console.log(findLongestWord(["aadfb", "kitten", "onomatopoeia", "baby", "dog", "a", "alieurgh", "bc"]));

// a function that takes an array of words and a number `i` and returns a new array of words that are longer than `i` characters long.

// Question 8
function filterLongWords (arr, i) {
  var newArr = [];
  for (index in arr)
    if (arr[index].length > i) newArr.push(arr[index]);
  return newArr;
}

// console.log(filterLongWords(["aadfb", "kitten", "onomatopoeia", "baby", "dog", "a", "alieurgh", "bc"], 4));



// Bonus 1
//??????

// 2. Write a function that takes a string as an argument and returns an object where:

//   - the keys are the characters that occur in the string
//   - the values are the number of occurrences for each letter, regardless of the case

function charactersOccurencesCount(stringToCount) {
  var characters = {};
  // replacing all Capitals by Lowercase letters and removing spaces
  var stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
  stringToCount.split("").forEach(function(l){
    characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
  });
  return characters;
}
console.log(charactersOccurencesCount("cat"));

