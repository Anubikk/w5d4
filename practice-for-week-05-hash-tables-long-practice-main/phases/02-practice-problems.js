function anagrams(str1, str2) {
  let strsplit1 = str1.split('').sort().join('')
  let strsplit2 = str2.split('').sort().join('')
  return strsplit1 === strsplit2
}


function commonElements(arr1, arr2) {
  const setArray = new Set(arr1);
  return arr2.filter(common => setArray.has(common))
}


function duplicate(arr) {
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
