import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  data: any;
  nombre: any;
  precio: any;
  Direccion: string;
  Telefono: string;
  pago: string;
  Toggle: boolean;
  mensaje: string;
  tipo: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
    
    const captura = router.getCurrentNavigation().extras.state.example;
    
    this.precio = captura[0]
    this.nombre = captura[1]
  }

  atras() {
    /*if(this.sapa === 2){
      this.router.navigate(['martillos']); 
    }
    this.router.navigate(['alicates']); 
    TOMAR ENCUENTA PARA EL ROUTING O BUSCAR EN INTERNET
    */
    if (this.tipo.match('taladro')) {
      this.router.navigate(['taladros']);
    } else if (this.tipo.match('martillo')) {
      this.router.navigate(['martillos']);
    } else if (this.tipo.match('destornillador')) {
      this.router.navigate(['destornilladores']);
    } else if (this.tipo.match('alicate')) {
      this.router.navigate(['alicates']);
    } else if (this.tipo.match('metro')) {
      this.router.navigate(['metros']);
    }
  }

  getLimpiar() {
    this.mensaje = '';
    this.presentToast();
  }

  getVal() {
    let expres = '';

    if (this.Toggle === true) {
      expres = 'si';
    }

    this.mensaje =
      'Pedido realizado a nombre: ' +
      this.nombre +
      ', con un valor de: \n' +
      this.precio +
      ' direccion de envio: ' +
      this.Direccion +
      ' telefono de contacto: ' +
      this.Telefono +
      ' con medio de pago: ' +
      this.pago +
      ' Entrega Expres: ' +
      expres;

    //this.mensaje;
  }

  async presentFactura() {
    const alert = await this.alertController.create({
      header: 'Factura',
      subHeader: 'Detalles',
      message: this.mensaje,
      buttons: [
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

  async showToasWithCloseButton() {
    let toast = await this.toastController.create({
      icon: 'information-circle',
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'start',
          text: 'Aceptar',
          handler: () => {
            console.log('Click en aceptar');
          },
        },
      ],
    });
    await toast.present();
  }

  ngOnInit() {}
}
