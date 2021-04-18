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

/* const newSquadre = [];
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





/* jsnack 3
* Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
* La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter 
*/


const insieme = ["paolo", "luca", "giovanni", "susanna", "leonardo", "francesca"];
let newInsieme = [];

let min = parseInt( prompt( "tra 0 a " + (insieme.length - 1) ) );
while( isNaN(min) ||  min < 0 || min > (insieme.length - 1 )){
    min = parseInt( prompt( "tra 0 a " + (insieme.length - 1) ) );
} 
let max = parseInt( prompt( "tra " + min + " a " + (insieme.length - 1) ) );
while(isNaN(max) ||  max < min || max > (insieme.length - 1)){
    max = parseInt( prompt( "tra " + min + " a " + (insieme.length - 1) ) );
}

const filterInsieme = insieme.filter((e, ind) =>{
    return min <= ind && ind <= max
});

console.log(filterInsieme);

/* insieme.forEach((e, ind) =>{
    if( min <= ind && ind <= max ){
        newInsieme.push(e);
    }
}); */


/* function filtro (array, min, max){
    for(var i=0; i < array.length; i++ ){
        let item = array[i];
        
        if( min <= i && i <= max ){
            newInsieme.push(item);
        }
    }
}



filtro(insieme, min, max); */

console.log(newInsieme);

/**
 * jsnack 4
 * Dato un'array con dei capi d'abbigliamento
 * oggetti che contengono informazioni su nome modello, tipologia e colore
 * si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
 * Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)
 */

const abiti = [
    {
        modello: "amarello", 
        tipo: "giacca",
        colore: "giallo",  
    },{
        modello: "Sinza", 
        tipo: "maglione",
        colore: "grigio",  
    },{
        modello: "vermelho", 
        tipo: "scarpe",
        colore: "rosso",  
    },
];

const abitiPriced = abiti.map( (e) =>{
    return{
        ...e,
        prezzo: "€" + randomNumber(1,100),
    }
});

console.log(abitiPriced);
console.log(abiti);