/** product: calculate the product of an array of numbers. 
 * product([2, 3, 4])   // 24
*/

function product(nums) {
	//Base Case
	if (nums.length === 0) return 1;
	return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words.
 * longest(["hello", "hi", "hola"])  // 5
 */
//first attempt
// function longest(words) {
// 	if (words.length === 0) return 'done';
// 	for (let i = 0; i < words.length; i++) {
// 		if (words[i].length > words[i + 1].length) {
// 			return words[i].length;
// 		} else {
// 			longest(words.slice(1));
// 		}
// 	}
// }

function longest(words) {
	/* BASE CALL*/
	if (words.length === 1) {
		return words[0].length;
	}
	/* RECURSIVE CALL*/
	return Math.max(words[0].length, longest(words.slice(1)));
}

// Math.max(words[0].length,longest(words.slice(1)))
// slice from idx 1 ["hello", "hi", "holaaaaa"]
// Math.max('hello'.length(5), longest(["hi", "holaaaaa"]) )
// Math.max('hello', Math.max("hi".lenght(2))longest("holaaaaa"]) )
//longest("holaaaaa"]) base is called because array lenght is 1
//return words[0].length "holaaaaa".lenght = 8
// Math.max('hello'.length(5), Math.max("hi".lenght(2)),longest("holaaaaa"](8))
// Math.max('hello'.length(5), Math.max(2,8))
// Math.max(5, 8)

/** everyOther: return a string with every other letter. */
// everyOther("hello")  // "hlo"
function everyOther(str, idx = 0, newStr = '') {
	//base call
	if (str.length <= idx) {
		return newStr;
	}
	/* RECURSIVE CALL*/
	newStr += str[0];
	return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not.
isPalindrome("tacocat")  // true
isPalindrome("tacodog")  // false

 */
//without recursion
// function isPalindrome(str) {
//   return str.split('').reverse().join('') === str
// }

function isPalindrome(str) {

  
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
