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
 3 - creare un ciclo che gira tra gli oggetti
 4 - stampare in console  
 */

const bikes = [
    { name: "Wilier Zero SLR", weight: "6,8kg" },
    { name: "Orbea Orca M10iLTD PWR", weight: "6,64kg" },
    { name: "Look 795 Blade RS", weight: "7kg" },
    { name: "Cube Litening Air C:68X SLT", weight: "6,6kg" }
]

let lightBicycle = bikes[0];
console.log(lightBicycle)





