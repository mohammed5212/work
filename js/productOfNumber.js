// auther mohammed
// date;1/4/25

// Write a program to find the product of all digits in a number




function productOfDigits(num){
    let product =1
    num=Math.abs(num)
    if (num===0) return 0
    while (num>0){
        product*= num % 10
        num = Math.floor(num/10)    

    }
    return product

}
let number=12345
console.log('PRODUCT OF DIGITS:',productOfDigits(number))