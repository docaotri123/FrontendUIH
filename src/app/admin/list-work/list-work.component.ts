import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SelectItem} from 'primeng/components/common/api';
import { MessageService } from "primeng/components/common/messageservice";
import { Job } from 'src/app/models/job';
import { Candidate } from 'src/app/models/candidate';
import { Candidate_Job } from 'src/app/models/candidate_job';
import { JobService } from 'src/app/service/job.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { JobEdit } from 'src/app/models/jobedit';
import { DatePipe, formatDate } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';
import { TouchSequence } from 'selenium-webdriver';
import { CheckAdminGuard } from 'src/app/guard/check_admin.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.scss'],
  providers: [MessageService]
})
export class ListWorkComponent implements OnInit {
  // @Output() List: EventEmitter<Candidate[]> = new EventEmitter<Candidate[]>();
  List:Array<Candidate>=new Array<Candidate>();
  viewListCandidate:Job;
  xx:string;

  listCandidate:Candidate[]=[

  ]
  listCandidate2:Candidate[]=[

  ]
  _candidate:Candidate;

  listCandidate_Job:Candidate_Job[]=[

  ]
  _candidate_job:Candidate_Job;
  
  cols: any[];
  jobs: any[];
  maxSalary: any;
  minSalary:any;
  brands: SelectItem[];
  levels: SelectItem[];
  capBac:SelectItem[];
  kyNang:SelectItem[];
  clonedCars: { [s: string]: any; } = {};
  yearFilter: number;
  yearTimeout: any;
  display: boolean = false;
  display1: boolean = false;
  editJob:Job;
  x:string;
  

  listJob: Job[] = [
  ];
  job:Job;
  
  // Lam viec voi co so du lieu
  ListJob:any[]=[]
  ListCandidate:any[]=[];
  cols1: any[];
  congViec:Job;
  edit:JobEdit;
  themCongViec:JobEdit;
  themCongViec1:JobEdit;
 
  today= new Date();
  jstoday = '';
  d = new Date();
  curr_date = this.d.getDate();
  curr_month = this.d.getMonth()+1;
  curr_year = this.d.getFullYear()
  info=this.curr_year+"-0"+this.curr_month+"-"+this.curr_date;
  myStr: string = "2019-25-03T00:00:00";
  muStr1:string="2019-25-03";
  t:boolean;
  
  //
  constructor(private router: Router,private jobService:JobService,private messageService: MessageService) 
  {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(this.jstoday)
  }

  ngOnInit() 
  {
   
    this.jobService.getJob()
    .subscribe(res =>{
      this.ListJob=res;
      console.log(this.ListJob);
      // for(var x=0;x<this.ListJob.length;x++)
      // {
      //   console.log(this.ListJob[x].startdate);
      // }
    });


    this.editJob=new Job();

    this.job=new Job();
    this.job.idjob=1;
    this.job.chucDanh="Designer";
    this.job.capBac="Fresher";
    this.job.kyNang="C#,Html";
    this.job.moTa="Tuyển dụng Fresher C#";
    this.job.minSalary=200;
    this.job.maxSalary=10000;
    this.job.nganhNghe="KTPM";
    this.job.noiLamViec="Sài gòn";
    this.job.yeuCauCongViec="Gioi trong lập trình,biết về hướng đối tượng";
    this.job.lienHe="Nguyển đức Huy";
    this.job.hoSo="Bất kỳ";
    this.job.visible=true;
    this.listJob.push(this.job);
    

    this.job=new Job();
    this.job.idjob=2;
    this.job.chucDanh="Tester";
    this.job.capBac="Intership";
    this.job.kyNang="Java";
    this.job.moTa="Tuyển dụng Intership Java";
    this.job.minSalary=100;
    this.job.maxSalary=20000;
    this.job.nganhNghe="KHMT";
    this.job.noiLamViec="Sài gòn";
    this.job.yeuCauCongViec="Biết Test thử kiểm thử phần mềm";
    this.job.lienHe="Trần Anh Tuấn";
    this.job.hoSo="Bất kỳ";
    this.job.visible=true;
    this.listJob.push(this.job);

    this.x="hidden";





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
    this._candidate=new Candidate();
    this._candidate.idC=2;
    this._candidate.name="Do Cao Tri";
    this._candidate.email="Tri@gmail.com";
    this._candidate.phone="0165123123123";
    this._candidate.nameScholl="DHCN";
    this._candidate.scoreMedium=4;
    this._candidate.experience="C#,C++";
    this._candidate.dateApply="13/4/2019";
    this.listCandidate.push(this._candidate);


    this._candidate_job=new Candidate_Job();
    this._candidate_job.idC=1;
    this._candidate_job.idjob=1;
    this.listCandidate_Job.push(this._candidate_job);

    this._candidate_job=new Candidate_Job();
    this._candidate_job.idC=2;
    this._candidate_job.idjob=2;
    this.listCandidate_Job.push(this._candidate_job);

    
    // this.cols = [
    //   { field: 'id', header: 'id' },
    //   { field: 'MaxSalary', header: 'MaxSalary' },
    //   { field: 'MinSalayry', header: 'MinSalayry' },
    //   { field: 'Title', header: 'Title' },
    //   { field: 'Location', header: 'Location' },
    //   { field: 'Level', header: 'Level' },
    // ];
    this.cols = [
      { field: 'idjob', header: 'Id' },
      { field: 'chucDanh', header: 'ChucDanh' },
      { field: 'capBac', header: 'CapBac' },
      { field: 'kyNang', header: 'KyNang' },
      { field: 'nganhNghe', header: 'NganhNghe' },
      { field: 'moTa', header: 'MoTa' },
      { field: 'maxSalary', header: 'Luong'},
    ];
    this.cols1 = [
      { field: 'idJob', header: 'Id' },
      { field: 'desciption', header: 'Mota' },
      { field: 'title', header: 'TieuDe' },
      { field: 'maxSalary', header: 'MaxSalary' },
    ];

    // this.jobs = [
    //   { MaxSalary: '2000', MinSalayry: 500, Title: 'Fresher C#', Location: 'HoChiMinh', Time: '4 giờ trước', Level: 'Junior Dev', id: '1' },
    //   { MaxSalary: '3000', MinSalayry: 200, Title: 'Fresher Java', Location: 'HoChiMinh', Time: '2 giờ trước', Level: 'Senior Dev', id: '2' },
    //   { MaxSalary: '4000', MinSalayry: 300, Title: 'Fresher Android', Location: 'DacLac', Time: '1 giờ trước', Level: 'Senior Dev', id: '3' },
    //   { MaxSalary: '7000', MinSalayry: 500, Title: '.NET Solution Architect C#', Location: 'TayNinh', Time: '6 giờ trước', Level: 'Tester', id: '4' },
    //   { MaxSalary: '9000', MinSalayry: 600, Title: 'Fresher C#/.Net C++ Java', Location: 'HoChiMinh', Time: '6 giờ trước', Level: 'Internship', id: '5' },
    //   { MaxSalary: '4000', MinSalayry: 200, Title: 'Fresher C', Location: 'HaNoi', Time: '2 giờ trước', Level: 'Senior Dev', id: '6' },
    //   { MaxSalary: '7000', MinSalayry: 700, Title: 'Fresher Java', Location: 'SaiGon', Time: '3 giờ trước', Level: 'Senior Dev', id: '7' },
    // ];
    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'HoChiMinh', value: 'HoChiMinh' },
      { label: 'TayNinh', value: 'TayNinh' },
      { label: 'SaiGon', value: 'SaiGon' },
      { label: 'DacLac', value: 'DacLac' }
    ];
    this.capBac = 
    [
      { label: 'All Brands', value: null },
      {label: 'Intership', value: 'Intership'},
      {label: 'Fresher', value: 'Fresher'},
      {label: 'Developer', value: 'Developer'},
      {label: 'Tester', value: 'Tester'},
    ];
    this.levels = [
      { label: 'All Level', value: null },
      { label: 'Junior Dev', value: 'Junior Dev' },
      { label: 'Senior Dev', value: 'Senior Dev' },
      { label: 'Tester', value: 'Tester' },
      { label: 'Internship', value: 'Internship' }
  ];
    
  }
  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, 'maxSalary', 'gt');
    }, 250);
}

  onYearChange1(event, dt) {
    if (this.minSalary) {
        clearTimeout(this.minSalary);
    }

    this.minSalary = setTimeout(() => {
        dt.filter(event.value, 'MinSalayry', 'gt');
    }, 250);
  }
  Edit(job:Job)
  {
    console.log(job.idjob);
    this.display=true;
    this.editJob=job;
    

  }
  onRowEditInit(job:any) {
    this.clonedCars[job.id] = {...job};
    console.log(job);
  }
  onRowEditCancel(job: any, index: number) {
    this.jobs[index] = this.clonedCars[job.id];
        delete this.clonedCars[job.id];
      
  }
  onRowEditSave(job: any) {
  
    if (job.MaxSalary > 0) {
      delete this.clonedCars[job.id];
      this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
    }
    else {
      this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
  }
  suaJob(x:Job)
  {
    const index=this.listJob.findIndex(y=>y.idjob==x.idjob);
    this.listJob[index].capBac=x.capBac;
    this.listJob[index].kyNang=x.kyNang;
    this.listJob[index].maxSalary=x.maxSalary;
    this.listJob[index].minSalary=x.minSalary;
    this.listJob[index].moTa=x.moTa;
    this.listJob[index].yeuCauCongViec=x.yeuCauCongViec;
    this.listJob[index].hoSo=x.hoSo;
    this.listJob[index].lienHe=x.lienHe;
    this.listJob[index].chucDanh=x.chucDanh;
    this.listJob[index].nganhNghe=x.nganhNghe;
    this.listJob[index].lienHe=x.lienHe;
    this.listJob[index].idjob=x.idjob;
    this.listJob[index].visible=true;
    this.display=false;
  }
  Visible(x:Job)
  {
    const index=this.listJob.findIndex(y=>y.idjob==x.idjob);
    this.listJob[index].visible=false;
    this.x="visible";
  }
  Disible(job:Job)
  {
    const index=this.listJob.findIndex(y=>y.idjob==job.idjob);
    this.listJob[index].visible=true;
    this.x="hidden";
  }
  ViewCandidate(job:Job)
  {
    this.List=new Array<Candidate>();
     for(var i=0;i<this.listCandidate_Job.length;i++)
     {
        if(job.idjob==this.listCandidate_Job[i].idjob)
        {
          for(var y=0;y<this.listCandidate.length;y++)
          {
              if(this.listCandidate[y].idC==this.listCandidate_Job[i].idC)
              {
                this.List.push(this.listCandidate[y]);
              }
          }
        }
     }
     this.xx="visible";

  }
  disible(x:string)
  {
    this.xx="hidden";
    console.log('tai sao ko an di');
   // this.x="visible";
    //this.y="hidden";
  }
  Add()
  {
    this.display1=true;
  }
  AddJob(x:Job)
  {
    alert('2');
    this.themCongViec=new JobEdit();
    this.themCongViec1=new JobEdit();
    // this.themCongViec1.IdJob=x.idjob;
    // this.themCongViec1.Desciption=x.moTa;
    // this.themCongViec1.Title=x.title;
    // this.themCongViec1.MaxSalary=x.maxSalary;
    // this.themCongViec1.MinSalary=x.minSalary;
    
    // this.themCongViec1.loiIch=x.loiIch;
    // this.themCongViec1.yeuCau=x.yeuCau;
    // this.themCongViec1.quyenLoi=x.quyenLoi;
    // this.themCongViec1.email=x.lienHe;
    // this.themCongViec1.nhanHoSo=x.hoSo;


    
    // this.themCongViec1.IdJob=x.idjob;
     this.themCongViec1.Desciption=x.moTa;
     this.themCongViec1.Title=x.title;
     this.themCongViec1.MaxSalary=x.maxSalary;
     this.themCongViec1.MinSalary=x.minSalary;
     this.themCongViec1.loiIch=x.loiIch;
     this.themCongViec1.yeuCau=x.yeuCau;
     this.themCongViec1.quyenLoi=x.quyenLoi;
    
     this.themCongViec1.chucDanh=x.chucDanh;
     this.themCongViec1.nganhNghe=x.nganhNghe;
     this.themCongViec1.email=x.lienHe;
     this.themCongViec1.nhanHoSo=x.hoSo;
    
   
      this.jobService.addJob(this.themCongViec1)
      .subscribe(response => {
         alert('them thanh cong');
      },err=>{
         alert('THEM that bai');
      });
      alert(this.themCongViec.Desciption);
      this.display1=false;
    
      

    // this.listJob.push(job);
    // for(var i=0;i<this.listJob.length;i++)
    // {
    //   for(var y=i+1;y<this.listJob.length;y++)
    //   {
    //     if(this.listJob[i].idjob==this.listJob[y].idjob)
    //     {
        
    //       this.listJob.splice(i,1);
    //     }
    //   }
    // }
    // this.display1=false;

  }
  //lam viec vs CSDL
  Sua(x:any)
  {
    // this.jobService.editJob(x)
    // .subscribe(response => {
    //   alert('sua thanh cong');
    //   this.ListJob=response;
    // },err=>{
    //   alert('sua that bai');
    // });
    this.congViec=new Job();
    this.congViec.idjob=x.idJob;
    this.congViec.maxSalary=x.maxSalary;
    this.congViec.minSalary=x.minSalary;
    this.congViec.moTa=x.desciption;
    this.congViec.title=x.title;
    this.congViec.starDate=x.starDate;
    this.congViec.endDate=x.endDate;
    this.congViec.yeuCau=x.yeuCau;
    this.congViec.quyenLoi=x.quyenLoi;
    this.congViec.loiIch=x.loiIch;
    
    console.log("ConCaccccccccc"+this.congViec.title);
    this.display=true;
  }
  suacongViec(x:Job)
  {
    this.edit=new JobEdit();
     this.edit.IdJob=x.idjob;
     this.edit.Desciption=x.moTa;
     this.edit.Title=x.title;
     this.edit.MaxSalary=x.maxSalary;
     this.edit.MinSalary=x.minSalary;
     this.edit.loiIch=x.loiIch;
     this.edit.yeuCau=x.yeuCau;
     this.edit.quyenLoi=x.quyenLoi;
     console.log(this.edit);

     this.jobService.editJob(this.edit)
     .subscribe(response => {
        alert('sua thanh cong');
        this.ListJob=response;
     },err=>{
        alert('sua that bai');
     });
     console.log('I want to wedding for you.Do you aggree');
     this.display=false;
  }


  themcongViec(x:JobEdit)
  {
    console.log("XuanOiiiiiiiiiiiiiiii"+x.Title);
    // this.display1=false;
    // this.jobService.addJobs(x)
    // .subscribe(response => {
    //    alert('them thanh cong');
    //    this.ListJob=response;
    // },err=>{
    //    alert('THEM that bai');
    // });
  }
  An(x:any)
  {
    
    this.jobService.disibleJobs(x)
    .subscribe(response => {
      alert('an thanh cong');
      this.ListJob=response;
   },err=>{
      alert('an that  that bai');
   });
  }
  Hien(x:any)
  {
    if(x.endDate.slice(0,10)==this.info)
    {
      alert("Bai dang bi het han")
    }
    else
    {
    this.jobService.visibleJobs(x)
    .subscribe(response => {
      alert('hien  thanh cong');
      this.ListJob=response;
   },err=>{
      alert('hien thi that bai');
   });
    } 
  }
  Check(x:any):boolean
  {
    if(x.endDate.slice(0,10)==this.info)
    {
      this.jobService.disibleJobs(x)
      .subscribe(response => {
        
        this.ListJob=response;
        this.t=true;
     },err=>{
        alert('an that  that bai');
        this.t=false
     });
    }
    return this.t;
  }
  XemDanhSach(x:any)
  {
  //   console.log(x.idJob);
  //   this.jobService.getCandidate(x.idJob)
  //   .subscribe(response => {
  //     this.ListCandidate=response;
  //     console.log(this.ListCandidate);
  //  },err=>{
  //     alert('an that  that bai');
  // });
    this.router.navigate(['admin/danhsach',x.idJob]);
  }
  //
}
//Nhiem vu:QT
//b1:tao ra service listjob:lay ra danh sach cac cong viec
//b2:in cac cong viec 
//co gang in ra cac thong tin nhu tableview
//thuc hien cac chuc nang them xoa,sua cac tieu de thu xem sao
//nhiem vu:khi an nut sua se hien thi ra form sua thong tin
//khi an nut tham se hien thi form,nhat nut them se add thong tin vao trong sql
//khi an nua vao se an bai dang:co 2 truong hop xay ra:ngay het han,va tu an nua an bai dang
//lam sao de xem duoc danh sach ung vien da nop vao trong cong viec nay
//khi nhap vao se hien thi trang danh sach ung vien
//tim kiem cac cong viec->hien thi ra cac cong viec(van de:nhap thieu du lieu->ko chiu)
//


  


