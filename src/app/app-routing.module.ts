import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './adminmodule/admindash/admindash.component';
import { AuthguardGuard } from './guardss/authguard.guard';
import { AdminloginComponent } from './home/adminlogin/adminlogin.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { UserdashComponent } from './usermodule/userdash/userdash.component';


const routes: Routes = [
  {
    path:'', component:HomePageComponent
  },
  {
    path: 'userDash', component:UserdashComponent,canActivate:[AuthguardGuard]
  },
  {
    path: 'adminLogin', component: AdminloginComponent
  },
  {
    path: 'adminDash', component: AdmindashComponent, canActivate:[AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
