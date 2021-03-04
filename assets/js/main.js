console.log("funzia");


var array = ["gino", "dino", "aldo"];

array.push(prompt("inserisci un nome", "caio"));


console.log(array);

var x = 0

var temp = ""

for (let i = 0; i < array.length; i++) {
	while(array[i-x]<array[i-x-1]){
		temp = array[i-x-1]
		array[i-x-1] = array[i-x]
		array[i-x] = temp 
		x++
	}
	x = 0
}
console.log(array)
