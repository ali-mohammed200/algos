// # Given an array of strings, group the anagrams together.

// # An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// # Example:
// # Input: strs = ["tar", "eat","tea","rat","ate", "art", "bat"]
// # Output: [["tar", "rat", "art"], ["eat", "tea", "ate"], ["bat"]]



// objective: given an array of strings. find all the words that are anagrams.(meaning they have the same letters arranged differently) group these characters into the same array. 


//     iterate through the array with a for loop. 
//     and put the element into an array. 
//     If the next element is not an anagram. 
//     Put it into its own array. 
//     otherwise put the element into the array of the anagram 
//     that it belongs to 
// 


// strs = ["tar", "eat","tea","rat","ate", "art", "bat"]

function anagramGroup(array) {

    anagramObject = {}
  
    for (word in array) {
  
      wordArray = word.split('')
  
      for (character in word) {
        
    console.log
   }
  }
}


console.log('hello')

const anagramsArray = (inputArr) => {
  let outputArr = []
  let obj = {}
  for (let i = 0; i < inputArr.length; i++) {
    obj[inputArr[i]] = i
    // let innerArr = []
    let sortedWord = inputArr[i].split('').sort().join('')

    
  }
}