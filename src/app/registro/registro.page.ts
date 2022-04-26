import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1985-03-07";
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private router: Router) { }

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

  submitForm(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Ingresar los valores requeridos:!')
      return false;
    } else{
      console.log(this.ionicForm.value)
    }
  }
}
