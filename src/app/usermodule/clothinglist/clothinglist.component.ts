import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothinglist',
  templateUrl: './clothinglist.component.html',
  styleUrls: ['./clothinglist.component.css']
})
export class ClothinglistComponent implements OnInit {
  getCloth : any = [];
  getVal : any;
  getUserData : any;
  getValLTH : any ;
  getClothLTH : any = [];
  getValHTL : any;
  getClothHTL : any = [];
  display = 3;
  Idd : any;
  basicUrl = 'http://localhost:3000/Products';
  basicUserURL = 'http://localhost:3000/Userdata';
  constructor( private http : HttpClient) { 
  }

  ngOnInit(): void {
    this.display = 3;
    this.Idd = localStorage.getItem('Id');
    this.http.get(`${this.basicUrl}`).subscribe(dataMain =>{
      this.getVal = dataMain;
      console.log(this.getVal);  
      this.http.get(`${this.basicUserURL}/${this.Idd}`).subscribe(data2 =>{
        this.getUserData = data2;
      })
    });
    this.seeCloth();
    
  }
  AddToCart(productId){
    for(var j=0 ; j < this.getUserData.MyCart.length ; j++)
    {
         if(this.getUserData.MyCart[j]==productId)
         {
           alert("Already in Cart")
            return;
         }
    }
    
    this.getUserData.MyCart.push(productId) ;
    const body=this.getUserData;
    this.http.put(`${this.basicUserURL}/${this.Idd}`, body).subscribe(finalData =>{
      console.log(finalData); 
      this.getUserData = finalData;
    })
  }
  seeCloth(){
    this.getCloth = [];
    this.display = 3;
    for(let i = 0 ; i < this.getVal.length ; i++){
      if(this.getVal[i]['itemType']== "Clothing"){
        this.getCloth.push(this.getVal[i]);
      }
    }
    console.log(this.getCloth);
  }
  priceLTH(){
    this.getClothLTH = [];
    this.display = 1;
    this.http.get(`${this.basicUrl}?_sort=${"itemPrice"}&_order=asc`).subscribe(data1 =>{
      this.getValLTH = data1;
      for(let i = 0 ; i < this.getValLTH.length ; i++){
        if(this.getValLTH[i]['itemType']== "Clothing"){
          this.getClothLTH.push(this.getValLTH[i]);
        }
      }
    });
    console.log(this.getClothLTH);  
  }
  priceHTL(){
    this.getClothHTL = [];
    this.display=2 ;
    this.http.get(`${this.basicUrl}?_sort=${"itemPrice"}&_order=desc`).subscribe(data2 =>{
      this.getValHTL = data2;
      for( let j = 0 ; j < this.getValHTL.length ; j++){
        if (this.getValHTL[j]['itemType'] == "Clothing") {
          this.getClothHTL.push(this.getValHTL[j]);
        }
      }
    });
    console.log(this.getClothHTL);
  }
  

}
