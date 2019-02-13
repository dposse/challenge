/*
Problem 7
  bills are 100, 50, 20, 10, 5, 1
  I did look up 'cast double to int' since I forgot how js deals with typing, found parseInt
  much less code than draft 1
  if user enters decimal/double, parseInt and % truncates
  needs error checking for user input array of bills
*/
console.log("\n\nProblem 7 output\n\n");
const bills = [100,50,20,10,5,1];

//same function but user can input what kind of bills to use
function budgetToBills(cost,usersBills) {



  let returnBills = {};

  if (!usersBills)
    usersBills = bills;
  else {
    //error checking
    if (!validBills(usersBills))
      throw console.error("Invalid bills array");
  }

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

//O(n^2)...
function validBills(arr) {

  /*don't need to do this since function only called if we know user gave array
  //if !arr, no argument given
  if (!arr)
    return true;*/

  let valid;

  for (let i=0; i<arr.length; i++) {

    valid = false;

      for (let j=0; j<bills.length; j++) {

          if (arr[i] == bills[j])
            valid = true;

      } //end for

  }

  return valid;

}

//testing
alert("Problem 7, Results in console -->");

console.log(budgetToBills(1745));
console.log(budgetToBills(1744));
console.log(budgetToBills(1754));
console.log(budgetToBills(10));

console.log("\nNext test runs have bill arrays as arguments");
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
