import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { CandidateRoutingModule } from 'src/app/candidate/candidate-routing.module';
import { Candidate_Job } from 'src/app/models/candidate_job';
import { Job } from 'src/app/models/job';
import { CreateNotify } from 'src/app/models/createNotify';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.scss']
})
export class ListCandidateComponent implements OnInit {

  @Input() viewListCandidate:Array<Candidate>;
  @Output() Disible=new EventEmitter<string>();
  
  listCandidate1:Candidate[]=[

  ]

  listCandidate:Candidate[]=[

  ]
  _candidate:Candidate;

  listCandidate_Job:Candidate_Job[]=[

  ]
  _candidate_job:Candidate_Job;

  candidate:any[];
  cols1:any[];
  display: boolean = false;
  //lam viec voi co so du lieu
  idJob:any;
  ListCandidate:any[]=[];
  colsCandidate:any[];
  //
  constructor(private _Activatedroute:ActivatedRoute,private jobService:JobService) { }
  
  ngOnInit()
  {

    //lay ra danh sach cac ung vien
    this.idJob=this._Activatedroute.snapshot.params['id'];
    console.log(this.idJob);
    if(this.idJob!=null)
    {
     this.jobService.getCandidate(this.idJob)
     .subscribe(response => {
          this.ListCandidate=response;
          console.log('danh sach');
          console.log(this.ListCandidate);
     },err=>{
       //alert('an that  that bai');
     });
     
    }
    this.colsCandidate=[
      { field: 'id', header: 'idCandidate' },
      { field: 'email', header: 'Email' },
      { field: 'experience', header: 'Kinh Nghiem' },
      { field: 'nameSchool', header: 'Truong' },
      { field: 'phone', header: 'So dien thoai' },
      { field: 'scoreMedium', header: 'Diem trung binh' },
      { field: 'yearGraduation', header: 'Nam Hoc' },
      
    ]
    
    //

    this.cols1=[
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Emai' },
      { field: 'phone', header: 'Phone' },
      { field: 'nameScholl', header: 'NameSchool' },
      { field: 'ScoreMedium', header: 'ScoreMedium' },
      { field: 'experience', header: 'Experience' },
      { field: 'dateApply', header: 'DateApply' },
    ]

    this._candidate=new Candidate();
    this._candidate.idC=1;
    this._candidate.name="Nguyen Duc Huy";
    this._candidate.email="huy@gmail.com";
    this._candidate.phone="01656862225";
    this._candidate.nameScholl="DHCN";
    this._candidate.scoreMedium=3;
    this._candidate.experience="HTML,C#,C++";
    this._candidate.idC=1;
    this._candidate.dateApply="12/4/2019";
    this.listCandidate.push(this._candidate);

    this._candidate_job=new Candidate_Job();
    this._candidate_job.idC=1;
    this._candidate_job.idjob=1;
    this.listCandidate_Job.push(this._candidate_job);


    this.candidate = [
      { Name:'Nguyen Duc Huy',Emai:'a@gmail.com',Phone:'01679297879',NameSchool:'DaiHocCongNghiep',ScoreMedium:'3.1',Experience:'C#,Java,Node,C++',DateApply:'21-3-2019',id:'1',idC: 'UV1' },
      { Name:'TranAnhTuan',Emai:'bc@gmail.com',Phone:'0123456789',NameSchool:'DaiHocCongNghiep',ScoreMedium:'3.5',Experience:'C#',DateApply:'22-3-2019',id:'2',idC: 'UV2' },
      { Name:'Do Cao Tri',Emai:'xxxx@gmail.com',Phone:'0123456852',NameSchool:'DaiHocCongNghiep',ScoreMedium:'3.3',Experience:'C#,Java',DateApply:'23-3-2019',id:'2',idC: 'UV3' },
      { Name:'Nguyen Tien Lam',Emai:'asd@gmail.com',Phone:'0123654789',NameSchool:'DaiHocCongNghiep',ScoreMedium:'3.4',Experience:'Node Js',DateApply:'24-3-2019',id:'4',idC: 'UV4' },
      { Name:'Do Hoang Tuan',Emai:'ttt@gmail.com',Phone:'01235236875',NameSchool:'DaiHocCongNghiep',ScoreMedium:'3.7',Experience:'C++',DateApply:'25-3-2019',id:'1',idC: 'UV5' },
      { Name:'Nguyen Cong Phuong',Emai:'ss@gmail.com',Phone:'0123525236789',NameSchool:'DaiHocCongNghiep',ScoreMedium:'3.9',Experience:'C#',DateApply:'26-3-2019',id:'1',idC: 'UV6'},
    ];
   
  }
  showDialog() {
    this.display = true;
}
  ngChange ()
  {
      console.log('xx');
  }
  DanhSach(x:Candidate)
  {
    console.log(x);
  }
  disible()
  {
    this.Disible.emit('xx');
    console.log('concac');
  }
  //lam viec voi co so du lieu
  ViewCandidate(x:any)
  {
    console.log(x);
    this.display=true;
  }
 

}
