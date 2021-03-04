console.log("funzia");

//l'array iniziale 
var array = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

//l'inserimento del proprio cognome e la trasformazione della prima lettera in maiuscola(necessario per il corretto funzionamento del progetto)
var mySecondName = prompt("Inserisci un nome. ATTENZIONE: la prima lettera deve essere maiuscola", "Caio");
var secondName = mySecondName.charAt(0).toUpperCase() + mySecondName.slice(1);

//inserimeto del cognome nell'arrey e stampa del array prima del ciclo
array.push(secondName);
console.log(array);

//variabili che servono all'interno del for per il corretto unzionamento
var x = 0
var temp = ""

//for che inizia i ciclo per quanto l'arrey è lungo
for (let i = 0; i < array.length; i++) {
	//while che controlla se il cognome precedente è "maggiore" di quello attuale, nel caso la condizione sia vera entra nel for
	while(array[i-x]<array[i-x-1]){
		//uso la variabile temporanea(temp) per conservare il dato che poi andro a sostituire nel arrey
		temp = array[i-x-1]
		//sostituzione effettiva dei dati
		array[i-x-1] = array[i-x]
		array[i-x] = temp 
		//aggiornamento della x per fare in modo che non solo venga sostituito il cognome con quello precedente ma anche che questa operazione si ripeta finche il cognome non arriva nella posizione ideale
		x++
	}
	//reset della variabile x in modo che possa essere riutilizzata nel while
	x = 0
}
console.log(array)
//comprensione del attuale posizione del cognome inserito all'interno dell'array
var numberOfLastSecondName = array.indexOf(secondName)+1;

//scrittura all'interno del html dei risultati ottenuti
document.getElementById("numberOfLastSecondName").innerHTML = numberOfLastSecondName;	
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
	document.getElementById("array").innerHTML += "<li>"+ array[i]+ "</li>";	
}
