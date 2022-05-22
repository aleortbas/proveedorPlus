import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CrudServiceService } from '../crud-service.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1985-03-07";
  isSubmitted = false;

  usuario ={}

  constructor(public formBuilder: FormBuilder, private router: Router, private database: DatabaseService) { }

  go(){
    this.router.navigate(['ferre']);
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z 0-9]+@[a-z 0-9.-]+\.[a-z]{3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  
  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }
  get errorControl(){
    return this.ionicForm.controls;
  }

  crearUsuario(){
    this.database.create('User', this.usuario).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  submitForm(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Ingresar los valores requeridos:!')
      return false;
    } else{
      this.usuario = this.ionicForm.value;
      this.database.create('User', this.usuario).then(res => {
        console.log(res);
      })
      console.log(this.usuario)
    }
  }
}
