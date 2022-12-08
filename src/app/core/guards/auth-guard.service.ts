import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  private isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  canActivate() {
    const token = localStorage.getItem('token');

    if (token) this.isAuthenticated = true;
    else this.isAuthenticated = false;

    if (!this.isAuthenticated) this.router.navigate(['login']);

    return this.isAuthenticated;
  }
}
