import { Component, OnInit } from '@angular/core';
import {MiPrimerServicioService} from '../services/mi-primer-servicio.service';
import {producto} from './../models/producto'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  public datos : Array<producto> = [];

  constructor(
    private servicio : MiPrimerServicioService
    ) { }

  ngOnInit() {
  }

  public ionViewWillEnter(){
    this.datos = this.servicio.datos;
  }



}
