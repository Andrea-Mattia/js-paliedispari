/**
 * Palidroma
 * 
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

var palindrome = document.getElementById('palindrome');

palindrome.addEventListener('click', function() {
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
});


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

var pariDispari = document.getElementById('even-odd');

pariDispari.addEventListener ('click', function() {
    // References
    var evenOddUser = prompt('Scegli pari o dispari').toLowerCase().trim();
    var userNumber = parseInt( prompt('Scegli un numero da 1 a 5') );

    // Settings
    var randNumb = pcRandomNumber(1, 5);
    var finalNum = userNumber + randNumb;
    var finalEvenOdd = evenOdd(finalNum);

    // stampo i numeri
    console.log('Numero scelto dall\' utente: ' + userNumber);
    console.log('Numero generato per il PC: ' + randNumb);
    console.log('La somma tra i due numeri è: ' + finalNum);


    // stampo il risultato
    if (finalEvenOdd === evenOddUser) {
        console.log('Complimenti, il risultato è ' + finalEvenOdd + '. HAI VINTO!!');
    } else {
        console.log('Mi dispiace, il risultato è ' + finalEvenOdd + '. Hai perso :(');
    }

    // FUNZIONI

    /**
     * Ritorna pari o dispari in base al numero inserito
     * @param {*} num il numero da analizzare
     */
    function evenOdd(num) {
        // verifico se il numero è pari o Dispari
        if (num % 2 === 0) {
            return 'pari';
        }

        return 'dispari';
    }

    /**
     * Genera un numero random da un minimo ad un massimo
     * @param {number} min numero minimo
     * @param {number} max numero massimo 
     * @returns un numero random tra i parametri inseriti
     */
    function pcRandomNumber(min, max) {
        var rand = Math.floor( Math.random() * (max - min + 1) ) + min;
        return rand;
    }
});