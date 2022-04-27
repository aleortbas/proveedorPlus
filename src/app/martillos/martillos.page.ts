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
  
  factura(){

    const nombre = this.martillo.split(",");

    let producto = {
      'nombre': nombre[0],
      'precio': nombre[1]
    }

    this.router.navigate(['factura/' + JSON.stringify(producto.nombre) + JSON.stringify(producto.precio)]);
    //console.log("PRUEBA: " + this.martillo + "PREUBA: " + this.precio);
  }

  ngOnInit() {
  }

}
