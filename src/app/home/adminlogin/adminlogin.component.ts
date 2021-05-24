import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authenticate/authservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginAdmin : FormGroup;
  showError = 0;
  constructor( private router : Router, private authService : AuthserviceService) { }

  ngOnInit(): void {
    localStorage.removeItem('Token');
    this.loginAdmin = new FormGroup({
      'AdminUserName' : new FormControl(null),
      'AdminPassword' : new FormControl(null)
    });
  }
  loginAdminfunc(){
    console.log("logging in as admin");
    this.authService.AdminloginAuthenticate(this.loginAdmin.value.AdminUserName, this.loginAdmin.value.AdminPassword);
  }
  goToUserLogin(){
    this.router.navigateByUrl('');
  }

}
