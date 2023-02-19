// Métodos para funções matemáticas

let num = 10.29;



// Method round(x)
function methodRound(numero){
    return Math.round(numero);
}
document.querySelector(".dp0").innerHTML = `Valor original: ${num} <br>Valor arrendondado: ${methodRound(num)}`;

// Method ceil()
function methodCeil(numero){
    return Math.ceil(numero);
}
document.querySelector(".dp1").innerHTML = `Valor original: ${num} <br>Valor arrendondado: ${methodCeil(num)}`;

// Method floor()
function methodFloor(numero){
    return Math.floor(numero);
}
document.querySelector(".dp2").innerHTML = `Valor original: ${num} <br>Valor arrendondado: ${methodFloor(num)}`;

// Method trunc()
function methodTrunc(numero){
    return Math.trunc(numero);
}
document.querySelector(".dp3").innerHTML = `Valor original: ${num} <br>Valor arrendondado: ${methodTrunc(num)}`;

// Method sign()
function methodSign(numero){
    return Math.sign(numero);
}
document.querySelector(".dp4").innerHTML = `Valor original: ${num} <br>retorno: ${methodSign(num)}`;

// Method pow(x, y)
function methodPow(num1,num2){
    return Math.pow(num1,num2);
}
document.querySelector(".dp5").innerHTML = `Valor: (10)²<br>Retorno do valor elevado: ${methodPow(10,2)}`;

// Method sqrt(x)
function methodSqrt(numero){
    return Math.sqrt(numero);
}
document.querySelector(".dp6").innerHTML = `Raiz de: 81<br>Retorno da raiz: ${methodSqrt(81)}`;

// Method random()
function methodRandom(){
    return Math.random();
}
document.querySelector(".dp7").innerHTML = `Número aleatório: ${methodFloor(methodRandom()* 11)}`;

// Method tostring
function methodToString(){
    return num.toString();
}
document.querySelector(".dp8").innerHTML = `Número convertido para uma string: ${methodToString()} (${typeof(methodToString())})`;


// Method toFixed

function methodToFixed(){
    return num.toFixed(0);
}
document.querySelector(".dp9").innerHTML = `Valor: ${num}<br>Número alterado: ${methodToFixed()}`;
