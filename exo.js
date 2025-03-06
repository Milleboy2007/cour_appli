//Exo 1
const nums = [1, 2, 3, 4, 5];
let news = nums.map(x => x * x);
console.log(news);

//Exo 2
const names = ["alice", "bob", "charlie", "danielle"];
let upperCase = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log(upperCase);

//Exo 3
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
let withP = pokemon.map(name => `<p>${name}</p>`);
console.log(withP);