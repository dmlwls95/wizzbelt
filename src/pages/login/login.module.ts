import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SignupPage } from '../signup/signup';

@NgModule({
  declarations: [
    LoginPage,
    SignupPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage)
  ],
})
export class LoginPageModule {}
