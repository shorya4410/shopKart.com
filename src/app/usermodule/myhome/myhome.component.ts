import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  displayContent = 1;
  getProduct : any = [];
  getUser : any;
  userID : any;
  basicURL = 'http://localhost:3000/Products';
  basicUserURL = 'http://localhost:3000/Userdata';
  getCart = [
    ];
  productId : string;
  Idd : any;
  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.Idd = localStorage.getItem('Id');
    this.http.get(`${this.basicURL}`).subscribe(dataProduct =>{
        this.getProduct = dataProduct;
      console.log(this.getProduct);
    });
    this.http.get(`${this.basicUserURL}/${this.Idd}`).subscribe( mainData =>{
        this.getUser = mainData;
        this.userID = this.getUser.id; 
    });
  }
  sortByElectronics(){
    this.displayContent=2;
  }
  sortByClothing(){
    this.displayContent=3;
  }
  sortByEssentials(){
    this.displayContent=4;
  }
  goToHome(){
    this.displayContent=1;
  }
  AddToCart(productId){
    for(var j=0 ; j < this.getUser.MyCart.length ; j++)
    {
         if(this.getUser.MyCart[j]==productId)
         {
           alert("Already in Cart")
            return;
         }
    }
    
    this.getUser.MyCart.push(productId) ;
    const body=this.getUser;
    this.http.put(`${this.basicUserURL}/${this.Idd}`, body).subscribe(finalData =>{
      console.log(finalData); 
      this.getUser = finalData;
    })
  }

}
