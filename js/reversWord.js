// auther mohammed
// date;1/4/25


// . Write a program that reverses the order of words in a sentence but keeps the words intact
function reverseWord(sentence){
    return sentence.split(' ').reverse().join(' ')
}
const input="that black fatty cat bited me"
const output = reverseWord(input)

console.log(output)