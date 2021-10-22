const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");
//Botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//Funciones
let letras = [];
let numeros = [];
const fnA1 = () => {
    if(letras.length == 0 ){ letters.innerHTML += "A"; letras.push("A") }
    else{
        if(letras.length == 10 && numeros.length == 0){numbers.innerHTML += 1; numeros.push(1)}
        else{
            if(letras == 10) alert("Faltan números")
            else{alert("Faltan letras")}
        }
    }
};
const fnB2 = () => {
    if(letras.length == 1 ){ letters.innerHTML += "B"; letras.push("B")}
    else{
        if(letras.length == 10 && numeros.length == 1){numbers.innerHTML += 2; numeros.push(2)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnC3 = () => {
    if(letras.length == 2 ){ letters.innerHTML += "C"; letras.push("C")}
    else{
        if(letras.length == 10 && numeros.length == 2){numbers.innerHTML += 3; numeros.push(3)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnD4 = () => {
    if(letras.length == 3 ){ letters.innerHTML += "D"; letras.push("D")}
    else{
        if(letras.length == 10 && numeros.length == 3){numbers.innerHTML += 4; numeros.push(4)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnE5 = () => {
    if(letras.length == 4 ){ letters.innerHTML += "E"; letras.push("E")}
    else{
        if(letras.length == 10 && numeros.length == 4){numbers.innerHTML += 5; numeros.push(5)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnF6 = () => {
    if(letras.length == 5 ){ letters.innerHTML += "F"; letras.push("F")}
    else{
        if(letras.length == 10 && numeros.length == 5){numbers.innerHTML += 6; numeros.push(6)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnG7 = () => {
    if(letras.length == 6 ){ letters.innerHTML += "G"; letras.push("G")}
    else{
        if(letras.length == 10 && numeros.length == 6){numbers.innerHTML += 7; numeros.push(7)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnH8 = () => {
    if(letras.length == 7 ){ letters.innerHTML += "H"; letras.push("H")}
    else{
        if(letras.length == 10 && numeros.length == 7){numbers.innerHTML += 8; numeros.push(8)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnI9 = () => {
    if(letras.length == 8 ){ letters.innerHTML += "I"; letras.push("I")}
    else{
        if(letras.length == 10 && numeros.length == 8){numbers.innerHTML += 9; numeros.push(9)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnJ0 = () => {
    if(letras.length == 9 ){ letters.innerHTML += "J"; letras.push("J")}
    else{
        if(letras.length == 10 && numeros.length == 9){numbers.innerHTML += 0; numeros.push(0)}
        else{
            if(letras.length == 10) alert("Faltan números")
            else{ alert("Faltan letras")}
        }
    }
};

const fnCL = () => {
    letters.innerHTML = "";
};

const fnCN = () => {
    numbers.innerHTML = "";
};



//Eventos
a1.onclick = () => {fnA1()};
b2.onclick = () => {fnB2()};
c3.onclick = () => {fnC3()};
d4.onclick = () => {fnD4()};
e5.onclick = () => {fnE5()};
f6.onclick = () => {fnF6()};
g7.onclick = () => {fnG7()};
h8.onclick = () => {fnH8()};
i9.onclick = () => {fnI9()};
j0.onclick = () => {fnJ0()};
cl.onclick = () => {fnCL()};
cn.onclick = () => {fnCN()};



let botones = ["a1", "b2", "d3", "c4"]


for (const boton in botones) {
    `${botones[boton]}`.onclick = () => { alert("algo") }
}