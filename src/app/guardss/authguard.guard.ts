import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  canActivate() {
    if( localStorage.getItem('Id')){
      return true;
    }
    else if (localStorage.getItem('Token')) {
      return true;
    }
    else{
      return false;
    }
    
  }
  
}
