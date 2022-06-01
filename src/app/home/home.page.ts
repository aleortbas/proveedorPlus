import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  get email() {
    return this.credentials.get('email');
  }
 
  get password() {
    return this.credentials.get('password');
  }
 
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.loging(this.credentials.value);
    await loading.dismiss();
 
    if (user) {
      this.router.navigateByUrl('/ferre', { replaceUrl: true });
    } else {
      this.showAlert('Login failed', 'Please try again!');
    }
  }
 
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  /*go() {
    this.router.navigate(['ferre']);
  }*/
  registro() {
    this.router.navigate(['registro']);
  }
  prueba() {
    this.router.navigate(['pruebas']);
  }
}
