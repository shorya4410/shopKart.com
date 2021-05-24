import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  addProduct : FormGroup;
  basicProductUrl = 'http://localhost:3000';
  productType : any;
  imagePath : any;
  imgURL : any;
  constructor( private http : HttpClient, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      'itemType' : new FormControl(null),
      'itemName' : new FormControl(null),
      'itemId' : new FormControl(null),
      'itemPrice' : new FormControl(null),
      'itemStock' : new FormControl(null),
      'itemColor' : new FormControl(null),
      'itemIMG' : new FormControl(null)
    });
  }
  addThisProduct(){
    console.log(this.addProduct.value.itemType);
    this.addProduct.value.itemIMG = this.imgURL;
    this.http.post(`${this.basicProductUrl}/${"Products"}`, this.addProduct.value).subscribe(postData =>{
      console.log(postData);  
      this.reload();
    });
    
  }
  preview(event: any) {
    const selectedfile=event.target.files[0];
    if (selectedfile.length === 0)
      return;

    const reader = new FileReader();
     this.imagePath = selectedfile;
    
     reader.readAsDataURL(selectedfile); 
     reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      console.log(this.imgURL)
    }

    console.log(selectedfile);
    
  }
  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }

}
