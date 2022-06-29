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
    lista.dibujarNodos(DATO.value);
    DATO.value = "";
}

export function insertar_al_final() {
    if (lista != null) // no agregar si no existe lista
    {
        var DATO = document.getElementById("val-insertar-final");
        lista.inserta_final(DATO.value);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO.value);
        DATO.value = "";
    }
}

export function insertar_antes_X() {
    if (lista != null) // no agregar si no existe lista
    {
        var DATO1 = document.getElementById("val-insertar-antes1");
        var DATO2 = document.getElementById("val-insertar-antes2");
        lista.inserta_antes_X(DATO2.value, DATO1.value);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO2.value);
        DATO1.value = "";
        DATO2.value = "";
    }
}

export function inserta_despues_X() {
    if (lista != null) // no agregar si no existe lista
    {
        var DATO1 = document.getElementById("val-insertar-despues1");
        var DATO2 = document.getElementById("val-insertar-despues2");
        lista.inserta_despues_X(DATO2.value, DATO1.value);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO2.value);
        DATO1.value = "";
        DATO2.value = "";
    }
}

export function elimina_inicio() {
    if (lista != null) // no agregar si no existe lista
    {
        lista.elimina_inicio();
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO.value);
    }
}

export function elimina_ultimo() {
    if (lista != null) // no agregar si no existe lista
    {
        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO.value);
    }
}

export function elimina_X() {
    if (lista != null) // no agregar si no existe lista
    {
        var DATO = document.getElementById("val-eliminar-x");
        lista.elimina_X(DATO.value);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO.value);
        DATO.value = "";
    }
}

export function elimina_antes_X() {
    if (lista != null) // no agregar si no existe lista
    {
        var DATO = document.getElementById("val-eliminar-antes");
        lista.elimina_antes_X(DATO.value);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO.value);
        DATO.value = "";
    }
}

export function elimina_despues_X() {
    if (lista != null) // no agregar si no existe lista
    {
        var DATO = document.getElementById("val-eliminar-despues");
        lista.elimina_despues_X(DATO.value);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO.value);
        DATO.value = "";
    }
}

