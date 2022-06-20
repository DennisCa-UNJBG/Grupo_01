class Nodo {
  //publicos
    valor = 0;
    nextNodo = null;
}

class Lista {
    _canvas = null;
    _inicio = null;
    _ultimo = null;

    constructor(canvas) {
        this._canvas = canvas;
    }

    agregarNodo() {
        let result = document.getElementById("val-agregar").value;
        result = transformar(result);

        let nodo = new Nodo();
        nodo.valor = result;

        if (this._inicio == null) {
            this._ultimo = nodo;
            this._inicio = this._ultimo;
        } else {
            this._ultimo.nextNodo = nodo;
            this._ultimo = nodo;
        }

        this.dibujarNodosLog();
        this.dibujarNodos();
        // limpiar la caja de texto
        document.getElementById("val-agregar").value = "";
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

        //limpiar el lienzo canva antes de dibujar
        elemCanvas.clearRect(0, 0, canvas.width, canvas.height);

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
        newDato = transformar(newDato);
        let nodo = new Nodo();
        nodo.valor = newDato;

        nodo.nextNodo = this._inicio;
        this._inicio = nodo;

        this.dibujarNodosLog();
        this.dibujarNodos();
        // limpiar la caja de texto
        document.getElementById("val-insertar-inicio").value = "";
    }

    insertarFinal()
    {
        let newDato = document.getElementById("val-insertar-final").value;
        newDato = transformar(newDato);
        let nodo = new Nodo();
        nodo.valor = newDato;

        this._ultimo.nextNodo = nodo;
        this._ultimo = nodo;

        this.dibujarNodosLog();
        this.dibujarNodos();
        // limpiar la caja de texto
        document.getElementById("val-insertar-final").value = "";
    }

    eliminarInicio()
    {
        // no podemos eliminar si solo existe 1 nodo
        if(this._inicio.nextNodo != null)
        {
            //let temp = this._inicio;
            this._inicio = this._inicio.nextNodo;
            //delete lista[temp];

            this.dibujarNodosLog();
            this.dibujarNodos();
        }
        
        else{
            mostrarAlerta("Solo existe un nodo!!! no se puede procesar la solicitud");
        }
    }

    eliminarFinal()
    {
        let iterador = this._inicio;
        let temp = null;
        // no podemos eliminar si solo existe 1 nodo
        if(iterador.nextNodo != null)
        {
            while (iterador.nextNodo != null ) {
                temp = iterador;
                iterador = iterador.nextNodo;
            }
            //let temp2 = iterador;
            temp.nextNodo = null;
            this._ultimo = temp;
            //delete lista[temp2];

            this.dibujarNodosLog();
            this.dibujarNodos();
        }
        else{
            mostrarAlerta("Solo existe un nodo!!! no se puede procesar la solicitud");
        }
    }

    eliminarX()
    {
        let newDato = document.getElementById("val-eliminar-x").value;
        newDato = transformar(newDato);
        // limpiar la caja de texto
        document.getElementById("val-eliminar-x").value = "";
    }

    insertarAntesX()
    {
        let newDato = document.getElementById("val-insertar-antes").value;
        newDato = transformar(newDato);
        // limpiar la caja de texto
        document.getElementById("val-insertar-antes").value = "";
    }

    insertarDespuesX()
    {
        let newDato = document.getElementById("val-insertar-despues").value;
        newDato = transformar(newDato);
         // limpiar la caja de texto
        document.getElementById("val-insertar-despues").value = "";
    }

    eliminarAntesX()
    {
        let newDato = document.getElementById("val-eliminar-antes").value;
        newDato = transformar(newDato);
         // limpiar la caja de texto
        document.getElementById("val-eliminar-antes").value = "";
    }

    eliminarDespuesX()
    {
        let newDato = document.getElementById("val-eliminar-despues").value;
        newDato = transformar(newDato);
         // limpiar la caja de texto
        document.getElementById("val-eliminar-despues").value = "";
    }
}

window.lista = null;

function agregar() {
    let canvas = window.CANVAS;
    if (window.lista == null) {
        window.lista = new Lista(canvas);
        lista.agregarNodo();
        ocultarAlerta();
    }
    else
    {
        mostrarAlerta("Ya existe una lista, no puedes crear otra!!!");
    }
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
    ocultarAlerta();
}

function insertarInicio() {
    let canvas = window.CANVAS;
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.insertarInicio();
    }
    else{
        mostrarAlerta("No existe una lista disponible para agregar el nuevo nodo!!!");
    }
}

function insertarFinal() {
    let canvas = window.CANVAS;
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.insertarFinal();
    }
    else{
        mostrarAlerta("No existe una lista disponible para agregar el nuevo nodo!!!");
    }
}

function eliminarInicio()
{
    let canvas = window.CANVAS;
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.eliminarInicio();
    }
    else{
        mostrarAlerta("No existe una lista disponible para procesar la petición!!!");
    }
}

function eliminarFinal()
{
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.eliminarFinal();
    }
    else{
        mostrarAlerta("No existe una lista disponible para procesar la petición!!!");
    }
}


function eliminarX()
{}

function insertarAntesX()
{}

function insertarDespuesX()
{}

function eliminarAntesX()
{}

function eliminarDespuesX()
{}

function mostrarAlerta(mensaje) {
    element = document.getElementById('alerta');
    element.style.visibility = 'visible';
    document.getElementById('id-mensajes').textContent = mensaje;
}

function ocultarAlerta() {
    element = document.getElementById('alerta');
    element.style.visibility = 'hidden';
}

function transformar(valor)
{
    if(valor >= 1 && valor <= 100)
        return valor;

    return 0;
}

