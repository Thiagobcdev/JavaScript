// DECLARAÇÃO DA DATA

const data = new Date()

// Method get and set fullyear

function getFullYear(){
    return data.getFullYear();
}
document.querySelector(".dt0").innerHTML = `Ano: ${getFullYear()}`;

// Method get and set month

function getMonth(){
    return data.getMonth()+1;
}
document.querySelector(".dt1").innerHTML = `Mês: ${getMonth()}`;

// Method get and set month

function getDate(){
    return data.getDate();
}
document.querySelector(".dt2").innerHTML = `Dia: ${getDate()}`;

// Method get and set month

function getDay(){
    return data.getDay();
}
document.querySelector(".dt3").innerHTML = `Dia da semana: ${getDay()} = Domingo`;


// Method get and set Hours
function getHours(){
    return data.getHours();
}
document.querySelector(".dt4").innerHTML = `Horas: ${getHours()}`

// Method get and set Minutes
function getMinutes(){
    return data.getMinutes();
}
document.querySelector(".dt5").innerHTML = `Minutos: ${getMinutes()}`

// Method get and set Seconds
function getSeconds(){
    return data.getSeconds();
}
document.querySelector(".dt6").innerHTML = `Segundos: ${getSeconds()}`


// Method get and set Milliseconds
function getMilliseconds(){
    return data.getMilliseconds();
}
document.querySelector(".dt7").innerHTML = `Milessegundos: ${getMilliseconds()}`






