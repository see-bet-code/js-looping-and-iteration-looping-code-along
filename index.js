// Code your solutions in this file
function writeCards(names, event) {
    let thankYous = []
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYous
}

function countDown(num) {
    let count = num
    while (count >= 0) {
        console.log(count--)
    }
}