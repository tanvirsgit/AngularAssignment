import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TransformDirective } from './shared-module/transform.directive';
//import { GetFullname } from './shared-module/getname.pipe';
import { UserModule } from './user-module/user.module';
//import { AdminModule } from './admin-module/admin.module';
import { AuthModule } from './auth-module/auth.module';
import { SharedModule } from './shared-module/shared.module';
import { AdminModule } from './admin-module/admin.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { AdminModule } from './admin-module/admin.module';



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
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
