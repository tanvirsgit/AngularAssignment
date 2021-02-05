import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user-module/user.module';
import { AuthModule } from './auth-module/auth.module';
import { SharedModule } from './shared-module/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,

    BsDatepickerModule.forRoot(),

    UserModule,
    AuthModule,
    SharedModule,
    
  ],
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
