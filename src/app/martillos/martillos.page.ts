import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-martillos',
  templateUrl: './martillos.page.html',
  styleUrls: ['./martillos.page.scss'],
})
export class MartillosPage implements OnInit {

  martillo:string;
  precio:string;

  martillos = [
    { marca: "Karson", descripcion: "Martillo una 13 onzas mango madera", precios: 39000, imagenUrl: "../assets/img/marillokarson.jpg"},
    { marca: "Redline", descripcion: "Martillo carpintero 20 onzas mango fibra", precios: 45000, imagenUrl: "../assets/img/martilloRedline.jpg"},
    { marca: "Uberman", descripcion: "Combo con mango FV", precios: 59900, imagenUrl: "../assets/img/martilloUberman.jpg"},
  ];

  constructor(private router: Router, private activatedRouter:ActivatedRoute) {
    //this.activatedRouter.paramMap.subscribe(
      //(data) => {
        //console.log(data)
      //}
    //)
  }

  atras(){
    this.router.navigate(['ferre']);
  }
  
  factura(index){

    switch (index) {
      case 0:
        let valor = JSON.stringify(this.martillos[0]);
        //console.log("TEST FORMA DE ENVIAR: " + valor);
        this.router.navigate(['factura/' + valor]);
        break;
      case 1:
        this.router.navigate(['taladros']);
        break;
      case 2:
        this.router.navigate(['destornilladores']);
        break;
      case 3:
        this.router.navigate(['alicates']);
        break;
      case 4:
        this.router.navigate(['metros']);
        break;

    }

    /*const nombre = this.martillo.split(",");

    let producto = {
      'nombre': nombre[0],
      'precio': nombre[1]
    }

    this.router.navigate(['factura/' + JSON.stringify(producto.nombre) + JSON.stringify(producto.precio)]);
    //console.log("PRUEBA: " + this.martillo + "PREUBA: " + this.precio);*/
  }

  ngOnInit() {
  }

}
