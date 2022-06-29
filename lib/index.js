import { Lista } from "./lista.js";
import {bootbox_prompt, bootbox_alert} from './dialog.js';

let lista = null;

export async function agregar() {
    let canvas = window.CANVAS;
    if (lista == null) {
        lista = new Lista();
        lista.canvas = canvas; //despues contructor
    }

    try{
        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){

        await bootbox_alert(e.message);
    }
}

export async function insertar_al_final() {
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        if(DATO==null)
            return;

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_antes_X() {
    try{

        if(lista.isVacio()==true)//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO1 = await bootbox_prompt("Ingrese valor del nuevo nodo:");
        let DATO2 = await bootbox_prompt("Ingrese valor de X:");
        if(DATO1==null || DATO2==null)
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_antes_X(DATO1, DATO2);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO1);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function inserta_despues_X() {
    try{

        if(lista.isVacio()==true)//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO1 = await bootbox_prompt("Ingrese valor de nodo:");
        let DATO2 = await bootbox_prompt("Ingrese valor de X:");
        if(DATO1==null || DATO2==null)
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_despues_X(DATO1, DATO2);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO1);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_inicio() {
    try{

        if(lista.isVacio()==true)//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");

        lista.elimina_inicio();
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_ultimo() {
    try{

        if(lista.isVacio()==true)//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");

        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_X() {
    try{

        if(lista.isVacio()==true)//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        if(DATO==null)
            return;

        lista.elimina_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(null);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_antes_X() {
    try{

        if(lista.isVacio()==true)//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        if(DATO==null)
            return;

        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_despues_X() {
    try{

        if(lista.isVacio()==true)//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO = await bootbox_prompt("Ingrese valor de nodo:");
        if(DATO==null)
            return;

        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}

