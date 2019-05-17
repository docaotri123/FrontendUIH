import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleriaModule} from 'primeng/galleria';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';



import { HomeRoutingModule } from './home-routing.module';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from '../layout/search/search.component';
import { JobChannelComponent } from './job-channel/job-channel.component';
import { ChannelComponent } from './channel/channel.component';
import { FavoriteJobComponent } from './favorite-job/favorite-job.component';
import { JobComponent } from './job/job.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
     PanelComponent,
     HomeComponent,SearchComponent, 
     JobChannelComponent, 
     ChannelComponent, 
     FavoriteJobComponent, 
     JobComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GalleriaModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    MultiSelectModule
  ]
})
export class HomeModule { }
