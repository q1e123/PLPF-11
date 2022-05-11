import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { CryptoManagerComponent } from './crypto-manager/crypto-manager.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserLoggedComponent } from './user-logged/user-logged.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CryptoManagerComponent,
    LoginComponent,
    UserLoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
