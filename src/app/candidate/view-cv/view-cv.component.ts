import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.scss']
})
export class ViewCVComponent implements OnInit {
  img:string;
  constructor(private candidateService:CandidateService,private jobService: JobService) {
    
    this.jobService.getCV(this.candidateService.getId())
      .subscribe(res =>{
        this.img=res;
        alert(this.img);
      });
    }

  ngOnInit() {
  }

}
