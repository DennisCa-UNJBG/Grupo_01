import { Lista } from "./lista.js";

let lista = null;

export function agregar() {
    var canvas = window.CANVAS;
    if (lista == null) {
        lista = new Lista();
        lista.canvas = canvas; //despues contructor
    }

    var DATO = document.getElementById("val-agregar");
    lista.inserta_inicio(DATO.value);
    lista.dibujarNodosLog();
    lista.dibujarNodos();
    DATO.value = "";
}
export function insertar_al_final() {
    if (lista != null) // no agregar si no existe lista
    {
        var DATO = document.getElementById("val-insertar-final");
        lista.inserta_final(DATO.value);
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        DATO.value = "";
    }
}
