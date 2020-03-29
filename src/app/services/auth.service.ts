import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import {User} from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public isLogged: any=false;
  constructor(public afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(user=>(this.isLogged= user));   
  }
  //login
  async onLogin(user:User){
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }catch(error){
      console.log('Error en el login',error);
    }
  }
  //register
  async onRegister(user:User){
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }catch(error){
      console.log('Error on register user',error);
    }
  }
}
