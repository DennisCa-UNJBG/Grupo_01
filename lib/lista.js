class Nodo {
    info = 0;
    liga = null;
}

export class Lista {
    INICIO = null;
    canvas = null;

    inserta_inicio(DATO) {
        var P = this.INICIO;
        var Q = new Nodo();
        Q.info = DATO;
        Q.liga = P;
        P = Q;

        this.INICIO = P;
    }

    inserta_final(DATO) {
        var P = this.INICIO;

        var T = P;
        while (T.liga != null) {
        T = T.liga;
        }
        var Q = new Nodo();
        Q.info = DATO;
        Q.liga = null;
        T.liga = Q;

        this.INICIO = P;
    }

    dibujarNodosLog() {
        var tmp = this.INICIO;
        var cad = "";
        while (tmp != null) {
        cad += tmp.info + "::";
        tmp = tmp.liga;
        }
        console.log(cad);
    }

    dibujarNodos() {
        let canvas = this.canvas;
        let elemCanvas = canvas.getContext("2d");
        let iterador = this.INICIO;

        // coordenadas de los elementos del canvas
        let ejeX = 0;
        let ejeY = 0;
        let ancho = 50;
        let alto = 20;
        let columna = 0; // indicador de columna(1, 2, 3, ...)
        let newfila = 8; // indicador de nueva fila(1, 2, 3, ...)
        let temp = newfila;

        //limpiar el lienzo canva antes de dibujar
        elemCanvas.clearRect(0, 0, canvas.width, canvas.height);

        // dibujando elementos uno por uno
        while (iterador != null)
        {
            //Dibujar rectangulo
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "red";
            elemCanvas.fillRect(ejeX, ejeY, ancho, alto);
            //texto
            elemCanvas.fillStyle = "#ecd9d9"; //color de relleno
            elemCanvas.font = "bold 1.6rem serif";
            elemCanvas.textAlign = "center"; // centrar texto
            elemCanvas.fillText(iterador.info, ejeX + ancho*0.5, ejeY + alto*0.7); // centrar texto
            elemCanvas.closePath();

            //Dibujar flecha
            //linea de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho, ejeY + alto/2);
            elemCanvas.lineTo(ejeX + ancho*1.5, ejeY + alto/2);
            elemCanvas.closePath();
            elemCanvas.stroke();
            //cabeza de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho*1.5, ejeY + alto*0.2);
            elemCanvas.lineTo(ejeX + ancho*1.5 + alto*0.5, ejeY + alto*0.5);
            elemCanvas.lineTo(ejeX + ancho*1.5, ejeY + alto*0.8);
            elemCanvas.closePath();
            elemCanvas.fill();

            ejeX = (ancho * 1.7) * ++columna;
            iterador = iterador.liga;

            // nueva fila
            temp--;
            if(temp == 0)
            {
                temp = newfila;
                ejeY += 25;
                ejeX = 0;
                columna = 0;
            }
            //console.log(temp+" "+ejeX+" "+ejeY);
        }
    }
}
