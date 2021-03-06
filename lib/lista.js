class Nodo {
    info = 0;
    liga = null;
}

export class Lista {
    INICIO = null;
    canvas = null;

    constructor(canvas) {
        this.canvas = canvas;
    }

    inserta_inicio(DATO) {
        let P = this.INICIO;
        let Q = new Nodo();
        Q.info = DATO;
        Q.liga = P;
        P = Q;

        this.INICIO = P;
    }

    inserta_final(DATO) {
        let P = this.INICIO;

        let T = P;
        while (T.liga != null) {
            T = T.liga;
        }
        let Q = new Nodo();
        Q.info = DATO;
        Q.liga = null;
        T.liga = Q;

        this.INICIO = P;
    }

    inserta_antes_X(DATO, X){
        let P = this.INICIO;
        let Q = P;
        let T = null;
        let BAND = 1;

        while(Q.info != X && BAND == 1){
            if(Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            else
                BAND = 0;
        }
        if (BAND == 1){
            let X1 = new Nodo();
            X1.info = DATO;
            if(P == Q){
                X1.liga = P;
                P = X1;
            }
            else {
                T.liga = X1;
                X1.liga = Q;
            }
        }
        else
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");

        this.INICIO=P;
    }

    inserta_despues_X(DATO, x){
        let P = this.INICIO;
        let Q=P;
        let BAND=1;
        while(Q.info!=x && BAND==1){
            if(Q.liga!=null){
                Q=Q.liga;
            }
            else    BAND=0;
        }
        if (BAND==1){
            let T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");

        this.INICIO=P;
    }

    elimina_inicio(){
        let Q = this.INICIO;
        this.INICIO = Q.liga;
        Q = null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
    }

    elimina_ultimo(){
        let P = this.INICIO;
        let Q = P;
        let T;

        if(P.liga == null)
            P = null;
        else{
            while(Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            T.liga = null;
        }
        Q = null;

        this.INICIO=P;
    }

    elimina_X(x){
        let P = this.INICIO;
        let Q = P;
        let T = null;
        let  BAND = 1;
        while(Q.info != x && BAND == 1){
            if(Q.liga != null){
                T = Q;
                Q = Q.liga;
            }
            else BAND=0;
        }
        if(BAND == 0)
            throw new Error("EL ELEMENTO CON INFORMACION " + x + " NO SE ENCUENTRA EN LA LISTA");
        else if(P == Q)
            P = Q.liga;
        else
            T.liga = Q.liga;
        Q = null;
        this.INICIO=P;
    }

    elimina_antes_X(x){
        let P = this.INICIO;
        let Q = null;
        let T = null;
        let R = null;
        let BAND;

        if(P.info == x)
            throw new Error("No existe un nodo anterior al nodo: " + x);
        else{
            Q = P;
            T = P;
            BAND = 1;
            while(Q.info != x && BAND == 1){
                if(Q.liga != null){
                    R = T;
                    T = Q;
                    Q = Q.liga;
                }
                else
                    BAND = 0;
            }
            if(BAND == 0)
                throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            else if(P.liga == Q)
                P = Q;
            else
                R.liga = Q;

            T = null;
            this.INICIO=P;
        }
    }

    elimina_despues_X(x){
        let P = this.INICIO;
        let Q = P;
        let T = null;
        let BAND = 1;

        while(Q.info != x && BAND == 1){
            if(Q.liga != null)
                Q = Q.liga;
            else
                BAND = 0;
        }
        if (BAND == 1){
            if(Q.liga == null)
                throw new Error("No existe un nodo posterior al nodo: " + x);
            else {
                T = Q.liga;
                Q.liga = T.liga;
                T = null;
            }
        }
        else
            throw new Error("Error, el nodo dado como referencia no se encuentra en la Lista");
    }

    buscar(DATO){
        var encontrado=false;
        var	tmp=this.INICIO;
        while(tmp!=null){
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;
        }
        return encontrado;
    }

    isVacio(){
        if(this.INICIO==null)
            return true;
        else
            return false;
    }

    dibujarNodosLog() {
        let tmp = this.INICIO;
        let cad = "";
        while (tmp != null) {
        cad += tmp.info + "::";
        tmp = tmp.liga;
        }
        console.log(cad);
    }

    dibujarNodos(valor) {
        let canvas = this.canvas;
        let elemCanvas = canvas.getContext("2d");
        let iterador = this.INICIO;

        // coordenadas de los elementos del canvas
        let ejeX = 0;
        let ejeY = 0;
        let ancho = 50;
        let alto = 20;
        let columna = 0; // indicador de columna(1, 2, 3, ...)
        let newfila = 8; // indicador de nueva fila(1, 2, 3, ...) //8
        let temp = newfila;

        //limpiar el lienzo canva antes de dibujar
        elemCanvas.clearRect(0, 0, canvas.width, canvas.height);

        // si encuentra el nodo agregar efecto de dibujo
        let nodo=null;

        // dibujando elementos uno por uno
        while (iterador != null)
        {
            if(valor != undefined && iterador.info==valor){
                //Dibujar rectangulo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "blue";//blue
                elemCanvas.fillRect (ejeX, ejeY, ancho,alto);

                nodo = {};
                nodo.x = ejeX;
                nodo.y = ejeY;
                nodo.width = ancho;
                nodo.height = alto;
                nodo.info = iterador.info;
            }
            else{
                //Dibujar rectangulo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "red";
                elemCanvas.fillRect(ejeX, ejeY, ancho, alto);
            }
            //texto
            elemCanvas.fillStyle = "#ecd9d9"; //color de relleno
            elemCanvas.font = "bold 1rem serif";
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
                // linea a la nueva fila
                //abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto/2);
                elemCanvas.lineTo(ejeX, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //atras
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto*1.7);
                elemCanvas.lineTo(ancho/2, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //linea abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho/2, ejeY + alto*1.7);
                elemCanvas.lineTo(ancho/2, ejeY + alto*2.5);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //cabeza de la flecha
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho/2.5, ejeY + alto*2);
                elemCanvas.lineTo(ancho/2, ejeY + alto*2.5);
                elemCanvas.lineTo(ancho/1.6, ejeY + alto*2);
                elemCanvas.closePath();
                elemCanvas.fill();

                // nueva fila
                temp = newfila;
                ejeY += 50;
                ejeX = 0;
                columna = 0;
            }
            //console.log(temp+" "+ejeX+" "+ejeY);

            // dar color original luego del efecto de dibujo
            if(nodo!=null){

                setTimeout(function(){
                    //Dibujar rectangulo
                    elemCanvas.beginPath();
                    elemCanvas.fillStyle = "red";//ROJO
                    elemCanvas.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
                    //texto
                    elemCanvas.fillStyle = "#ecd9d9"; //color de relleno
                    elemCanvas.font = "bold 1rem serif";
                    elemCanvas.textAlign = "center"; // centrar texto
                    elemCanvas.fillText(nodo.info, nodo.x + nodo.width*0.5, nodo.y + nodo.height*0.7); // centrar texto
                    elemCanvas.closePath();
                },350);
            }
        }
    }
}
