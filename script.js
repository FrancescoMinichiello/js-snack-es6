/*
SNACK 1
1- creare un'array con il nome del tavolo
1.1 creare un array con gli invitati
2- inserire nell'array la lista degli invitati
(nome posto occupato)
3- print
*/




/*
const tableName = 'tavolo Vip';
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney',
    'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'
];

const placeCards = guests.map((g, i) => {
    return {
        tableName: tableName,
        guestName: g,
        place: i + 1
    };
});
console.log(placeCards);
*/





/*
SNACK 2
1 creare un array con il loro nome e farli
in maiuscolo con toUpperCase() 
2 creare un array per i voti superiori a 70
3 creare un'array con i voti che vanno da
70 a 120
*/


/*
const students = [
    { id: 213, name: "Marco della Rovere", grades: 78 },
    { id: 110, name: "Paola Cortellessa", grades: 96 },
    { id: 250, name: "Andrea Mantegna", grades: 48 },
    { id: 145, name: "Gaia Borromini", grades: 74 },
    { id: 196, name: "Luigi Grimaldello", grades: 68 },
    { id: 102, name: "Piero della Francesca", grades: 50 },
    { id: 120, name: "Francesca da Polenta", grades: 84 },
];
const upperName = students.map(student => student.name.toUpperCase());
console.log(upperName)

const over70 = students.filter(student => student.grades > 70);
console.log(over70)

const idOver120 = students.filter(student => student.id > 120);
console.log(idOver120)
*/


/*
Snack 3
 1 - dichiarare un array di oggetti
 2 - inserire nell'array 2 proprietà : nome / peso
 4 - stampare in console  
 */


/*
const bikes = [
   { name: "Wilier Zero SLR", weight: "6" },
   { name: "Orbea Orca M10iLTD PWR", weight: "9" },
   { name: "Look 795 Blade RS", weight: "7" },
   { name: "Cube Litening Air C:68X SLT", weight: "5" }
]

let lightBicycle = bikes[0];


//3 - creare un ciclo che gira tra gli oggetti

for (const bike of bikes) {
   if (bike.weight < lightBicycle) {
       lightBicycle = bike;
   }
}
const { name, weight } = lightBicycle;
console.log(`la bicicletta piu leggera è ${name}, pesa ${weight}kg`)
*/




/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e 
falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i 
cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.

*/


//Snack 4

//1 creo un array di oggetti di squadre di calcio
const squads = [
    {
        name: 'roma',
        points: 0,
        foulsImmediately: 0
    },
    {
        name: 'milan',
        points: 0,
        foulsImmediately: 0
    },
    {
        name: 'juventus',
        points: 0,
        foulsImmediately: 0
    },
    {
        name: 'italia',
        points: 0,
        foulsImmediately: 0
    },
    {
        name: 'argentina',
        points: 0,
        foulsImmediately: 0
    },
    {
        name: 'brasile',
        points: 0,
        foulsImmediately: 0
    },

]


//2 genero un numero random per assegnarlo ai punti e falli

const getRandomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let squad of squads) {
    squad.points = getRandomNumbers(1, 100);
    squad.foulsImmediately = getRandomNumbers(1, 100);
}


const squadFouls = squads.map((squad) => `${squad.points} ${squad.foulsImmediately}`);
console.log(squadFouls)
