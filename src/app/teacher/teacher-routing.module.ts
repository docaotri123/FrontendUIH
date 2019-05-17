import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { CheckLoginGuard } from '../guard/check_login.guard';
import { InfomationAddComponent } from '../candidate/infomation-add/infomation-add.component';
import { LevelCandidateComponent } from '../candidate/level-candidate/level-candidate.component';
import { InfoPointComponent } from './info-point/info-point.component';
import { ReviewCVComponent } from './review-cv/review-cv.component';
import { AssessStudentComponent } from './assess-student/assess-student.component';

const routes: Routes = 
[
  {path: '', component: TeacherComponent},
  {path: 'ketqua/:id', component: InfoPointComponent},
  {path: 'xemCV', component: ReviewCVComponent},
  {path: 'hethongdanhgia', component: AssessStudentComponent},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
