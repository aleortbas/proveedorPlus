import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taladros',
  templateUrl: './taladros.page.html',
  styleUrls: ['./taladros.page.scss'],
})
export class TaladrosPage implements OnInit {

  taladros = [
    {
      marca: 'Bosch Taladro Percutor',
      descripcion: 'Taladro Percutor 1 2-pulg 18V I-L 1.5Ah',
      precios: 78900,
      tipo: 'taladro',
      imagenUrl: '../assets/img/taladroPercutor.jpg',
    },
    {
      marca: 'Black+Decker',
      descripcion:
        'Taladro Inalámbrico Rotación 3 8-pulg 12V  Accesorios  Estuche Plástico Black+Decker',
      precios: 199000,
      tipo: 'taladro',
      imagenUrl: '../assets/img/blackDeckerTaladro.jpg',
    },
    {
      marca: 'Dewalt',
      descripcion:
        'Kit Taladro Percutor 1 2-pulg 20V Max Brushless Con 1 Batería 2Ah',
      precios: 559000,
      tipo: 'taladro',
      imagenUrl: '../assets/img/DewaltTaladro.jpg',
    },
  ];

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  atras() {
    this.router.navigate(['ferre']);
  }

  factura(index) {
    let valor; //= JSON.stringify(this.taladros[2].precios);
    //console.log("TEST FORMA DE ENVIAR: " + valor);

    switch (index) {
      case 0:
        valor = JSON.stringify(this.taladros[0]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 1:
        valor = JSON.stringify(this.taladros[1]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 2:
        valor = JSON.stringify(this.taladros[2]);
        this.router.navigate(['factura/' + valor]);
        //console.log("PRUEBA " + JSON.stringify(this.taladros[2].tipoHerremienta));
        break;
    }
  }
  ngOnInit() {}
}
