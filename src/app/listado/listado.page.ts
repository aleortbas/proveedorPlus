import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  productos = [
    { tipo:'Herramienta Manual', nombre:'Martillos', imagenUrl: "../assets/img/martillo.jpg"},
    { tipo:'Herramienta mecanicas', nombre:'Taladros', imagenUrl:"../assets/img/taladroList.jpg"},
    { tipo:'Herramienta De Montaje', nombre:'Destornilladores', imagenUrl:"../assets/img/Destornilladores.jpg"},
    { tipo:'Herramienta De Sujecion', nombre:'Alicates', imagenUrl:"../assets/img/alicate.jpg"},
    { tipo:'Herramienta De Trazo', nombre:'Flexometros', imagenUrl:"../assets/img/Metro.jpg"},
  ];

  constructor(private router: Router) { }

  atras(){
    this.router.navigate(['ferre']);
  }
  martillos(index){
    console.log(index);

    switch (index) {
      case 0:
        this.router.navigate(['martillos']);
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

    //this.router.navigate(['martillos']);
  }

  ngOnInit() {
  }

}
