let pantalla = document.getElementById("pantalla");

function insertar(valor) {
    let err = pantalla.value;

    if (err === "Error") {
        pantalla.value = valor;
        pantalla.scrollLeft = pantalla.scrollWidth;
        return;
    }

    const operadores = ['+', '-', '*', '/'];
    const ultimo = pantalla.value.slice(-1);

    if (operadores.includes(ultimo) && operadores.includes(valor)) {
        return;
    }

    if (valor === "." && ultimo === ".") {
        return;
    }

    pantalla.value += valor;
    pantalla.scrollLeft = pantalla.scrollWidth;
}

function limpiar() {
    pantalla.value = "";
}

function borrar() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    try {
        
        let resultado = eval(pantalla.value);

        
        if (!isFinite(resultado) || isNaN(resultado)) {
            throw new Error("Resultado inválido");
        }

        pantalla.value = Math.round(resultado * 1000) / 1000; //redondeamos(3)
        pantalla.scrollLeft = pantalla.scrollWidth;

    } catch (error){
        pantalla.value = "Error";
        // console.log(error.message);
    }
}
