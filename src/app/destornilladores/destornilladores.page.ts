import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destornilladores',
  templateUrl: './destornilladores.page.html',
  styleUrls: ['./destornilladores.page.scss'],
})
export class DestornilladoresPage implements OnInit {

  destornilladores = [
    {
      marca: 'Stanley',
      descripcion: 'Juego de Destornilladores de 40 Piezas Stanley',
      precios: 139900,
      tipo: 'destornillador',
      imagenUrl: '../assets/img/StanleyDestornillador.jpg',
    },
    {
      marca: 'Redline',
      descripcion: 'Juego destornilladores 2 unidades estrella #1 pala 1 8 pulgada CC017',
      precios: 15900,
      tipo: 'destornillador',
      imagenUrl: '../assets/img/RedlineDestornillador.jpg',
    },
    {
      marca: 'Stanley',
      descripcion: 'Destornillador Tipo Ratchet + 10 Puntas',
      precios: 44900,
      tipo: 'destornillador',
      imagenUrl: '../assets/img/StanleyDestornillador10Puntas.jpg',
    },
  ];

  constructor(private router: Router) { }

  atras() {
    this.router.navigate(['ferre']);
  }

  factura(index) {
    let valor; //= JSON.stringify(this.taladros[2].precios);
    //console.log("TEST FORMA DE ENVIAR: " + valor);

    switch (index) {
      case 0:
        valor = JSON.stringify(this.destornilladores[0]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 1:
        valor = JSON.stringify(this.destornilladores[1]);
        this.router.navigate(['factura/' + valor]);
        break;
      case 2:
        valor = JSON.stringify(this.destornilladores[2]);
        this.router.navigate(['factura/' + valor]);
        //console.log("PRUEBA " + JSON.stringify(this.taladros[2].tipoHerremienta));
        break;
    }
  }

  ngOnInit() {
  }

}
