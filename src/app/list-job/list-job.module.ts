import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListJobRoutingModule } from './list-job-routing.module';
import { ListJobComponent } from './list-job/list-job.component';
import { JobComponent } from './job/job.component';


@NgModule({
  declarations: [ListJobComponent, JobComponent],
  imports: [
    CommonModule,
    ListJobRoutingModule,
   ]
})
export class ListJobModule { }
