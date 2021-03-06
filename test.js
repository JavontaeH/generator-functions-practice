// generator function that iterates through reindeer array and returns a color for each reindeer to be used later in a factory function to build reindeer object.
const colorGen = function* () {
  const reindeer = [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen",
  ];
  const colors = [
    "Blue",
    "Red",
    "Orange",
    "Purple",
    "Goldenrod",
    "Aquamarine",
    "Olive",
    "Azure",
    "Fuchsia",
    "Chocolate",
    "Salmon",
    "Amaranth",
  ];

  for (let i = 0; i < reindeer.length; ) {
    let reindeerColor = colors[i];
    i++;
    yield reindeerColor;
  }
};

// console logging the result of the generator should loop through colors until it runs out of reindeer to assign too, last console.log is an expected undefinied with done:true
const generatorObject = colorGen();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
