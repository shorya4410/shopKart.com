import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
value : any = 3;
basicURL = 'http://localhost:3000/Products';
basicUserURL = 'http://localhost:3000/userdata';
userData : any;
getMainData : any;
itemNameSearched : any;
imgUrl : any;
productName : any;
productPrice : any;
productStock : any;
found = 0;
searchText : any;
itemCartNo : any;
itemSearched : any;
searchProduct : any;
Idd : any ;
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.Idd = localStorage.getItem('Id');
   this.http.get(`${this.basicURL}`).subscribe(dataGet =>{
     this.getMainData = dataGet;
      this.http.get(`${this.basicUserURL}/${this.Idd}`).subscribe( data2 => {
        this.userData = data2;
        this.itemCartNo = this.userData.MyCart.length;
      });
   });
   

  }
  logout(){
    this.router.navigateByUrl('');
  }

  goToMyCart(){
    this.value = 1;
  }
  goToMyOrder(){
    this.value = 2;
  }
  goToMyHome(){
    this.value = 3;
  }

}
