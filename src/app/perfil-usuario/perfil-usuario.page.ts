import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../services/avatar.service';
import { DatabaseService } from '../services/database.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  profile = null;
  usuario = []

  constructor(
    private avatarService: AvatarService,
    private database: DatabaseService,
    private router: Router,
  ) { 
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
      console.log(this.profile.id)
    });
  }

  ngOnInit() {
    this.database.getAll('users').then((firebaseResponse) => {
      firebaseResponse.subscribe((listamartilloRef) => {
        this.usuario = listamartilloRef.map((martilloRef) => {
          let martillo = martilloRef.payload.doc.data();
          martillo['id'] = martilloRef.payload.doc.id;
          return martillo;
        });
      });
    });
  }

  atras() {
    this.router.navigate(['ferre']);
  }
}
