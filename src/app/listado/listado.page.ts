import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

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
