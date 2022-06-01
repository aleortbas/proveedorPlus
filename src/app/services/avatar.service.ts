import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { create } from 'domain';
import { uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage
  ) {}

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef, { idField: 'id' });
  }

  async uploadUserInfo(cameraFile: Photo, name, phoneNumber, address, email, password) {
    const user = this.auth.currentUser;
    const path = `uploads/${user.uid}/profile.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');

      const imageUrl = await getDownloadURL(storageRef);
      const Name = name;
      const Address = address;
      const PhoneNumber = phoneNumber;
      const Email = email;
      const Password = password;

      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await setDoc(userDocRef, {
        imageUrl,
        Name,
        Address,
        Email,
        Password,
        PhoneNumber
      });
      return true;
    } catch (e) {
      return null;
    }
  }

  async uploadFactura(direccion, telefono, medioPago, entregaExpres, userId) {
    const user = this.auth.currentUser;

    //console.log("userID: " + userId)

    var id = "id" + Date.now().toString(36) + Math.random().toString(36).toUpperCase().substr(2);

    console.log("ID: " + id)
    
    const userDocRef = doc(this.firestore, `factura/${id}`);
    await setDoc(userDocRef, {
      direccion,
      telefono,
      medioPago,
      entregaExpres,
      userId,
    });
    return true;
  }
}
