import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.page.html',
  styleUrls: ['./marcas.page.scss'],
})
export class MarcasPage implements OnInit {
  marcas = [
    { nombre: 'Black+Decker', imagenUrl: '../assets/img/black+decker.png' },
    { nombre: 'Bosch', imagenUrl: '../assets/img/bosch.png' },
    { nombre: 'Dewalt', imagenUrl: '../assets/img/dewalt.png' },
    { nombre: 'Uberman', imagenUrl: '../assets/img/Uberman-logo.png' },
    { nombre: 'Stanley', imagenUrl: '../assets/img/stanley.png' },
  ];

  constructor(private router: Router) {}

  atras(){
    this.router.navigate(['ferre'])
  }

  ir(index) {
    switch (index) {
      case 0:
        this.router.navigate(['black-decker']);
        break;
      case 1:
        this.router.navigate(['bosch']);
        break;
      case 2:
        this.router.navigate(['dewalt']);
        break;
      case 3:
        this.router.navigate(['uberman']);
        break;
      case 4:
        this.router.navigate(['stanley']);
        break;
    }
  }

  ngOnInit() {}
}
