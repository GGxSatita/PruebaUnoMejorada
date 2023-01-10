import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.page.html',
  styleUrls: ['./olvido-contrasena.page.scss'],
})
export class OlvidoContrasenaPage implements OnInit {

  constructor(
    private alert: AlertController
  ) { }

  ngOnInit() {
  }
  public async solicitar(){
    const alerta = await this.alert.create({
      header: 'Si los datos coinciden recibirás tu correo',
      buttons: [
        {
          text:'ok!',
          role: 'confirm'
        }
      ]
    });
    await alerta.present();
  }
}
