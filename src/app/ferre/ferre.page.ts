import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-ferre',
  templateUrl: './ferre.page.html',
  styleUrls: ['./ferre.page.scss'],
})
export class FerrePage implements OnInit {
  profile = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private avatarService: AvatarService,
    private loadingController: LoadingController,
    private alertController: AlertController
    ) {
      this.avatarService.getUserProfile().subscribe((data) => {
        this.profile = data;
      });
     }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/home', {replaceUrl:true});
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });
 
    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();
 
      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();
 
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

  go(){
    this.router.navigate(['home']); 
  }
  listado(){
    this.router.navigate(['listado'])
  }
  martillos(){
    this.router.navigate(['martillos']);
  }
  taladros(){
    this.router.navigate(['taladros']);
  }
  destornilladores(){
    this.router.navigate(['destornilladores']);
  }
  alicates(){
    this.router.navigate(['alicates']);
  }
  metros(){
    this.router.navigate(['metros']);
  }
  Marcas(){
    this.router.navigate(['marcas']);
  }
  Soluciones(){
    this.router.navigate(['soporte'])
  }

  ngOnInit() {
  }

}
