import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIComponent } from './api/api.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EncryptionComponent } from './encryption/encryption.component';
import { DecryptionComponent } from './decryption/decryption.component';



@NgModule({
  declarations: [
    AppComponent,
    APIComponent,
    NavbarComponent,
    EncryptionComponent,
    DecryptionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
