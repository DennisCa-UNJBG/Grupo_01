import { Lista } from "./lista.js";
import {bootbox_prompt, bootbox_alert} from './dialog.js';

let lista = null;

export async function agregar() {
    let canvas = window.CANVAS;
    if (lista == null) {
        lista = new Lista();
        lista.canvas = canvas; //despues contructor
    }

    let DATO = await bootbox_prompt("Ingrese valor de nodo:");
    lista.inserta_inicio(DATO);
    lista.dibujarNodosLog();
    lista.dibujarNodos(DATO);
}

export async function insertar_al_final() {
    if (lista != null) // no agregar si no existe lista
    {
        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }
}

export async function insertar_antes_X() {
    if (lista != null) // no agregar si no existe lista
    {
        let DATO1 = await bootbox_prompt("Ingrese valor de nodo:");
        let DATO2 = await bootbox_prompt("Ingrese valor de X:");
        lista.inserta_antes_X(DATO1, DATO2);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO2.value);
    }
}

export async function inserta_despues_X() {
    if (lista != null) // no agregar si no existe lista
    {
        let DATO1 = await bootbox_prompt("Ingrese valor de nodo:");
        let DATO2 = await bootbox_prompt("Ingrese valor de X:");
        lista.inserta_despues_X(DATO1, DATO2);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO2.value);
    }
}

export async function elimina_inicio() {
    if (lista != null) // no eliminar si no existe lista
    {
        lista.elimina_inicio();
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }
}

export async function elimina_ultimo() {
    if (lista != null) // no agregar si no existe lista
    {
        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }
}

export async function elimina_X() {
    if (lista != null) // no agregar si no existe lista
    {
        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        lista.elimina_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }
}

export async function elimina_antes_X() {
    if (lista != null) // no agregar si no existe lista
    {
        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }
}

export async function elimina_despues_X() {
    if (lista != null) // no agregar si no existe lista
    {
        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }
}

