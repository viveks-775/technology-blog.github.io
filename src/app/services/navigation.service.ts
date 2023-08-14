// admin.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private isAdminLoggedIn: boolean = false;

    constructor() { }

    login() {
        this.isAdminLoggedIn = true;
        window.localStorage.setItem('isAdminLogin', 'true');
    }

    logout() {
        this.isAdminLoggedIn = false;
        window.localStorage.removeItem('isAdminLogin');
    }

    isLoggedIn(): boolean {
        return window.localStorage.getItem('isAdminLogin') ? true : false;
    }
}
