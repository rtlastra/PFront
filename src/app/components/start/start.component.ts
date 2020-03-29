import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private authSvc: AuthService) { }
  ngOnInit() {
  }

  async onLogin() {
    const user = await this.authSvc.onLogin(this.user);
    if (user) {
      console.log('Inicio correcto');
      this.router.navigateByUrl('/');
    }
  }
}
