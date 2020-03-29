import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{AuthService} from '../../services/auth.service';
import {User} from '../../shared/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User =new User();
  constructor(private authSvc:AuthService, private router:Router) { }
  
  ngOnInit() {
  }

  async onRegister(){ 
    const user=await this.authSvc.onRegister(this.user);
    if(user){
      
      console.log('Usuario creado ');
      this.router.navigateByUrl('/start');
    }
  }

}
