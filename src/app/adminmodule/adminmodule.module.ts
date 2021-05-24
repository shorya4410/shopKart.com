import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { SeeusersComponent } from './seeusers/seeusers.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdmindashComponent,
    AddproductsComponent,
    SeeusersComponent,
    AdminhomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AdmindashComponent,
    AdminhomeComponent,
    SeeusersComponent,
    AddproductsComponent
  ]
})
export class AdminmoduleModule { }
