import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-metros',
  templateUrl: './metros.page.html',
  styleUrls: ['./metros.page.scss'],
})
export class MetrosPage implements OnInit {
  listaMetros = []

  constructor(
    private router:Router,
    private database: DatabaseService,
    ) { }

  atras() {
    this.router.navigate(['ferre']);
  }

  factura(index) {
    let valor; 
    let arreglo = [];

    switch (index) {
      case 0:
        valor = this.listaMetros[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 1:
        valor = this.listaMetros[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 2:
        valor = this.listaMetros[index];
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
    this.database.getAll('metros').then((firebaseResponse) => {
      firebaseResponse.subscribe((listamartilloRef) => {
        this.listaMetros = listamartilloRef.map((martilloRef) => {
          let martillo = martilloRef.payload.doc.data();
          martillo['id'] = martilloRef.payload.doc.id;
          return martillo;
        });
      });
    });
  }
}
