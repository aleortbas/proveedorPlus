import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { CrudServiceService } from '../crud-service.service';


@Component({
  selector: 'app-destornilladores',
  templateUrl: './destornilladores.page.html',
  styleUrls: ['./destornilladores.page.scss'],
})
export class DestornilladoresPage implements OnInit {
  listaDestornilladores = []

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
        valor = this.listaDestornilladores[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 1:
        valor = this.listaDestornilladores[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 2:
        valor = this.listaDestornilladores[index];
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
    this.database.getAll('destornillador').then((firebaseResponse) => {
      firebaseResponse.subscribe((listamartilloRef) => {
        this.listaDestornilladores = listamartilloRef.map((martilloRef) => {
          let martillo = martilloRef.payload.doc.data();
          martillo['id'] = martilloRef.payload.doc.id;
          return martillo;
        });
      });
    });
  }

}
