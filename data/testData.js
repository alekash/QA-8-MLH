const name = {
    "default": "Little Green Man 009",
    "nameOnlyLetters": "LittleGreenMan",
    "spacesBeforeName": "   Little Green Man 009",
    "spacesAfterName": "Little Green Man 009   ",
    "symbolsInNameField": "!@#$%^&*()/",
    "sqlXml": "<LittleGreenMan009>",
    "maxAmountLetters": "wwwwwwwwwwwwwwwwww20wwwwwwwwwwwwwwwwww40wwwwwwwwwwwwwwwwww60wwwwwwwwww",
    "overRequiredAmount": "wwwwwwwwwwwwwwwwww20wwwwwwwwwwwwwwwwww40wwwwwwwwwwwwwwwwww60wwwwwwwww71"


}

const gender = {
    "he": 0,
    "she": 1,
    "it": 2
}

const age = {
    "default": "1234567890",
    "min": "1",
    "two": "2",
    "max": "999999999999",
    "zerosBeforeNum": "000008",
    "spacesBeforeNum": "    63",
    "thirteenDigits": "1234567890123"
}

const story = {
    "overcomingTheMonster": 0,
    "rebirth": 1,
    "quest": 2,
    "journeyAndReturn": 3,
    "ragsAndRiches": 4,
    "tragedy": 5,
    "comedy": 6
}
module.exports = {name, gender, age, story};
