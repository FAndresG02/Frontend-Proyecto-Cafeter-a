import { Inject, Injectable } from "@angular/core";

//Definición de la interfaz MenuItem que representa la estructura de un elemento del menú en la aplicación
export interface MenuItem {

    state: string;
    name: string;
    type: string;
    icon: string;
    role: string;
}

//Contiene un array de objetos que representan los elementos del menú en la aplicación
const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard', role: '' }
];

//Proporciona un método para obtener los elementos del menú
@Injectable()
export class MenuItems {
    getMenuitem(): MenuItem[] {
        return MENUITEMS;
    }
}