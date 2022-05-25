import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AvatarService } from '../services/avatar.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  credentials: FormGroup;
  profile = null;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private avatarService: AvatarService,
  ) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
  }
  test:any;

  go() {
    this.router.navigate(['ferre']);
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      addres: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get name() {
    return this.credentials.get('name');
  }

  get email() {
    return this.credentials.get('email');
  }
 
  get password() {
    return this.credentials.get('password');
  }  

  get celular() {
    return this.credentials.get('celular');
  }

  get addres() {
    return this.credentials.get('addres');
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();
 
    if (user) {
      this.showAlert('Complete el formulario', 'Para acceder a la aplicacion');
    } else {  
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async changeImage() {
    const name = this.credentials.value.name;
    const address = this.credentials.value.addres;
    const phone = this.credentials.value.celular;
    console.log("phone"+phone)
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });
 
    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();
 
      const result = await this.avatarService.uploadUserInfo(image, name, phone, address);
      loading.dismiss();
      this.router.navigateByUrl('/ferre', { replaceUrl: true });

 
      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
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
}
