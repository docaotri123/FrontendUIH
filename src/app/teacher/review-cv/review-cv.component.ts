import { Component, OnInit } from '@angular/core';
import { ReviewCV } from 'src/app/models/reviewCV';
import { JobService } from 'src/app/service/job.service';
import { PointCandidateService } from 'src/app/service/point-candidate.service';

@Component({
  selector: 'app-review-cv',
  templateUrl: './review-cv.component.html',
  styleUrls: ['./review-cv.component.scss']
})
export class ReviewCVComponent implements OnInit {
  reviewCV:ReviewCV;
  nhanXet:string;
  check:boolean;
  constructor(private pointCandidate:PointCandidateService,private jobService:JobService) { }
  ngOnInit() {
    this.check=false;
    this.jobService.checkDanhGia(this.pointCandidate.MSSV)
     .subscribe(response => {
        if(response=="OK")
        { 
          this.check=true;
        }
    },err=>{
    
    });
  }
  XacNhan()
  {
     this.reviewCV=new ReviewCV();
     this.reviewCV.danhGia=this.nhanXet;
     this.reviewCV.userName=this.pointCandidate.MSSV;
     this.jobService.reviewCV(this.reviewCV)
     .subscribe(response => {
        if(response=="OK")
        { 
          this.check=true;
        }
        
     },err=>{
        
     });

  }

}
