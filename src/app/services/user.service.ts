import { AppUser } from './../models/app-user';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }


  get(user: any): AngularFireObject<AppUser>{
    return this.db.object('/users/' + user.uid);
  }
}
