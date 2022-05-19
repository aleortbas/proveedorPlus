import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore) {}

  async create(collection, data) {
    try {
      return await this.firestore.collection(collection).add(data);
    } catch (error) {
      console.log('Error al crear' + error);
    }
  }

  async getAll(collection) {
    try {
      return await this.firestore.collection(collection).snapshotChanges();
    } catch (error) {
      console.log('Error en GET' + error);
    }
  }

  async getById(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch (error) {
      console.log('Error en GETById' + error);
    }
  }

  async delete(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch (error) {
      console.log('Error en DELETE' + error);
    }
  }

  async update(collection, id, data) {
    try {
      return await this.firestore.collection(collection).doc(id).set(data);
    } catch (error) {
      console.log('Error update' + error);
    }
  }



}
