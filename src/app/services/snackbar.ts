import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Snackbar {

  //El constructor de la clase Snackbar recibe una dependencia a través de la inyección de dependencias de Angular. 
  //Esta dependencia es MatSnackBar, que es un servicio proporcionado por Angular Material para mostrar mensajes emergentes 
  // (snackbars) al usuario.
  constructor(private snackbar: MatSnackBar) { }

  //El método openSnackBar se utiliza para mostrar un mensaje emergente (snackbar) al usuario.
  //Recibe dos parámetros: 
  //- message: el mensaje que se mostrará en el snackbar.
  //- action: una cadena que indica el tipo de mensaje (por ejemplo, 'error' para mensajes de error).
  openSnackBar(message: string, action: string) {
    if (action === 'eror') {
      this.snackbar.open(message, 'Cerrar', { 
        //El mensaje se muestra en el centro horizontal 
        // y en la parte superior de la pantalla, 
        // y se cierra automáticamente después de 3000 milisegundos (3 segundos).
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
        //El panelClass se utiliza para aplicar estilos personalizados al snackbar. 
        //En este caso, se aplicará la clase 'black-snackbar' para mensajes de error y 'green-snackbar' para mensajes de éxito.
        panelClass: ['black-snackbar']
      });
    }else {
      this.snackbar.open(message, 'Cerrar', { 
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['green-snackbar']
      });
    }
  }

}
