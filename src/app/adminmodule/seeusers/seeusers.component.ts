import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeusers',
  templateUrl: './seeusers.component.html',
  styleUrls: ['./seeusers.component.css']
})
export class SeeusersComponent implements OnInit {
  userdetail:any = [];
  basicUserUrl = 'http://localhost:3000/Userdata/';
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get(`${this.basicUserUrl}`).subscribe(details =>{
      this.userdetail = details;
    });
  }

}
