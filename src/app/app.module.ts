import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PanelComponent } from './home/panel/panel.component';
import { LoginService } from './service/login.service';
import { CheckLoginGuard } from './guard/check_login.guard';
import { AdminService } from './service/admin.service';
import { CheckAdminGuard } from './guard/check_admin.guard';
import { CandidateService } from './service/candidate.service';
import { CheckCandidateGuard } from './guard/check_candidate.guard';

import {ButtonModule} from 'primeng/button';
import { LevelCandidateComponent } from './candidate/level-candidate/level-candidate.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [LoginService,CheckLoginGuard,AdminService,CheckAdminGuard,CandidateService,CheckCandidateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
