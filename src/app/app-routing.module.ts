import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CheckLoginGuard } from './guard/check_login.guard';
import { CheckAdminGuard } from './guard/check_admin.guard';
import { CheckCandidateGuard } from './guard/check_candidate.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'detailjob/:id',
    loadChildren: './detail-job/detail-job.module#DetailJobModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
   // canActivate:[CheckAdminGuard]
  },
  {
    path: 'candidate',
    loadChildren: './candidate/candidate.module#CandidateModule',
    canActivate:[CheckCandidateGuard]
  },
  {
    path: 'listjob/:id/:id1/:id2',
    loadChildren: './list-job/list-job.module#ListJobModule',
  },
  {
    path: 'teacher',
    loadChildren: './teacher/teacher.module#TeacherModule',
    // canActivate:[CheckLoginGuard]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
