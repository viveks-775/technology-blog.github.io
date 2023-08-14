import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  modalMessage: string = '';

  constructor(private route: Router, private navigationService:NavigationService) {}

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      // Perform admin login logic here
      if (this.username === 'admin' && this.password === '123') {
        console.log('Login successful');
        this.navigationService.login();
        this.route.navigate(['/admin/posts']);
      } else {
       console.log('Invalid credentials');
      }
    }
  }
}
