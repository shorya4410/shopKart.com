import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  showToAdmin=3;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  AddProducts(){
    this.showToAdmin=1;
  }
  SeeUsers(){
    this.showToAdmin=2;
  }
  goToHome(){
    this.showToAdmin=3;
  }
  logoutAdmin(){
    this.router.navigateByUrl('adminLogin');
  }
}
