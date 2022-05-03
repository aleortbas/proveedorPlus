import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metros',
  templateUrl: './metros.page.html',
  styleUrls: ['./metros.page.scss'],
})
export class MetrosPage implements OnInit {

  metros = [
    {
      marca: 'NTX',
      descripcion: 'Flexómetro 3m X 16mm X 120Unds',
      precios: 449900,
      tipo: 'metro',
      imagenUrl: '../assets/img/metroNTX.jpg',
    },
    {
      marca: 'Dewalt',
      descripcion: 'Cinta Métrica Flexometro 5mt Dewalt',
      precios: 39900,
      tipo: 'metro',
      imagenUrl: '../assets/img/metroDewalt.jpg',
    },
    {
      marca: 'Bosch',
      descripcion: 'Medidor Láser Bosch Alcnce 120Mtrs con Bluetooth GLM 120 C',
      precios: 1417900,
      tipo: 'metro',
      imagenUrl: '../assets/img/metroLaserBosch.jpg',
    },
  ];

  constructor(private router:Router) { }

  atras() {
    this.router.navigate(['ferre']);
  }

  factura(index) {
    let valor; //= JSON.stringify(this.taladros[2].precios);
    //console.log("TEST FORMA DE ENVIAR: " + valor);

    switch (index) {
      case 0:
        valor = JSON.stringify(this.metros[0]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 1:
        valor = JSON.stringify(this.metros[1]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 2:
        valor = JSON.stringify(this.metros[2]);
        this.router.navigate(['factura/' + valor]);
        //console.log("PRUEBA " + JSON.stringify(this.taladros[2].tipoHerremienta));
        break;
    }
  }

  ngOnInit() {
  }

}
