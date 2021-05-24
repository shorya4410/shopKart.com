import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePageComponent,
    AdminloginComponent
  ]
})
export class HomeModule { }
