import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dewalt',
  templateUrl: './dewalt.page.html',
  styleUrls: ['./dewalt.page.scss'],
})
export class DewaltPage implements OnInit {
  listaMartillos = [];

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private database: DatabaseService
  ) { }

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
  
  atras() {
    this.router.navigate(['marcas']);
  }

}
