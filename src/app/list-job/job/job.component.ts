import { Component, OnInit, Input } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobService } from 'src/app/service/job.service';
import { SaveJob } from 'src/app/models/saveJob';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() item:any;
  check=false;
  checkApply=false;
  x:SaveJob;
  Save()
  {
    if(this.candidateService.IsLogged()==false)
    {
      alert('Vui long dang nhap vao trong he thong');
    }
    else
    {
      this.x=new SaveJob();
      this.x.idJob=this.item.idJob;
      this.x.idUser=this.candidateService.getId();
     // console.log(this.item.idJob);
     // console.log(this.candidateService.getId());
      this.jobService.saveJob(this.x)
      .subscribe(res =>{
      });
      this.check=true;
    }
  }
  constructor(private candidateService:CandidateService,private jobService: JobService) { }

  ngOnInit() {
    if(this.candidateService.IsLogged()==true)
    {

    this.x=new SaveJob();
    this.x.idJob=this.item.idJob;
    this.x.idUser=this.candidateService.getId();
    
    this.jobService.checkSaveJob(this.x)
    .subscribe(res =>{
      if(res=="OK")
      {
        this.check=true;
      }
      else
      {
        this.check=false;
      }
    });

    this.x=new SaveJob();
      this.x.idJob=this.item.idJob;
      this.x.idUser=this.candidateService.getId();
      this.jobService.checkApplyJob(this.x)
      .subscribe(res =>{
        if(res=="OK")
        {
          this.checkApply=true;
        }
    });

  }
  }
  UnSave()
  {
    if(this.candidateService.IsLogged()==true)
    {
    this.x=new SaveJob();
    this.x.idJob=this.item.idJob;
    this.x.idUser=this.candidateService.getId();
    this.jobService.unCheckSaveJob(this.x)
    .subscribe(res =>{
      if(res=="OK")
      {
        this.check=false;
      }
      else
      {
        this.check=true;
      }
    });
  }
}

}
