import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { DetailCandidateComponent } from './detail-candidate/detail-candidate.component';
import { InfoCandidateComponent } from './info-candidate/info-candidate.component';
import { DetailCVComponent } from './detail-cv/detail-cv.component';
import { HistoryComponent } from './history/history.component';
import { ListWorkComponent } from './list-work/list-work.component';

const routes: Routes = [
  {path: '', component: AdminComponent, pathMatch: 'full',},
  {path: 'listWork', component:ListWorkComponent},
  {path: 'danhsach/:id', component: ListCandidateComponent,
    // children:[
    //   {path:'info',component:InfoCandidateComponent},
    //   {path:'viewCV',component:DetailCVComponent},
    //   {path:'history',component:HistoryComponent}
    // ]
  },
  {path: 'detail/:id/:idJob', component:InfoCandidateComponent},
  {path: 'viewCV/:id/:idJob', component:DetailCVComponent},
  {path: 'history/:id/:idJob', component:HistoryComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
