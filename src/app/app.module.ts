import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UsermoduleModule } from './usermodule/usermodule.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsermoduleModule,
    AdminmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
