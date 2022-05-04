import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  nombre: string;
  email: string;
  direccion: string;
  celular: string;
  mensajeFormulario: string;
  Toggle: boolean;

  constructor(private router:Router, private alertController:AlertController, private toastController:ToastController) { }

  atras(){
    this.router.navigate(['ferre']);
  }

  getLimpiar() {
    this.mensajeFormulario = '';
    this.presentToast();
  }

  getVal(){
   
      this.mensajeFormulario = 'La queja o reclamo a nombre de: ' + this.nombre + 
      ', con email: ' + this.email + 
      ', direccion de residencia: ' + this.direccion + 
      ', celular: ' + this.celular +
      ' y con la siguiente queja o reclamo: ' + this.mensajeFormulario + '. Fue enviada';
  }

  async presentNotificacion() {
    const alert = await this.alertController.create({
      header: 'Solicutud de reclamo',
      subHeader: 'Detalles',
      message: this.mensajeFormulario,
      buttons:[
        {
          text: 'cancel',
          role: 'cancel',
          handler: (dato) => {
            this.getLimpiar();
          },
        },
        {
          text: 'Ok',
          role: 'ok',
          handler: (datos) => {
            this.getVal();
          },
        },
      ],
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'El mensaje fue borrado',
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }


  go(){
    console.log(this.nombre);
  }

  ngOnInit() {
  }

}
