/**
 * Palidroma
 * 
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

// References
var userWord = prompt('Inserisci una parola').toLowerCase().trim();
var wordReverted = reverseWord(userWord);

// If statement per vedere se la parola è palindroma
if (userWord === wordReverted) {
    console.log('La tua parola "' + userWord + '" è palindroma!');
} else {
    console.log('La tua parola "' + userWord + '" non è palindroma :(');
}

/**
 * Prende in input una parola e la 'ribalta'
 * @param {string} word la parola inserita dall'utente
 * @returns la parola 'ribaltata'
 */

function reverseWord(word) {
    var rev = '';

    // Ciclo for partendo dalla fine per 'ribaltare' la parola
    for (var i = word.length - 1; i >= 0; i--) {

        // aggiungo ogni carattere dell'input a rev 'ribaltando' di fatto la parola
        rev += word[i];
    }

    return rev;
}


/**
 * Pari e Dispari
 * 
 * L’utente sceglie pari o dispari
 * e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */