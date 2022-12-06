var numeros = [45,16,28]; //salario
var numeros2 = [25,12,5]; //despesas
var numeros3 = [];

for ( var i = 0; i < numeros.length; i++ ){
    numeros3.push((numeros[i] - numeros2[i]));
}

console.log(numeros3);


var max = numeros3.reduce(function(a,b){
    return Math.max(a,b);
});

console.log(max);