import { Component, OnInit } from '@angular/core';
import { SaveWork } from '../../models/saveWork';
import { JobService } from 'src/app/service/job.service';
import { CandidateService } from 'src/app/service/candidate.service';
@Component({
  selector: 'app-list-applywork',
  templateUrl: './list-applywork.component.html',
  styleUrls: ['./list-applywork.component.scss']
})
export class ListApplyworkComponent implements OnInit {
  testcc = ['A','B','C'];
  listJob: SaveWork[] = [
    {idJob:1,nameJob:'Tuyển nhân viên C#',yeuCau:'C#,C,C++',startDate:'1-4-2019',endDate:'30-4-2019',locationJob:'Hồ Chí Minh',img:'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png',ungVien:'Mới tốt nghiệp'},
    {idJob:2,nameJob:'Tuyển nhân viên Java',yeuCau:'Java,Html',startDate:'1-4-2019',endDate:'20-4-2019',locationJob:'Hà Nội',img:'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg',ungVien:'Mới tốt nghiệp'},
    {idJob:3,nameJob:'Sinh viên C++',yeuCau:'C,C++',startDate:'1-4-2019',endDate:'6-4-2019',locationJob:'Tây Ninh',img:'https://itviec.com/blog/wp-content/uploads/2018/05/C-e1527463988593.png',ungVien:'Mới tốt nghiệp'},
  ];
  listApply:any[]=[];


  constructor(private candidateService:CandidateService,private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getApplyJob(this.candidateService.getId())
    .subscribe(res =>{
      this.listApply=res;
      console.log(this.listApply);
      
    });

  }

}
