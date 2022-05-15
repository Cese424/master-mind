//css dos botões
for (let i = 0; i < 36; i++) {
    document.getElementById("gb" + i).style.backgroundColor = "gray"

    if (document.getElementById("gb" + i).style.backgroundColor = "gray") {
        document.getElementById("gb" + i).onmouseover = function () {
            mouse_over("gb" + i)
        }
        document.getElementById("gb" + i).onmouseout = function () {
            mouse_out("gb" + i)
        }
    }
}

function mouse_over(n) {
    document.getElementById(n).style.filter = "brightness(80%)"
}

function mouse_out(n) {
    document.getElementById(n).style.filter = "brightness(100%)"
}

//array shuffler
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

//variáveis
var array_de_cores = ["blue", "red", "green", "orange", "yellow", "purple", "pink", "cyan", "brown"];
var cores_teclado = ["blue", "red", "green", "orange", "yellow", "purple", "pink", "cyan", "brown"];
shuffle(array_de_cores)

var array_senha = ["", "", "", ""];

array_senha[0] = array_de_cores[0];
shuffle(array_de_cores)

array_senha[1] = array_de_cores[0];
shuffle(array_de_cores)

array_senha[2] = array_de_cores[0];
shuffle(array_de_cores)

array_senha[3] = array_de_cores[0];

console.log(array_senha)
//macros
function id(n) {
    return document.getElementById(n)
}

function keyboard_color(n) {
    id("kb" + n).style.backgroundColor = cores_teclado[n]
}

//css?
keyboard_color(0)
keyboard_color(1)
keyboard_color(2)
keyboard_color(3)
keyboard_color(4)
keyboard_color(5)
keyboard_color(6)
keyboard_color(7)
keyboard_color(8)

//jogo
var button_column = 1
var button_line = 1

var array_de_tentativas = ["error", "error", "error", "error"]


function coordenadas_para_elemento(col, lin) {
    x = (lin - 1) * 4 + col - 1
    return document.getElementById("gb" + x)
}

function button_selected(n) {
    button_column = n

}

function color_painter(n) {
    coordenadas_para_elemento(button_column, button_line).style.backgroundColor = id("kb" + n).style.backgroundColor;
    verificator(button_column - 1)

    if (button_column < 4) {
        button_column = button_column + 1
    } else {
        button_column = null
    }
}

function verificator(n) {
    if (coordenadas_para_elemento(button_column, button_line).style.backgroundColor == array_senha[n]) {
        array_de_tentativas[n] = "✓"
    } else if (coordenadas_para_elemento(button_column, button_line).style.backgroundColor != array_senha[n] && (coordenadas_para_elemento(button_column, button_line).style.backgroundColor == array_senha[0] || coordenadas_para_elemento(button_column, button_line).style.backgroundColor == array_senha[1] || coordenadas_para_elemento(button_column, button_line).style.backgroundColor == array_senha[2] || coordenadas_para_elemento(button_column, button_line).style.backgroundColor == array_senha[3])) {
        array_de_tentativas[n] = "?"
    } else if (coordenadas_para_elemento(button_column, button_line).style.backgroundColor != array_senha[n]) {
        array_de_tentativas[n] = "X"
    };
}

function enter() {
    if (coordenadas_para_elemento(1, button_line).style.backgroundColor != "gray" && coordenadas_para_elemento(2, button_line).style.backgroundColor != "gray" && coordenadas_para_elemento(3, button_line).style.backgroundColor != "gray" && coordenadas_para_elemento(4, button_line).style.backgroundColor != "gray") {

        coordenadas_para_elemento(1, button_line).innerHTML = array_de_tentativas[0]
        coordenadas_para_elemento(1, button_line).onclick = null
        coordenadas_para_elemento(2, button_line).innerHTML = array_de_tentativas[1]
        coordenadas_para_elemento(2, button_line).onclick = null
        coordenadas_para_elemento(3, button_line).innerHTML = array_de_tentativas[2]
        coordenadas_para_elemento(3, button_line).onclick = null
        coordenadas_para_elemento(4, button_line).innerHTML = array_de_tentativas[3]
        coordenadas_para_elemento(4, button_line).onclick = null

        array_de_tentativas = ["error", "error", "error", "error"]

        if (coordenadas_para_elemento(1, button_line).style.backgroundColor == array_senha[0] && coordenadas_para_elemento(2, button_line).style.backgroundColor == array_senha[1] && coordenadas_para_elemento(3, button_line).style.backgroundColor == array_senha[2] && coordenadas_para_elemento(4, button_line).style.backgroundColor == array_senha[3]) {
            winner()
        }
        button_line = button_line + 1, button_column = 1;
    } else {
        document.getElementById("enter").style.backgroundColor = "rgb(178, 20, 16)"
        document.getElementById("enter").disabled = true
        setTimeout(function () {
            document.getElementById("enter").style.backgroundColor = "rgb(170, 170, 170)", document.getElementById("enter").disabled = false
        }, 500);
    }
}

function winner() {
    id("keyboard").style.visibility = "hidden"
    id("winner").innerHTML = "Você venceu!!!"
}