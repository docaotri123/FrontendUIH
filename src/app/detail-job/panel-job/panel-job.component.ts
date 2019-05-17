import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { CandidateService } from 'src/app/service/candidate.service';
import { SaveJob } from 'src/app/models/saveJob';

@Component({
  selector: 'app-panel-job',
  templateUrl: './panel-job.component.html',
  styleUrls: ['./panel-job.component.scss']
})
export class PanelJobComponent implements OnInit {
  @Input() item:any;
  checkSave=false;
  checkApply=false;
  display: boolean = false;
  listCandidate:any;
  infoJob:any;
  conCac:any[]=[];
  x:SaveJob;
  y:SaveJob;
  
  constructor(private jobService: JobService,private candidateService:CandidateService) { }

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
          this.checkSave=true;
        }
        else
        {
          this.checkSave=false;
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
  
  showDialog() {
    
    if(this.candidateService.IsLogged()==true)
    {
      this.display = true;
      this.jobService.getInfoCandidate(this.candidateService.getId())
      .subscribe(res =>{
        this.listCandidate=res;
        
      });
    }
    else
    {
      alert('Vui long dang nhap vap he thong');
    }
    this.infoJob=this.item;
  }
  ApplyJob()
  {
    if(this.candidateService.IsLogged()==true)
    {
      this.x=new SaveJob();
      this.x.idJob=this.item.idJob;
      this.x.idUser=this.candidateService.getId();
      this.jobService.applyJob(this.x)
      .subscribe(res =>{
        alert("Nop don ung tuyen thanh cong");
        this.checkApply=true;
       });
    }
    else
    {
      alert('Vui long dang nhap he thong');
    }
  }
  SaveWork()
  {
    if(this.candidateService.IsLogged()==true)
    {
      this.x=new SaveJob();
      this.x.idJob=this.item.idJob;
      this.x.idUser=this.candidateService.getId();
      this.jobService.saveJob(this.x)
      .subscribe(res =>{
        this.checkSave=true;
      });
    }
    else
    {
      alert('Vui long dang nhap he thong');
    }
  }
  UnSaveWork()
  {
    if(this.candidateService.IsLogged()==true)
    {
    this.x=new SaveJob();
    this.x.idJob=this.item.idJob;
    this.x.idUser=this.candidateService.getId();
    this.jobService.unCheckSaveJob(this.x)
    .subscribe(res =>{
      this.checkSave=false;
    });
    }
    else
    {
      alert('Vui long dang nhap vao he thong')
    }
}

}
