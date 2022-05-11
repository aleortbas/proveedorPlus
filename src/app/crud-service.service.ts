import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private firestore: AngularFirestore) { }

  create_NewUser(record){
    return this.firestore.collection('User').add(record)
  }
  read_User(){
    return this.firestore.collection('User').snapshotChanges();
  }
}
