import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-alicates',
  templateUrl: './alicates.page.html',
  styleUrls: ['./alicates.page.scss'],
})
export class AlicatesPage implements OnInit {
  listaAlicate = [];

  constructor(
    private router: Router,
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
        valor = this.listaAlicate[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 1:
        valor = this.listaAlicate[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 2:
        valor = this.listaAlicate[index];
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
    this.database.getAll('alicate').then((firebaseResponse) => {
      firebaseResponse.subscribe((listamartilloRef) => {
        this.listaAlicate = listamartilloRef.map((martilloRef) => {
          let martillo = martilloRef.payload.doc.data();
          martillo['id'] = martilloRef.payload.doc.id;
          return martillo;
        });
      });
    });
  }
}
