import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  isAdminLogin: boolean = false;

  constructor(private navigationService: NavigationService, private route:Router) {
   this.isAdminLoggedIn();
  }

  isAdminLoggedIn(): boolean {
    return this.navigationService.isLoggedIn();
  }

  logout(){
    this.navigationService.logout();
    this.route.navigate(['/admin']);
  }

}
