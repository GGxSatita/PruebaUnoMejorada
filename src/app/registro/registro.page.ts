import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    private alert: AlertController
  ) { }

  ngOnInit() {
  }

  public async registrar(){
    const alerta = await this.alert.create({
      header: 'Usuario registrado',
      buttons: [
        {
          text:'Ok!',
          role: 'confirm'
        }
      ]
    });
    await alerta.present();
  }

}
