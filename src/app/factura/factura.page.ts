import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  data:any;

  constructor(private router: Router, private activatedRouter:ActivatedRoute) {
   // this.activatedRouter.paramMap.subscribe(
     // (data) => {
       // console.log(data)
      //}
    //)

    this.data = this.activatedRouter.snapshot.paramMap.get('var');
  }

  ngOnInit() {
  }

}
