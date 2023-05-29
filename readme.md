PROBLEMA: Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1- creo una funzione che genera un numero;
2- creo array vuoto da riempire con le bombe generate (n*16);
    2.1- generato il numero casuale:
    2.2-?SE il numero non è presente nell'array, viene incluso;
    2.3- :ALTRIMENTI proseguo;
3- l'utente prosegue nello scegliere le caselle;
    3.1- ?SE la casella cliccata è associata ad un numero presente nell'array bombe, questa cambia colore e blocca il click delle altre;
    3.2 - :ALTRIMENTI la casella si colora ma il gioco continua; 