// auther mohammed
// date;1/4/25

// Write a program that counts the number of words in a given sentence

function countWords(sentence){
    if(! sentence.trim())return 0
    words=sentence.trim().split(/\s+/)
    return words.length
}
let sentence="hello my dear"
console.log("number of words in sentence is:",countWords(sentence))