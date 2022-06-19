class Nodo {
  //publicos
    valor = 0;
    nextNodo = null;
}
class Lista {
    _canvas = null;
    _inicio = null;
    _anterior = null;

    constructor(canvas) {
        this._canvas = canvas;
    }

    agregarNodo() {
        let result = document.getElementById("val-agregar").value;

        let nodo = new Nodo();
        nodo.valor = result;

        if (this._inicio == null) {
            this._anterior = nodo;
            this._inicio = this._anterior;
        } else {
            this._anterior.nextNodo = nodo;
            this._anterior = nodo;
        }

        this.dibujarNodosLog();
        this.dibujarNodos();
        //document.getElementById("val-agregar").value = "";
    }

    dibujarNodosLog()
    {
        let iterador = this._inicio;
        let cad = "";
        while (iterador != null) {
            cad += iterador.valor + " : ";
            iterador = iterador.nextNodo;
        }

        console.log(cad);
    }

    dibujarNodos()
    {
        let canvas = this._canvas;
        let elemCanvas = canvas.getContext("2d");
        let iterador = this._inicio;
        // coordenadas de los elementos del canvas
        let ejeX = 0;
        let ejeY = 0;
        let ancho = 30;
        let alto = 20;
        let columna = 0; // indicador de columna(1, 2, 3, ...)
        let fila = 0; // indicador de fila(1, 2, 3, ...)

        // dibujando elementos uno por uno
        while (iterador != null)
        {
            //Dibujar rectangulo
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "orangered";
            elemCanvas.fillRect(ejeX, ejeY, ancho, alto);
            //texto
            elemCanvas.fillStyle = "white";
            elemCanvas.font = "10px Arial";
            elemCanvas.fillText(iterador.valor, ejeX + alto/2, ejeY + 12);
            elemCanvas.closePath();

            //Dibujar flecha
            //linea de la flecha
            elemCanvas.beginPath();
            elemCanvas.moveTo(ejeX + ancho, ejeY + alto/2);
            elemCanvas.lineTo(ejeX + ancho + 20, ejeY + alto/2);
            elemCanvas.closePath();
            elemCanvas.stroke();
            //cabeza de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho + 20, ejeY + 5);
            elemCanvas.lineTo(ejeX + ancho + 20 + 10, ejeY + 10);
            elemCanvas.lineTo(ejeX + ancho + 20, ejeY + 15);
            elemCanvas.closePath();
            elemCanvas.fill();

            ejeX = (ancho * 2) * ++columna;
            iterador = iterador.nextNodo;
            // nueva fila
            fila++;
            if(fila == 5)
            {
                fila = 0;
                ejeY += 25;
                ejeX = 0;
                columna = 0;
            }
            console.log(fila+" "+ejeX+" "+ejeY);
        }
    }

    insertarInicio()
    {
        let newDato = document.getElementById("val-insertar-inicio").value;
        let nodo = new Nodo();
        nodo.valor = newDato;

        nodo.nextNodo = this._inicio;
        this._inicio = nodo;

        this.dibujarNodosLog();
        this.dibujarNodos();
    }

    insertarFinal(){}
    eliminarInicio(){}
    eliminarFinal(){}
}

window.lista = null;

function agregar() {
    let canvas = window.CANVAS;
    if (window.lista == null) {
        window.lista = new Lista(canvas);
    }
    lista.agregarNodo();
}

function cargar() {
    let canvas = document.getElementById("dibujarNodos");
    window.CANVAS = canvas;
    /*
    let elemCanvas = canvas.getContext('2d');
    let elemCanvas1 = canvas.getContext('2d');

    elemCanvas.fillStyle = "rgb(200,0,0)";
    elemCanvas.fillRect (10, 10, 55, 30);

    elemCanvas1.fillStyle = "rgba(0, 0, 200, 0.5)";
    elemCanvas1.fillRect (80, 30, 55, 30);
        */
}

function insertarInicio() {
    let canvas = window.CANVAS;
    if(window.lista != null)
    {
        lista.insertarInicio();
    }
}