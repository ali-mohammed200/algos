/*
7 Kyu

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
  let combined = "";
  for(let i = 0; i < s1.length; i++){
    if(!combined.includes(s1[i])){
      combined += s1[i];
    }
  }
  for(let i = 0; i < s2.length; i++){
    if(!combined.includes(s2[i])){
      combined += s2[i];
    }
  }
  return combined.split("").sort().join("");
}


function longest1(s1, s2) {
  let myOrderedArray = (s1+s2).split("").reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator
  }, []);
  return myOrderedArray.sort().join("");
}

//Other peoples solution \|/
const longest2 = (s1, s2) => [...new Set(s1+s2)].sort().join('')
