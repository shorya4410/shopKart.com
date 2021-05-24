import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  checkDetails : any = {};
  checkAdmin : any = {};
  basicAdminUrl = 'http://localhost:3000/AdminData/1';
  basicUserUrl = 'http://localhost:3000/Userdata';
  constructor( private http : HttpClient, private router : Router) { }
  
  userLoginAuthenticate(userEmail, userPassword ){ 
    this.http.get(`${this.basicUserUrl}`).subscribe(checkVal =>{
      this.checkDetails = checkVal;
      for( let i =0 ; i < this.checkDetails.length ; i++){
          if( this.checkDetails[i].Email == userEmail && this.checkDetails[i].Password == userPassword){
            console.log("details verified");
            this.router.navigateByUrl('userDash');
            localStorage.setItem('Id', this.checkDetails[i].id);
          } 
          else{
            alert("Details Incorrect");
            return;
          }
        } 
           
    });
    
  }
  AdminloginAuthenticate(AdmName, AdmPassword){
    this.http.get(`${this.basicAdminUrl}`).subscribe(checkVal2 =>{
      this.checkAdmin = checkVal2;
      //console.log(this.checkAdmin);
      if( this.checkAdmin.AdminUserName == AdmName && this.checkAdmin.AdminPassword == AdmPassword)
      {
        this.router.navigateByUrl('adminDash');
        localStorage.setItem('Token', "true");
      }
      else{
        console.error("Enter Correct Details");  
      }
    })
  }
}
