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
  const newSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (newSet.has(arr[i])) {
      return arr[i];
    } else {
      newSet.add(arr[i])
    }
  }
}



//   let result = arr.filter(nums => {

//   })
// }


function twoSum(nums, target) {
  const newSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (newSet.has(target - nums[i])) {
      return true;
    } else {
      newSet.add(nums[i])
    }
  }
  return false
}


function wordPattern(pattern, strings) {
  const matches = {}; //create a new key val pair obj by index
  const wordSet = new Set(); //create a set to hold words

  for (let i = 0; i < pattern.length; i++) {
    let letter = pattern[i] // letter = A 1
    if (matches[letter]) { // matches[A] = "dog"
      if (matches[letter] !== strings[i]) return false; // "dog" = "cat" 8
      } else { // matches[A] === undefinded 2
        let word = strings[i] //word = dog 3
      if (wordSet.has(word)) return false // wordset.has(dog) === true 7
      wordSet.add(word); //wordSet = {dog, cat} 4
      matches[letter] = word; //matches = {a: dog, b: cat} 5
      }
    }
    return true; // 6 
  }




module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
