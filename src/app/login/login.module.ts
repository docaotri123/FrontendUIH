import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';

import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
