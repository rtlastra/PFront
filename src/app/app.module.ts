import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/auth/login/login.component';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from './../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { }
