import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {TabViewModule} from 'primeng/tabview';
import { ListWorkComponent } from './list-work/list-work.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { AcountComponent } from './acount/acount.component';
import {TableModule} from 'primeng/table';
import { SliderModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DetailCandidateComponent } from './detail-candidate/detail-candidate.component';
import {DialogModule} from 'primeng/dialog';

import {RatingModule} from 'primeng/rating';
import { ChartsModule } from 'ng2-charts';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ToastModule} from 'primeng/toast';
import {InplaceModule} from 'primeng/inplace';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InfoCandidateComponent } from './info-candidate/info-candidate.component';
import {PasswordModule} from 'primeng/password';
import { InfoCompanyComponent } from './info-company/info-company.component';
import { MessageModule, KeyFilterModule } from 'primeng/primeng';

import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import { DatePipe } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { DetailCVComponent } from './detail-cv/detail-cv.component';









@NgModule({
  declarations: [HeaderComponent, AdminComponent, FooterComponent, ListWorkComponent, PostJobComponent, ListCandidateComponent, AcountComponent, DetailCandidateComponent, InfoCandidateComponent, InfoCompanyComponent, HistoryComponent, DetailCVComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    TabMenuModule,
    TabViewModule,
    TableModule,
    SliderModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    InputTextareaModule,
    ScrollingModule,
    ReactiveFormsModule,
    DialogModule,
    ChartsModule,
    RatingModule,
    OrganizationChartModule,
    ToastModule,
    InplaceModule,
    CalendarModule,
    RadioButtonModule,
    PasswordModule,
    MessageModule,
    TreeModule,
  

    
    
    
    
    


 
    
   
    
  ]
})
export class AdminModule { }
