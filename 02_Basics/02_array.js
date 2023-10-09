const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //concate method
console.log(all_new_heros);

console.log(Array.isArray("Nimisha"))
console.log(Array.from('Nimisha'));             //convert in array
console.log(Array.from({name: "Nimisha"}));     // give empty array


let score1 = 100
let score2 = 200
let score3 = 300
 console.log(Array.of(score1, score2, score3));

 //explore is,of,from array