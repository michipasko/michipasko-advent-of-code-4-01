"use strict"

/*
--- Day 4: Secure Container ---

You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

It is a six-digit number.
The value is within the range given in your puzzle input.
Two adjacent digits are the same (like 22 in 122345).
Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
Other than the range rule, the following are true:

111111 meets these criteria (double 11, never decreases).
223450 does not meet these criteria (decreasing pair of digits 50).
123789 does not meet these criteria (no double).
How many different passwords within the range given in your puzzle input meet these criteria?
*/

let input = "136760-595730"

let rangeFrom = input.split("-")[0]
let rangeTo = input.split("-")[1]
//let rangeFrom = "211"
//let rangeTo = "223"


// console.log(rangeFrom)
// console.log(rangeTo)

let possiblePasswords = new Array

for (let i = rangeFrom; i <= rangeTo; i++) {
    possiblePasswords.push(String(i))
}

// console.log("PP:", possiblePasswords)

let possiblePassWordsDoubleDigit = []

let itemBefore = 0

for (let possiblePassword of possiblePasswords) {
    for (let symbol of possiblePassword) {
        if (parseInt(symbol) === itemBefore) {
            possiblePassWordsDoubleDigit.push(possiblePassword)
            itemBefore = 0
            break
        } 

        else {
            itemBefore = parseInt(symbol)
        }
    }
}

//console.log("PPDD:", possiblePassWordsDoubleDigit)


let possiblePassWordsFinalFiltered = []

let itemBefore2 = 0
let symbolCount = 0


for (let possiblePassword of possiblePassWordsDoubleDigit) {
    for (let symbol of possiblePassword) {
        symbolCount++

        if (parseInt(symbol) >= itemBefore2) {
            itemBefore2 = parseInt(symbol)
            
            if (symbolCount === possiblePassword.length) {
                possiblePassWordsFinalFiltered.push(possiblePassword)
                itemBefore2 = 0
                symbolCount = 0
            }
        }

        else {
            itemBefore2 = 0
            symbolCount = 0
            break
        }
    }
}

console.log("PPF:", possiblePassWordsFinalFiltered)

console.log("Solution Task 1:", possiblePassWordsFinalFiltered.length)