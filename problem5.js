//Problem 5
//this is O(n^2), goes through all items twice in worst case (if all items are in array only once)
//depending on how .filter/.reduce is implemented, probably has better big o
console.log("\n\nProblem 5 output\n\n");
//given - renamed to array2 since array used in problem4.js
const array2 = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];

function getMostAndLeastFrequentItems(input) {

    //make a map, letter: frequency
    let frequency = new Map();
    let most = '';
    let least = '';

    input.forEach( (element) => {

        if ( frequency.size == 0 || !frequency.has(element) )
            frequency.set(element,1);
        else
            frequency.set(element, (frequency.get(element) + 1));

        console.log(element);
        console.log(frequency);

    });

    for (let x of frequency) {

        //x[0] is key, x[1] is value of map object
        console.log(x[0], x[1]);

        //if first item
        if ( most == '' )
            most = x[0];
        if ( least == '' )
            least = x[0];

        if ( x[1] > frequency.get(most) )
            most = x[0];
        if ( x[1] < frequency.get(least) )
            least = x[0];

    }

    return "The most frequent item is: " + most + ". The least frequent item is : " + least + ".";

}

//"main"
alert("Problem 5");
alert(getMostAndLeastFrequentItems(array2));
