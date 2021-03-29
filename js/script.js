/**
 * Palidroma
 * 
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

// References
var palindrome = document.getElementById('palindrome');
var word = document.getElementById('user-word');
var pal = document.getElementById('pal');

palindrome.addEventListener('click', function() {
    // References
    do {
        var userWord = prompt('Inserisci una parola');
    } while ( !isNaN(userWord) || userWord === null );
    var wordReverted = reverseWord(userWord);

    // Stampo la parola inserita
    word.innerHTML = userWord;

    // If statement per vedere se la parola è palindroma
    if (userWord === wordReverted) {
        pal.innerHTML = 'La tua parola, "' + userWord + '", è palindroma!';
    } else {
        pal.innerHTML = 'La tua parola, "' + userWord + '", non è palindroma :(';
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

// References
var pariDispari = document.getElementById('even-odd');
var choice = document.getElementById('choice');
var usNum = document.getElementById('us-num');
var pcNum = document.getElementById('pc-num');
var sum = document.getElementById('sum');
var result = document.getElementById('result');

pariDispari.addEventListener ('click', function() {
    // References
    do {
        var evenOddUser = prompt('Scegli pari o dispari');
    } while ( (evenOddUser != 'pari') && (evenOddUser != 'dispari') || evenOddUser === null);

    
    do {
        var userNumber = parseInt( prompt('Scegli un numero da 1 a 5') );
    } while ( isNaN(userNumber) || userNumber < 1 || userNumber > 5 || userNumber === null);

    // Settings
    var randNumb = pcRandomNumber(1, 5);
    var finalNum = userNumber + randNumb;
    var finalEvenOdd = evenOdd(finalNum);

    // stampo i vari dati
    choice.innerHTML = evenOddUser;
    usNum.innerHTML = userNumber;
    pcNum.innerHTML = randNumb;
    sum.innerHTML = finalNum;


    // stampo il risultato
    if (finalEvenOdd === evenOddUser) {
        result.innerHTML ='Complimenti, il risultato è ' + finalEvenOdd + '. HAI VINTO!!';
    } else {
        result.innerHTML ='Mi dispiace, il risultato è ' + finalEvenOdd + '. Hai perso :(';
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