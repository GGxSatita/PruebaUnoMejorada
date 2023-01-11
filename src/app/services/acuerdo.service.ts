import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcuerdoService {

  private acepto : boolean = false;

  constructor() { }

  public aceptar(){
    this.acepto = true;
    localStorage.setItem('acuerdo', 'si');
  }

  public denegar(){
    this.acepto = false;
    localStorage.removeItem('acuerdo');
  }

  public obtenerRespuesta(){
    return localStorage.getItem('acuerdo')?true:false;
  }


}
