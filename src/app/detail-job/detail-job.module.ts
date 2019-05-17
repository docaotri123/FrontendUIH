import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DetailJobRoutingModule } from './detail-job-routing.module';
import { PanelJobComponent } from './panel-job/panel-job.component';
import { DescriptionJobComponent } from './description-job/description-job.component';
import { InfoJobComponent } from './info-job/info-job.component';
import { DetailJobComponent } from './detail-job/detail-job.component';
import { SimilarJobComponent } from './similar-job/similar-job.component';
import {ButtonModule} from 'primeng/button';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [PanelJobComponent, DescriptionJobComponent, InfoJobComponent, DetailJobComponent, SimilarJobComponent, ApplyJobComponent],
  imports: [
    CommonModule,
    DetailJobRoutingModule,
    ButtonModule,
    DialogModule,
    FileUploadModule,
    HttpClientModule,
    HttpModule,
    PdfViewerModule
    
  ]
})
export class DetailJobModule { }
