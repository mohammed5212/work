// auther mohammed
// date;1/4/25

// Write a program to check if a given sentence is a pangram (contains every letter from A-Z). Example: Input: "The quick brown fox jumps over the lazy dog" Output: "It is a pangram"

function isPangram(sentence){
    const alphabet="abcdefghijklmnopqrstuvwxyz"
    const lowerCaseSentence=sentence.toLowerCase()
    for(let char of alphabet){
        if(!lowerCaseSentence.includes(char))
        {return "it is not a pangram"}
    }
      return" it is a pangram "
    
}
let sentence="The quick brown fox jumps over the lazy dog"
console.log(isPangram(sentence))
