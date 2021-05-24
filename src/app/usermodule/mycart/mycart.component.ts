import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private http : HttpClient, private router: Router) { }
  getdata : any = [];
  getCart : any = [];
  totalPrice : any = 0;
  productData : any = [];
  Idd : any;
  basicUserURL = 'http://localhost:3000/userdata';
  basicProductURL = 'http://localhost:3000/Products';
  ngOnInit(): void {
    this.Idd = localStorage.getItem('Id');
    this.http.get(`${this.basicProductURL}`).subscribe(data2 =>{
        this.productData = data2;
        this.http.get(`${this.basicUserURL}/${this.Idd}`).subscribe(data1 => {
        this.getdata = data1;
        console.log(this.getdata.MyCart);
        for( let i =0 ; i < this.getdata.MyCart.length ; i++){
          for( let j=0 ; j< this.productData.length ; j++){
            if(this.getdata.MyCart[i] == this.productData[j].itemId){
              this.totalPrice = this.totalPrice + this.productData[j].itemPrice;
              this.getCart.push(this.productData[j]);
            }
         }
        } 
        console.log(this.getCart);   
      });
    });
    
  }
  PayOrder(){
    console.log("my orders");
    
  }
  removeProduct(Id : number){
    console.log(this.getdata.MyCart);
       this.getdata.MyCart.forEach((value, index)=>{
          if(value==Id) this.getCart.splice(index, 1 );
           console.log(this.getdata.MyCart);
       });
      this.getdata.MyCart.splice(Id);
      console.log(this.getdata.MyCart);
      this.http.patch(`${this.basicUserURL}/${this.Idd}`, {
        "MyCart" : this.getdata.MyCart
      }).subscribe(data3 =>{
        console.log(data3);
        
      })
  
  }


}
