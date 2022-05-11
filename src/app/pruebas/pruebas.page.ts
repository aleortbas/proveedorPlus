import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
//import { resolve } from 'dns';
import { HttpService } from '../services/http.service';
import { CrudServiceService } from '../crud-service.service';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage{
  url: string;
  data: string;
  usuarios: any;
  user: any
  userName: string;
  userAge: number;
  userAddress: string;

  items = [
    { titulo:'Ingeniero', descripcion:'Mecatronica', imagenUrl: "../assets/img/login2.png"},
    { titulo:'Medico', descripcion:'Cirujano'},
    { titulo:'Abogado', descripcion:'Civil'},
    { titulo:'Quimico', descripcion:'Farmaceuta'}
  ];

  Mostrar:boolean;
  mostrar = true;


  constructor(private http:HttpService, public NavCtrl:NavController, private crudservice: CrudServiceService) { }

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
    this.crudservice.read_User().subscribe(data => {
      this.user = data.map(e => {
        return{
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['name'],
          Age: e.payload.doc.data()['age'],
          Address: e.payload.doc.data()['address'],
        }
      })
    })
  }

  createRecord(){
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
