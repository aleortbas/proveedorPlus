import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
//import { resolve } from 'dns';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage{
  url: string;
  data: string;
  usuarios: any;

  items = [
    { titulo:'Ingeniero', descripcion:'Mecatronica'},
    { titulo:'Medico', descripcion:'Cirujano'},
    { titulo:'Abogado', descripcion:'Civil'},
    { titulo:'Quimico', descripcion:'Farmaceuta'}
  ];

  Mostrar:boolean;
  mostrar = true;


  constructor(private http:HttpService, public NavCtrl:NavController) { }

  cargar(){
    this.http.loadUsers().then(
      (res: any)=> {
        this.usuarios = res.results;
      },
      (error) =>{
        console.error(error);
      }
    );
  }  
  /*Post(){
    const datos = {nombre:'Javier', emial:'jprerez@gmail.com'}
    const options = {
      headers: {
        'Content-Type':'application/x-www-form-urlencode'
      }
    };
    const url = 'http://httpbin.org';
    return new Promise(resolve => {
      this.http.post(url, JSON.stringify(datos), options)
      .subcribe(data => {
        resolve(data)
      })
    })
  }*/

  ngOnInit() {
  }

}
