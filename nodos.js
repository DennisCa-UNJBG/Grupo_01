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
            elemCanvas.fillStyle = "black"; //color de relleno
            elemCanvas.font = "bold 1.6rem serif";
            elemCanvas.textAlign = "center"; // centrar texto
            elemCanvas.fillText(iterador.valor, ejeX + ancho*0.5, ejeY + alto*0.7); // centrar texto
            elemCanvas.shadowColor = "#4e4534"; // sombra del texto
            elemCanvas.shadowBlur = 4; // tamaño de sombra
            elemCanvas.closePath();

            //Dibujar flecha
            //linea de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
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

    insertarInicio(newDato)
    {
        let nodo = new Nodo();
        nodo.valor = newDato;

        nodo.nextNodo = this._inicio;
        this._inicio = nodo;

        this.dibujarNodosLog();
        this.dibujarNodos();
        // limpiar la caja de texto
        document.getElementById("val-insertar-inicio").value = "";
    }

    insertarFinal(newDato)
    {
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

    buscar(dato)
    {
        let iterador = this._inicio;
        let resp = [null, null, null];//[anterior, actual, siguiente];
        resp[0] = iterador;
        resp[1] = iterador;
        resp[2] = iterador.nextNodo;

        while (iterador.nextNodo != null )
        {
            if(iterador.valor == dato)
                break;

            resp[0] = iterador;
            iterador = iterador.nextNodo;
            resp[1] = iterador;
            if(iterador.nextNodo != null)
                resp[2] = iterador.nextNodo;
        }

        if(iterador.valor == dato)
            return resp;
        else
            resp[1] = null;

        return resp;
    }

    eliminarX()
    {
        let dato = document.getElementById("val-eliminar-x").value;
        dato = transformar(dato);

        if(this._inicio.valor == dato)
            this.eliminarInicio();
        else if(this._ultimo.valor == dato)
            this.eliminarFinal();
        else
        {
            let busqueda = this.buscar(dato);
            if(busqueda[1] == null)
                mostrarAlerta("El elemento proporcionado no existe en la lista actual.");
            else
            {
                busqueda[0].nextNodo = busqueda[2];

                this.dibujarNodosLog();
                this.dibujarNodos();
            }
        }

        // limpiar la caja de texto
        document.getElementById("val-eliminar-x").value = "";
    }

    insertarAntesX()
    {
        let dato1 = document.getElementById("val-insertar-antes1").value;
        dato1 = transformar(dato1);
        let dato2 = document.getElementById("val-insertar-antes2").value;
        dato2 = transformar(dato2);

        if(this._inicio.valor == dato1)
            this.insertarInicio(dato2);
        else
        {
            let busqueda = this.buscar(dato1);
            if(busqueda[1] == null)
                mostrarAlerta("El elemento proporcionado no existe en la lista actual.");
            else
            {
                let newNodo = new Nodo();
                newNodo.valor = dato2;
                newNodo.nextNodo = busqueda[1];
                busqueda[0].nextNodo = newNodo;

                this.dibujarNodosLog();
                this.dibujarNodos();
            }
        }

        // limpiar la caja de texto
        document.getElementById("val-insertar-antes1").value = "";
        document.getElementById("val-insertar-antes2").value = "";
    }

    insertarDespuesX()
    {
        let dato1 = document.getElementById("val-insertar-despues1").value;
        dato1 = transformar(dato1);
        let dato2 = document.getElementById("val-insertar-despues2").value;
        dato2 = transformar(dato2);

        if(this._ultimo.valor == dato1)
            this.insertarFinal(dato2);
        else
        {
            let busqueda = this.buscar(dato1);
            if(busqueda[1] == null)
                mostrarAlerta("El elemento proporcionado no existe en la lista actual.");
            else
            {
                let newNodo = new Nodo();
                newNodo.valor = dato2;
                newNodo.nextNodo = busqueda[2];
                busqueda[1].nextNodo = newNodo;

                this.dibujarNodosLog();
                this.dibujarNodos();
            }
        }
         // limpiar la caja de texto
        document.getElementById("val-insertar-despues1").value = "";
        document.getElementById("val-insertar-despues2").value = "";
    }

    eliminarAntesX()
    {
        let dato = document.getElementById("val-eliminar-antes").value;
        dato = transformar(dato);

        let busqueda = this.buscar(dato);
        if(busqueda[1] == null)
            mostrarAlerta("El elemento proporcionado no existe en la lista actual.");
        else if(this._inicio.valor == dato)
            mostrarAlerta("No se puede eliminar, no existe ningun Nodo anterior");
        else
        {
            if(this._inicio.valor == busqueda[0].valor)
                this.eliminarInicio(dato);
            else
                this.eliminarX(busqueda[0].valor);
        }

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

    eliminarLista()
    {
        this._inicio = null;
        this._ultimo = null;
        this.dibujarNodosLog();
        this.dibujarNodos();
        this._canvas = null;
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
        let newDato = document.getElementById("val-insertar-inicio").value;
        newDato = transformar(newDato);
        lista.insertarInicio(newDato);
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
        let newDato = document.getElementById("val-insertar-final").value;
        newDato = transformar(newDato);
        lista.insertarFinal(newDato);
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
{
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.eliminarX();
    }
    else{
        mostrarAlerta("No existe una lista disponible para procesar la petición!!!");
    }
}

function insertarAntesX()
{
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.insertarAntesX();
    }
    else{
        mostrarAlerta("No existe una lista disponible para procesar la petición!!!");
    }
}

function insertarDespuesX()
{
    
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.insertarDespuesX();
    }
    else{
        mostrarAlerta("No existe una lista disponible para procesar la petición!!!");
    }
}

function eliminarAntesX()
{
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.eliminarAntesX();
    }
    else{
        mostrarAlerta("No existe una lista disponible para procesar la petición!!!");
    }
}

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

function eliminarLista()
{
    if(window.lista != null)
    {
        ocultarAlerta();
        lista.eliminarLista();
        window.lista = null;
        mostrarAlerta("La lista fue eliminada correctamente!!!");
    }
    else{
        mostrarAlerta("No existe una ninguna lista que pueda ser eliminada.");
    }
}
