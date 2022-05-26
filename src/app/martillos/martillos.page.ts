import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { CrudServiceService } from '../crud-service.service';


@Component({
  selector: 'app-martillos',
  templateUrl: './martillos.page.html',
  styleUrls: ['./martillos.page.scss'],
})
export class MartillosPage implements OnInit {
  martillo: string;
  precio: string;
  userName: string;
  userAge: number;
  userAddress: string;
  listaMartillos = [];

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private database: DatabaseService,
    private crudservice: CrudServiceService
  ) { }

  atras() {
    this.router.navigate(['ferre']);
  }

  factura(index) {
    let valor;
    let arreglo = [];

    switch (index) {
      case 0:
        valor = this.listaMartillos[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        //console.log("INDEX: "+index)
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 1:
        valor = this.listaMartillos[index];
        arreglo = [
          valor.precios,
          valor.marca,
          valor.tipo
        ]
        this.router.navigate(['factura/'], { state: { example: arreglo } });
        break;
      case 2:
        valor = this.listaMartillos[index];
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
    this.database.getAll('martillos').then((firebaseResponse) => {
      firebaseResponse.subscribe((listamartilloRef) => {
        this.listaMartillos = listamartilloRef.map((martilloRef) => {
          let martillo = martilloRef.payload.doc.data();
          martillo['id'] = martilloRef.payload.doc.id;
          return martillo;
        });
      });
    });
  }
  createRecord() {
    let record = {};
    record['name'] = this.userName;
    record['age'] = this.userAge;
    record['address'] = this.userAddress;

    this.crudservice.create_NewUser(record).then(res => {
      this.userName = "";
      this.userAge = undefined;
      this.userAddress = "";
      console.log(res);
    })
      .catch(error => {
        console.log(error)
      });
  }
}
