// DELCARAÇÃO DE UMA FUNÇÃO

function nomeDaFuncao(){
    console.log("Thiago Barreto Clemente")
}
nomeDaFuncao();

// Uma função JavaScript também pode ser definida usando uma expressão

const helloWorld = function(){
    console.log("Hello world!");
}
helloWorld();


// Arrow Functions
const arrowFunction = () =>{
    console.log("Essa é uma arrow function");
};
arrowFunction();


// PROPRIEDADE LENGHT
const propLength = (nome) =>{
    document.querySelector(".df1").innerHTML = `String: Thiago Barreto Clemente <br>${nome.length} caracteres.`;
}

// FUNÇÃO DE CALLBACK

function exibirCallback(callSuccess, callError) {
    if(false){
        callSuccess(`<p>- Essa é uma callback de sucesso</p>`);
    }else{
        callError(`<p>- Essa é uma callback de erro</p>`);
    }
}

let callBSucesso = function(descricao){
    document.querySelector(".df2").innerHTML = descricao;
}

let callBErro = function(erro){
    document.querySelector(".df2").innerHTML = erro;
};

propLength("Thiago Barreto Clemente");
exibirCallback(callBSucesso, callBErro);


// FUNCÇÕES NATIVAS PARA MANIPULAÇÃO DE STRING'S

// Método SLICE


const text = `Essa é uma função que representa manipuçação de strings com
o método Slice / Substring / Substr.`;
document.querySelector(".df3").innerHTML = text;


function methodSlice(texto){
    return texto.slice(0, 22);
}
document.querySelector(".df4").innerHTML = methodSlice(text);

// Método SUBTRING

function methodSubstring(texto){
    return texto.substring(22, 61);
}
document.querySelector(".df5").innerHTML = methodSubstring(text);

// Método SUBSTR
function methodSubstr(texto){
    return texto.substr(61);
}
document.querySelector(".df6").innerHTML = methodSubstr(text);


// Método REPLACE 
const textReplace = "Thiago Barreto Clemente.";
document.querySelector(".df7").innerHTML = textReplace;
function methodReplace(texto){
    return textReplace.replace("Clemente","Yami");
}
document.querySelector(".df8").innerHTML = methodReplace(textReplace);


// Método toUpperCase| toLowerCase
const textLower = "esse é um texto em letras minúsculas";
const textUpper = "ESSE É UM TEXTO EM LETRAS MAIÚSCULAS";
document.querySelector(".df9").innerHTML = textLower;
document.querySelector(".df10").innerHTML = textUpper;

function methodLower(texto) {
    return texto.toLowerCase();
}
document.querySelector(".df11").innerHTML = methodLower(textUpper);

function methodUpper(texto) {
    return texto.toUpperCase();
}
document.querySelector(".df12").innerHTML = methodUpper(textLower);


// Método CONCAT
const textCont1 = "Esse método tem a função de";
const textCont2 = " juntar duas ou mais strings gerando uma nova strings.";

document.querySelector(".df13").innerHTML = textCont1;
document.querySelector(".df14").innerHTML = textCont2;

function methodContact (texto1,texto2){
    return textCont1.concat(texto2);
}
document.querySelector(".df15").innerHTML = methodContact(textCont1,textCont2);

// Método charAt
const textCharAt = "Retorna o caractere em um índice especificado";
document.querySelector(".df16").innerHTML = textCharAt;
function methodCharAt(caracter,index){
    return caracter.charAt(index);
}
document.querySelector(".df17").innerHTML = methodCharAt(textCharAt,0);

// Método Split

const textSplit = "Convertendo string em um array";
document.querySelector(".df18").innerHTML = textSplit;

function methodSplit(texto){
    return texto.split(" ");
}
document.querySelector(".df19").innerHTML = methodSplit(textSplit);


// MÈTODOS SEARCH(BUSCA)

// Método indexOf 

const textindexOf = "Método pega o index da primeira ocorrência especificada.";
document.querySelector(".df20").innerHTML = textindexOf;

function methodIndexOf(texto){
    return texto.indexOf("pega");
}
document.querySelector(".df21").innerHTML = `Retorna o índice da primeira ocorrência: (pega): ${methodIndexOf(textindexOf)}º posição`;


// Método search

const textSearch = "O método search não é igual ao método indexOf.";
document.querySelector(".df22").innerHTML = textSearch;

function methodSearch(texto){
    return texto.search("igual");
}
document.querySelector(".df23").innerHTML = `Retorna a posição da string (igual): ${methodSearch(textSearch)}º posição`

// Método match

const textMatch = "O método match retorna um array.";
document.querySelector(".df24").innerHTML = textMatch;

function methodMatch(texto){
    return texto.match("match");
}
document.querySelector(".df25").innerHTML = `Retorna o resultado da comparação de uma string com uma string: ${methodMatch(textMatch)}`


// Método includes

const textIncludes = "O método includes retornar true se existir a string";
document.querySelector(".df26").innerHTML = textIncludes;

function methodIncludes(texto){
    return texto.includes("existir");
}
document.querySelector(".df27").innerHTML = `Retornar true se existir a string especificada(existir) : ${methodIncludes(textIncludes)}`;




