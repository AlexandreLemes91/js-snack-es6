// jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

/* const scuderia = [
    {
        nome : "Beta",
        peso : 20,
    },{
        nome : "Gamma",
        peso : 10,
    },{
        nome : "Alfa",
        peso : 30,
    }
];
let bicileggera = scuderia[0];

for (let i = 1; i < scuderia.length; i++){
    let item = scuderia[i];
    if( item.peso < bicileggera.peso){
        bicileggera = item;
    };

};

console.log(bicileggera); */

/* ------------------------------------------------------------------------------------------------------ */

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const newSquadre = [];
const squadre = [
    {
        nome: "Rossi",
        punti: 0,
        falli: 0,
    },{
        nome: "Bianchi",
        punti: 0,
        falli: 0,
    },{
        nome: "Verdi",
        punti: 0,
        falli: 0,
    }
]

for ( let i=0; i < squadre.length; i++){
    let squadra = squadre[i];
    
    squadra.punti = randomNumber( 0 , 50 );
    squadra.falli = randomNumber( 0 , 50 );


    const {nome , falli} = squadra;
    newSquadre.push({nome,falli});
    //console.log(nome, falli);
}
console.log(squadre);
console.log(newSquadre);


/* FUNCTION */
function randomNumber (min, max){
    return Math.floor(Math.random()*( max-min + 1)) +min;
}