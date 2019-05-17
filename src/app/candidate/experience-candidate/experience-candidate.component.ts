import { Component, OnInit, Input } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { forEach } from '@angular/router/src/utils/collection';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-experience-candidate',
  templateUrl: './experience-candidate.component.html',
  styleUrls: ['./experience-candidate.component.scss']
})
export class ExperienceCandidateComponent implements OnInit {
  cd:string;
  ct:string;
  date2: Date = new Date("2/1/2019");
  date3:Date=new Date("2/4/2019");
  mt:string;
  a:string;
  b:string;
  x:string;
  y:string;

  constructor(private candidateService:CandidateService,private jobService: JobService) { }
  @Input() candidateExperience:any;
  cc:any[]=[];
  loz:any;



  ngOnInit() {
  this.x="visible";
  this.y="hidden";
  if(this.candidateService.IsLogged()==true)
  {
    console.log(this.cc.length);

    this.jobService.getExperience(this.candidateService.getId())
       .subscribe(res =>{
         this.cc=res;
         this.mt=this.cc[0].moTa;
       
    });
    
  }
  }
  onSubmit()
  {
    const cc=this.date2.getMonth()+1;
    const cc1=this.date2.getDate();
    const cc2=this.date2.getFullYear();
    this.a=""+cc+"/"+cc1+"/"+cc2;

    const ca=this.date2.getMonth()+1;
    const ca1=this.date2.getDate();
    const ca2=this.date2.getFullYear();
    this.b=""+ca+"/"+ca1+"/"+ca2;
    this.x="hidden";
    this.y="visible";
    
  }
  Edit()
  {
    this.x="visible";
    this.y="hidden";
  }

}
