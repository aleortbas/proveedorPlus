import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-martillos',
  templateUrl: './martillos.page.html',
  styleUrls: ['./martillos.page.scss'],
})
export class MartillosPage implements OnInit {

  martillo:string;

  constructor(private router: Router) {}

  go(){
    this.router.navigate(['ferre']);
  }
  factura(){
    console.log("PRUEBA: " + this.martillo)
  }

  ngOnInit() {
  }

}
