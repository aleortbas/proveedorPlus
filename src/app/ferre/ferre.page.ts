import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ferre',
  templateUrl: './ferre.page.html',
  styleUrls: ['./ferre.page.scss'],
})
export class FerrePage implements OnInit {

  constructor(private router: Router) { }

  go(){
    this.router.navigate(['home']); 
  }
  listado(){
    this.router.navigate(['listado'])
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
  Marcas(){
    this.router.navigate(['marcas']);
  }

  ngOnInit() {
  }

}
