// Udemy
// JavaScript Algorithms and Data Structures Masterclass
// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

function validAnagram(word1, word2){
    let bool = true
    let counterObj = {};
    if (word1.length != word2.length){
        return false;
    }

    [...word1].forEach(letter => {
        if (typeof counterObj[letter] === 'undefined'){
            counterObj[letter] = 0 ;
        }
        counterObj[letter]++;
    });
    console.log(counterObj);
    [...word2].forEach(letter => {
        if(typeof counterObj[letter] == 'undefined'){
            return bool = false;
        }
        counterObj[letter]--;
        if (counterObj[letter] < 0){
            return bool = false;
        }
    });

    let edgeCase = Object.values(counterObj).filter((num) => { num > 0})
    if (edgeCase.length > 0){
        return false;
    }

    console.log(counterObj);
    return bool;
}

// This solution above is O(n) or O(n^2) because of the filter.
// Bad solution do to the weird edge case of some letters not being duplicates
// awesome vs awesom
// Might not need the edge case because of the different if checks we have

function validAnagram(word1, word2){
    let counterObj = {};

    if (word1.length != word2.length) {
        return false;
    }

    for (let index = 0; index < word1.length; index++) {
        // word1
        const letter = word1[index];
        if (typeof counterObj[letter] === 'undefined'){
            counterObj[letter] = 0 ;
        }
        counterObj[letter]++;
    }

    for (let index = 0; index < word2.length; index++) {
        // word2
        const letter = word2[index];
        if (typeof counterObj[letter] === 'undefined'){
            return false;
        }
        counterObj[letter]--;
        if (counterObj[letter] < 0) {
            return false;
        }
    }

    return true;
}

//If I sorted the two words, I would only need one loop!
