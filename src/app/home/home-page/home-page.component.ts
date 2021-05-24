import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authenticate/authservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loginUser: FormGroup;
  UserRegister : FormGroup;
  showError = 0;
  login = 1;
  basicUserURL = 'http://localhost:3000/Userdata';
  constructor( private authService : AuthserviceService, private router:Router, private http : HttpClient) { }

  ngOnInit(): void {
    localStorage.removeItem('Id');
    localStorage.removeItem('Token');
    this.loginUser = new FormGroup ({
      'Email' : new FormControl(null),
      'Password':new FormControl(null)
    });
    this.UserRegister = new FormGroup({
      'id' : new FormControl(null, Validators.required),
      'UserName' : new FormControl(null, Validators.required),
      'Number' : new FormControl(null, Validators.required),
      'Email' : new FormControl(null, Validators.required),
      'Password' : new FormControl(null, Validators.required),
      'MyCart' : new FormArray([])
    })
  }
  CreateAcc(){
      this.http.post(`${this.basicUserURL}`, this.UserRegister.value).subscribe( data1 =>{
        console.log(data1);
        this.goToUlogin();
      })
  }
  goToCreateAcc(){
    this.login = 0 ;
    console.log("creating account"); 
  }
  goToUlogin(){
    this.login = 1;
  }
  loginUserfunc(){
    console.log(this.loginUser.value.Email);
    this.authService.userLoginAuthenticate(this.loginUser.value.Email, this.loginUser.value.Password);
  }
  goToAdminLogin(){
    this.router.navigateByUrl('adminLogin');
  }

}
