//Problem 4
console.log("Problem 4 output\n\n");
//given
const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

//find average
//almost positive this can be done in a cool way with array.reduce(), but I would have to look it up as I don't remember exactly how it works

let total = 0;

array.forEach( (int) => {

    total += int;
    console.log(int, total);

});

console.log(total);

alert("Problem 4");
alert("Average is " + (total / array.length));
