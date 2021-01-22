// --------------------------
// Opdracht 1
// --------------------------

const names = ["Henk", "Piet", "Fred", "Joop"];

// Verander de waardes van de array dusdanig dat er -"je" achter iedere naam wordt geplakt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]
console.log("Opdracht 1: ");
for (i=0; i < names.length; i++) {
    names[i] = names[i] + "je"
}
console.log(names)


// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];

// Verander de waardes van de array dusdanig dat iedere waarde met 3 vermenigvuldigd wordt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];

console.log("Opdracht 2: ");
numbers.forEach(async function(number) {
    console.log(number * 3);
})


// --------------------------
// Opdracht 3
// --------------------------
console.log("Opdracht 3: ");
const figures = [4, 6, 12, 34, 1];

// Verander de waardes van de array dusdanig dat er 3 bij iedere waarde wordt opgetelt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(figures) geeft: [ 7, 9, 15, 37, 4 ]

figures.forEach(async function(figure) {
    console.log(figure + 3);
})

