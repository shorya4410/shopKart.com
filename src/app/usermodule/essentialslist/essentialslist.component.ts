import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-essentialslist',
  templateUrl: './essentialslist.component.html',
  styleUrls: ['./essentialslist.component.css']
})
export class EssentialslistComponent implements OnInit {
  getEss : any = [];
  getVal : any;
  getUserData : any;
  getValLTH : any ;
  getEssLTH : any = [];
  getValHTL : any;
  getEssHTL : any = [];
  display = 3;
  Idd : any ;
  basicUrl = 'http://localhost:3000/Products';
  basicUserURL = 'http://localhost:3000/Userdata';
  constructor( private http : HttpClient) { }

  ngOnInit(): void {
    this.Idd = localStorage.getItem('Id');
    this.display = 3;
    this.http.get(`${this.basicUrl}`).subscribe(dataMain =>{
      this.getVal = dataMain;
      console.log(this.getVal);  
      this.http.get(`${this.basicUserURL}/${this.Idd}`).subscribe(data2 =>{
        this.getUserData = data2;
      })
    });
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
  seeEss(){
    this.getEss = [];
    this.display = 3;
    for(let i = 0 ; i < this.getVal.length ; i++){
      if(this.getVal[i]['itemType']== "Essentials"){
        this.getEss.push(this.getVal[i]);
      }
    }
    console.log(this.getEss);
  }
  priceLTH(){
    this.getEssLTH = [];
    this.display = 1;
    this.http.get(`${this.basicUrl}?_sort=${"itemPrice"}&_order=asc`).subscribe(data1 =>{
      this.getValLTH = data1;
      for(let i = 0 ; i < this.getValLTH.length ; i++){
        if(this.getValLTH[i]['itemType']== "Essentials"){
          this.getEssLTH.push(this.getValLTH[i]);
        }
      }
    });
    console.log(this.getEssLTH);  
  }
  priceHTL(){
    this.getEssHTL = [];
    this.display=2 ;
    this.http.get(`${this.basicUrl}?_sort=${"itemPrice"}&_order=desc`).subscribe(data2 =>{
      this.getValHTL = data2;
      for( let j = 0 ; j < this.getValHTL.length ; j++){
        if (this.getValHTL[j]['itemType'] == "Essentials") {
          this.getEssHTL.push(this.getValHTL[j]);
        }
      }
    });
    console.log(this.getEssHTL);
  }
  


}
