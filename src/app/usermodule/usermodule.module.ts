import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashComponent } from './userdash/userdash.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { FormsModule } from '@angular/forms';
import { ClothinglistComponent } from './clothinglist/clothinglist.component';
import { ElectronicslistComponent } from './electronicslist/electronicslist.component';
import { EssentialslistComponent } from './essentialslist/essentialslist.component';



@NgModule({
  declarations: [
    UserdashComponent,
    MycartComponent,
    MyordersComponent,
    MyhomeComponent,
    ClothinglistComponent,
    ElectronicslistComponent,
    EssentialslistComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserdashComponent,
    MycartComponent
  ]
})
export class UsermoduleModule {
  
 }
