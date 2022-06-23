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
        var canvas = this.canvas;
        var ctx = canvas.getContext("2d");
        var tmp = this.INICIO;

        var x = 0;
        var y = 0;
        var ctd = 0;
        while (tmp != null) {
        //Dibujar rectangulo
        ctx.beginPath();
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(x, y, 55, 30);
        //texto
        ctx.fillStyle = "white";
        ctx.font = "15px Arial";
        ctx.fillText(tmp.info, x + 20, y + 20);
        ctx.closePath();

        //Dibujar flecha
        //linea de la flecha
        ctx.beginPath();
        ctx.moveTo(x + 55, y + 15);
        ctx.lineTo(x + 55 + 20, y + 15);
        ctx.closePath();
        ctx.stroke();
        //cabeza de la flecha
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.moveTo(x + 55 + 20, y + 10);
        ctx.lineTo(x + 55 + 20 + 5, y + 15);
        ctx.lineTo(x + 55 + 20, y + 20);
        ctx.closePath();
        ctx.fill();

        x = 80 * ++ctd;
        tmp = tmp.liga;
        }
    }
}
