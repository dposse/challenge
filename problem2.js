//Problem 2

//given
const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

/*first attempt, works but bands[band] looks silly/unintuitive
for (var band in bands) {
  alert("I love " + bands[band]);
}*/

alert("Problem 2");

bands.forEach( (band) => {
  alert("I love " + band);
});
