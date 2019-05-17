import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListJobComponent } from './list-job/list-job.component';
import { DetailJobComponent } from '../detail-job/detail-job/detail-job.component';

const routes: Routes = 
[
  {path: '', component: ListJobComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListJobRoutingModule { }
