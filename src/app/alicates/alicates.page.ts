import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alicates',
  templateUrl: './alicates.page.html',
  styleUrls: ['./alicates.page.scss'],
})
export class AlicatesPage implements OnInit {

  alicates = [
    {
      marca: 'Stanley',
      descripcion: 'Set Pinzas Pequeñas de 6 Piezas Stanley',
      precios: 129900,
      tipo: 'alicate',
      imagenUrl: '../assets/img/alicateStanley.jpg',
    },
    {
      marca: 'KARSON',
      descripcion: 'Alicate 7 pulgadas electricista Tornado Tools P036-11',
      precios: 11900,
      tipo: 'alicate',
      imagenUrl: '../assets/img/alicateKarson.jpg',
    },
    {
      marca: 'Uberman',
      descripcion: 'Alicate 8-pulg Multipropósito Ubermann',
      precios: 99900,
      tipo: 'alicate',
      imagenUrl: '../assets/img/alicateuberman.jpg',
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
        valor = JSON.stringify(this.alicates[0]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 1:
        valor = JSON.stringify(this.alicates[1]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 2:
        valor = JSON.stringify(this.alicates[2]);
        this.router.navigate(['factura/' + valor]);
        //console.log("PRUEBA " + JSON.stringify(this.taladros[2].tipoHerremienta));
        break;
    }
  }


  ngOnInit() {
  }

}
