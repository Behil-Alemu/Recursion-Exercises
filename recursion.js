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
	let len = str.length;
	if (len <= 1) return true;
	if (str[0] !== str[len - 1]) return false;
	return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). 
findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1

*/
let animals = [ 'duck', 'cat', 'pony' ];
function findIndex(arr, val, idx = 0) {
	if (idx >= arr.length) return -1;
	if (arr[idx] === val) return idx;
	return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse.
 * revString("porcupine") // 'enipucrop'
 */
//first try
// function revString(str, idx = 0, revStr = '') {
// 	let len = str.length;
// 	if (idx >= len) return revStr;
// 	revStr += str[len - 1];
// 	return revString(str.slice(0, -1), idx + 1, revStr);
// }
function revString(str, idx = 0, revStr = '') {
	let len = str.length;
	if (revStr.length === len) return revStr;
	revStr += str[len - 1 - idx];
	return revString(str, idx + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let result = [];
	for (let key in obj) {
		if (typeof obj[key] === 'string') result.push(obj[key]);
		if (typeof obj[key] === 'object') result.push(...gatherStrings(obj[key]));
	}
	return result;
}

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
