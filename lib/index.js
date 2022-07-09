import { Lista } from "./lista.js";
import {bootbox_prompt, bootbox_alert} from './dialog.js';

let lista = null;

export async function insertar_al_inicio() {
    let canvas = window.CANVAS;
    if (lista == null) {
        lista = new Lista(canvas);
    }

    try{
        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || !Number.isInteger(DATO))
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_al_final() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true){//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");
        }
        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || !Number.isInteger(DATO))
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_antes_X() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO1 = await bootbox_prompt("Ingrese valor del nuevo nodo:");
        let DATO2 = await bootbox_prompt("Ingrese valor del nodo de referencia:");
        if(DATO1==null || DATO2==null || !Number.isInteger(DATO1) || !Number.isInteger(DATO2))
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_antes_X(DATO1, DATO2);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO1);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function inserta_despues_X() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO1 = await bootbox_prompt("Ingrese el valor del nuevo nodo:");
        let DATO2 = await bootbox_prompt("Ingrese valor del nodo de referencia:");
        if(DATO1==null || DATO2==null || !Number.isInteger(DATO1) || !Number.isInteger(DATO2))
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("El nodo indicado ya se encuentra en la Lista");

        lista.inserta_despues_X(DATO1, DATO2);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO1);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_inicio() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        lista.elimina_inicio();
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_ultimo() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_X() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || !Number.isInteger(DATO))
            return;

        lista.elimina_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_antes_X() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || !Number.isInteger(DATO))
            return;

        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_despues_X() {
    let canvas = window.CANVAS;
    if(lista == null)
        lista = new Lista(canvas);

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO = await bootbox_prompt("Ingrese el valor del nodo:");
        if(DATO==null || !Number.isInteger(DATO))
            return;

        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

