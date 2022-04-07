import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
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

  constructor(private http:HttpService, public NavCtrl:NavController) { }

  cargar(){
    this.http.loadUsers().then(
      (res: any)=> {
        this.usuarios = res.results;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }

}
