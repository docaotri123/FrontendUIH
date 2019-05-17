import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { InfoPointComponent } from './info-point/info-point.component';
import { InfoStudentComponent } from './info-student/info-student.component';
import {DialogModule} from 'primeng/dialog';

import {TabViewModule} from 'primeng/tabview';
import { AssessStudentComponent } from './assess-student/assess-student.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';
import { ChartsModule } from 'ng2-charts';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import {ChartModule} from 'primeng/chart';
import { ReviewCVComponent } from './review-cv/review-cv.component';


@NgModule({
  declarations: [TeacherComponent, ListStudentComponent, InfoPointComponent, InfoStudentComponent, AssessStudentComponent, ReviewCVComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    DialogModule,
    InputTextareaModule,
    FormsModule,
    CheckboxModule,
    RatingModule,
    ChartsModule,
    ButtonModule,
    TreeModule,
    ChartModule
    
    
  ]
})
export class TeacherModule { }
