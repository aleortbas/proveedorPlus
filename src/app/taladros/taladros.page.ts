import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-taladros',
  templateUrl: './taladros.page.html',
  styleUrls: ['./taladros.page.scss'],
})
export class TaladrosPage implements OnInit {
  listaTaladros = []

  constructor(
    private router: Router,
    private database: DatabaseService,
    private crudservice: CrudServiceService
  ) { }

  atras() {
    this.router.navigate(['ferre']);
  }

  factura(index) {
    let valor;
    let arreglo = []

    switch (index) {
      case 0:
        valor = this.listaTaladros[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 1:
        valor = this.listaTaladros[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 2:
        valor = this.listaTaladros[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
    }
  }
  ngOnInit() { 
    this.database.getAll('taladro').then((firebaseResponse) => {
      firebaseResponse.subscribe((listamartilloRef) => {
        this.listaTaladros = listamartilloRef.map((martilloRef) => {
          let martillo = martilloRef.payload.doc.data();
          martillo['id'] = martilloRef.payload.doc.id;
          return martillo;
        });
      });
    });
  }
}
