import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate/candidate.component';
import { HeaderCandidateComponent } from './header-candidate/header-candidate.component';
import {TabViewModule} from 'primeng/tabview';
import { ProfileCandidateComponent } from './profile-candidate/profile-candidate.component';
import { InfomationCandidateComponent } from './infomation-candidate/infomation-candidate.component';
import { LevelCandidateComponent } from './level-candidate/level-candidate.component';
import { LangugaeCandidateComponent } from './langugae-candidate/langugae-candidate.component';
import { ExperienceCandidateComponent } from './experience-candidate/experience-candidate.component';
import { EducationCandidateComponent } from './education-candidate/education-candidate.component';
import { InfomationReferComponent } from './infomation-refer/infomation-refer.component';
import { DreamWorkComponent } from './dream-work/dream-work.component';
import { InfomationAddComponent } from './infomation-add/infomation-add.component';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import { MyWorkComponent } from './my-work/my-work.component';
import { SaveWorkComponent } from './save-work/save-work.component';
import { ApplyWorkComponent } from './apply-work/apply-work.component';
import { ListSaveworkComponent } from './list-savework/list-savework.component';
import { ListApplyworkComponent } from './list-applywork/list-applywork.component';
import { CreateNotifyWorkComponent } from './create-notify-work/create-notify-work.component';
import { NotifyWorkComponent } from './notify-work/notify-work.component';
import { ListNotifyworkComponent } from './list-notifywork/list-notifywork.component';
import {DialogModule} from 'primeng/dialog';
import { AccountCandidateComponent } from './account-candidate/account-candidate.component';
import {ReactiveFormsModule } from '@angular/forms';
import {MessageService} from 'primeng/api';
import {RatingModule} from 'primeng/rating';

import {PasswordModule} from 'primeng/password';
import { TableModule } from 'primeng/table';
import { MessageModule, KeyFilterModule } from 'primeng/primeng';
import { SharedModule, PanelModule } from 'primeng/primeng';
import {InplaceModule} from 'primeng/inplace';
import {InputTextModule} from 'primeng/inputtext';
import { ViewCVComponent } from './view-cv/view-cv.component';
@NgModule({
  declarations: [InfomationReferComponent,CandidateComponent, HeaderCandidateComponent, ProfileCandidateComponent, InfomationCandidateComponent, LevelCandidateComponent, LangugaeCandidateComponent, ExperienceCandidateComponent, EducationCandidateComponent, InfomationReferComponent, DreamWorkComponent, InfomationAddComponent, MyWorkComponent, SaveWorkComponent, ApplyWorkComponent, ListSaveworkComponent, ListApplyworkComponent, CreateNotifyWorkComponent, NotifyWorkComponent, ListNotifyworkComponent, AccountCandidateComponent, ViewCVComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    RadioButtonModule,
    CalendarModule,
    MultiSelectModule,
    DialogModule,
    PasswordModule,
    ReactiveFormsModule,
    MessageModule,
    KeyFilterModule,
    TableModule,
    PanelModule,
    InplaceModule,
    InputTextModule,
    RatingModule
  ]
})
export class CandidateModule { }
