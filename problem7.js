/*
Problem 7
  bills are 100, 50, 20, 10, 5, 1
  I did look up 'cast double to int' since I forgot how js deals with typing, found parseInt
  much less code than draft 1
  if user enters decimal/double, parseInt and % truncates
  needs error checking for user input array of bills
*/

const bills = [100,50,20,10,5,1];

//same function but user can input what kind of bills to use
function budgetToBills(cost,usersBills) {

  //error checking
  if (!validBills(usersBills))
    throw console.error("Invalid bills array");

  let returnBills = {};

  if (!usersBills)
    usersBills = bills;

  usersBills.forEach( (denomination) => {

    let count;
    //console.log(denomination);
    if (count = parseInt(cost/denomination)) // evaluates false if 0
    {
      returnBills[denomination] = count;
      cost %= denomination;
    }

  });

  return returnBills;

}

//NEEDS TO BE IMPLEMENTED
function validBills(arr) {

  return true;

}

//testing
console.log(budgetToBills(1745));
console.log(budgetToBills(1744));
console.log(budgetToBills(1754));
console.log(budgetToBills(10));

console.log(budgetToBills(1745,[50,20,10,5,1]));
console.log(budgetToBills(1754,[100,10,1]));


/* first draft implementation
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
}*/

//second draft implementation
/*function budgetToBills(cost) {

  let returnBills = {};

  bills.forEach( (denomination) => {

      let count;
      //console.log(denomination);
      if (count = parseInt(cost/denomination)) // evaluates false if 0
      {
        returnBills[denomination] = count;
        cost %= denomination;
      }

  });

  return returnBills;

}*/
