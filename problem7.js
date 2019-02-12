//Problem 7
//bills are 100, 50, 20, 10, 5, 1
//I did look up 'cast double to int' since I forgot how js deals with typing, found parseInt

function budgetToBills(cost) {
    
    let returnBills = {};
    
    let hundreds = parseInt(cost/100);
    if (hundreds > 0) {
        cost %= 100;
        returnBills[100] = hundreds;
    }
    
    let fifties = parseInt(cost/50);
    if (fifties > 0) {
        cost %= 50;
        returnBills[50] = fifties;
    }
    
    let twenties = parseInt(cost/20);
    if (twenties > 0) {
        cost %= 20;
        returnBills[20] = twenties;
    }
    
    let tens = parseInt(cost/10);
    if (tens > 0) {
        cost %= 10;
        returnBills[10] = tens;
    }
    
    let fives = parseInt(cost/5);
    if (fives > 0) {
        cost %= 5;
        returnBills[5] = fives;
    }
    
    let ones = parseInt(cost/1);
    if (ones > 0) {
        cost %= 1;
        returnBills[1] = ones;
    }
    
    
    return returnBills;
}

console.log(budgetToBills(1745));
console.log(budgetToBills(1744));
console.log(budgetToBills(1754));