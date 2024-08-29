/*
SNACK 1
1- creare un'array con il nome del tavolo
1.1 creare un array con gli invitati
2- inserire nell'array la lista degli invitati
(nome posto occupato)
3- print
*/

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