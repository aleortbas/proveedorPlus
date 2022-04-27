import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taladros',
  templateUrl: './taladros.page.html',
  styleUrls: ['./taladros.page.scss'],
})
export class TaladrosPage implements OnInit {

  constructor(private router: Router) { }

  taladro:string;
  precio:string;

  factura(){

    const nombre = this.taladro.split(",");

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
