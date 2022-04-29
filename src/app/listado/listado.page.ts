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
  martillos(){
    this.router.navigate(['martillos']);
  }
  taladros(){
    this.router.navigate(['taladros']);
  }
  destornilladores(){
    this.router.navigate(['destornilladores']);
  }
  alicates(){
    this.router.navigate(['alicates']);
  }
  metros(){
    this.router.navigate(['metros']);
  }

  ngOnInit() {
  }

}
