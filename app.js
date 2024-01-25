// Ejercicio 01


function invertirArreglo() {
    var arregloInput = document.getElementById("arregloInput").value;
    var arreglo = arregloInput.split(',').map(Number);
    var arregloNuevo = arreglo.reverse();
    alert("Arreglo original: " + arregloInput + "\nArreglo invertido: " + arregloNuevo);
}


// Ejercicio 02

function sumararreglo() {
    var arreglo2 = document.getElementById("arreglo2").value;
    var arreglofinal = arreglo2.split(',').map(Number);
    var suma = 0;

    for (var i = 0; i < arreglofinal.length; i++) {
        suma += arreglofinal[i];
    }

    alert("La suma de los digitos puestos serian, " + suma + "");
}


// Ejercicio 03

function arreglomayor() {
    var arreglo3 = document.getElementById("arreglo3").value;
    var arreglofinal2 = arreglo3.split(',').map(Number);
    var mayor = arreglofinal2[0];

    for (var i = 1; i < arreglofinal2.length; i++) {
        if (arreglofinal2[i] > mayor) {
            mayor = arreglofinal2[i];
        }
    }
    alert("El número mayor es, " + mayor + "");
}


// Ejercicio 04


function arreglopar2() {
    var arreglo4 = document.getElementById("arreglo4").value;
    var arreglofinal3 = arreglo4.split(',').map(Number);

    var arregloPar = [];

    for (var i = 0; i < arreglofinal3.length; i++) {
        if (arreglofinal3[i] % 2 === 0) {
            arregloPar.push(arreglofinal3[i]);
        }
    }
    alert("Arreglo original: " + arreglofinal3 + "\nArreglo par: " + arregloPar);
}

// Ejercicio 05

function libreria() {
    const library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true,
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true,
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false,
        },
    ];

    for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus === true) {
            alert(`Libro: ${library[i].title}, Autor: ${library[i].author}`);
        }
    }

}