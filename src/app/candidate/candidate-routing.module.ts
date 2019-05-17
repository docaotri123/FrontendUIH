import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { HeaderCandidateComponent } from './header-candidate/header-candidate.component';
import { InfomationAddComponent } from './infomation-add/infomation-add.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ListNotifyworkComponent } from './list-notifywork/list-notifywork.component';
import { ListSaveworkComponent } from './list-savework/list-savework.component';
import { ListApplyworkComponent } from './list-applywork/list-applywork.component';
import { ViewCVComponent } from './view-cv/view-cv.component';

const routes: Routes = 
[
  {path: '', component: CandidateComponent},
  // {
  //    path: 'cc',component: HeaderCandidateComponent
  // }
  {path: 'thongTinCaNhan', component:InfomationAddComponent},
  {path: 'viecLamCuaToi', component:MyWorkComponent},
  { path: 'saveWork',component:ListSaveworkComponent },
  { path: 'applywork', component:ListApplyworkComponent},
  { path: 'viewCV', component:ViewCVComponent},
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
