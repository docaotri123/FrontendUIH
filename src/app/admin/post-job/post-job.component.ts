import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Job } from 'src/app/models/job';
import { literalArr } from '@angular/compiler/src/output/output_ast';
import { ListWorkComponent } from '../list-work/list-work.component';
import { JobEdit } from 'src/app/models/jobedit';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
  providers: [MessageService]
})
export class PostJobComponent implements OnInit {
  
  //co so du lieu
  @Input() congViec:Job;
  @Output() suacongViec=new EventEmitter<Job>();
  @Output() themcongViec=new EventEmitter<JobEdit>();
  //
  @Input() editJob:Job;
  @Output() suaJob=new EventEmitter<Job>();
  @Output() addpJob=new EventEmitter<Job>();
  addJob:JobEdit;
  capbac: SelectItem[];
  capbac1:SelectItem[];
  
  nganhnghe: SelectItem[];
  nganhnghe1:SelectItem[];

  diadiem:SelectItem[];
  diadiem1:SelectItem[];
  minSalary:SelectItem[];
  minSalary1:SelectItem[];

  maxSalary:SelectItem[];
  maxSalary1:SelectItem[];

  language:SelectItem[];
  language1:SelectItem[];

  kynang:SelectItem[];
  userform: FormGroup;
  
  submitted: boolean;
  job:Job;
  EditJob:Job;
  id:number;

  //co so du lieu
  userform1: FormGroup;
  editjob=new Job();
  editjob1=new Job();
  addjob=new JobEdit();
  date3: Date = new Date("2/1/2019");
  //

  constructor(private fb: FormBuilder) 
  {
    this.capbac = 
    [
      {label: 'Intership', value: 'Intership'},
      {label: 'Fresher', value: 'Fresher'},
      {label: 'Developer', value: 'Developer'},
      {label: 'Tester', value: 'Tester'},
    ];
    this.capbac1 = 
    [
      {label: '', value: ''},
      {label: 'Intership', value: 'Intership'},
      {label: 'Fresher', value: 'Fresher'},
      {label: 'Developer', value: 'Developer'},
      {label: 'Tester', value: 'Tester'},
    ];
    this.nganhnghe = 
    [
      {label: 'IT-Phần mềm', value: 'IT-Phần mềm'},
      {label: 'Kỹ thuật phần mềm', value: 'Kỹ thuật phần mềm'},
      {label: 'Phần cứng', value: 'Phần cứng'},
      {label: 'Mạng thông tin', value: 'Mạng thông tin'},
    ];
    this.nganhnghe1 = 
    [
      {label: '', value: ''},
      {label: 'IT-Phần mềm', value: 'IT-Phần mềm'},
      {label: 'Kỹ thuật phần mềm', value: 'Kỹ thuật phần mềm'},
      {label: 'Phần cứng', value: 'Phần cứng'},
      {label: 'Mạng thông tin', value: 'Mạng thông tin'},
    ];
    this.diadiem = [
      {label: 'Sài gòn', value: 'Sài gòn'},
      {label: 'Hà Nội', value: 'Hà Nội'},
    ];
    this.diadiem1 = [
      {label: '', value: ''},
      {label: 'Sài gòn', value: 'Sài gòn'},
      {label: 'Hà Nội', value: 'Hà Nội'},
    ];

    this.maxSalary = [
      {label: '2000', value: '2000'},
      {label: '2500', value: '2500'},
      {label: '5000', value: '5000'},
      {label: '10000', value: '10000'},
    ];
    this.maxSalary1 = [
      {label: '', value: ''},
      {label: '2000', value: '2000'},
      {label: '2500', value: '2500'},
      {label: '5000', value: '5000'},
      {label: '10000', value: '10000'},
    ];
    this.minSalary = [
      {label: '0', value: '0'},
      {label: '500', value: '500'},
      {label: '1000', value: '1000'},
      {label: '1500', value: '1500'},
    ];
    this.minSalary1 = [
      {label: '', value: ''},
      {label: '0', value: '0'},
      {label: '500', value: '500'},
      {label: '1000', value: '1000'},
      {label: '1500', value: '1500'},
    ];
    this.language = [
      {label: 'Bất kỳ', value: 'Bất kỳ'},
      {label: 'Tiếng Nhật', value: 'Tiếng Nhật'},
      {label: 'Tiếng Anh', value: 'Tiếng Anh'},
      {label: 'Tiếng Trung', value: 'Tiếng Trung'},
    ];
    this.language1 = [
      {label: '', value: ''},
      {label: 'Bất kỳ', value: 'Bất kỳ'},
      {label: 'Tiếng Nhật', value: 'Tiếng Nhật'},
      {label: 'Tiếng Anh', value: 'Tiếng Anh'},
      {label: 'Tiếng Trung', value: 'Tiếng Trung'},
    ];
    this.kynang= [
      {label: 'C#', value: 'C#'},
      {label: 'C++', value: 'C++'},
      {label: 'Java', value: 'Java'},
      {label: 'Android', value: 'Android'},
    ];
    this.userform = this.fb.group({
      'TieuDe': new FormControl('', Validators.required),
      'CapBac': new FormControl('', Validators.required),
      'ChucDanh': new FormControl('', Validators.required),
      'KyNang': new FormControl('', Validators.required),
      'NganhNghe': new FormControl('',Validators.required),
      'NoiLamViec': new FormControl('', Validators.required),
      'maxSalary': new FormControl('',Validators.required),
      'minSalary': new FormControl('', Validators.required),
      'moTa': new FormControl('',Validators.required),
      'yeuCau': new FormControl('', Validators.required),
      'hoSo': new FormControl('',Validators.required),
      'lienHe': new FormControl('', Validators.required),
      'loiIch': new FormControl('', Validators.required),
    });

    this.userform1=this.fb.group(
    {
      'MoTa': new FormControl('', Validators.required),
      'TieuDe': new FormControl('', Validators.required),
      'maxSalary': new FormControl('', Validators.required),
      'minSalary': new FormControl('', Validators.required),
      'startDate': new FormControl('', Validators.required),
      'endDate': new FormControl('', Validators.required),
      'yeuCau': new FormControl('', Validators.required),
      'loiIch': new FormControl('', Validators.required),
      'quyenLoi': new FormControl('', Validators.required),
    });

  }

  ngOnInit() {
    this.id=0;
    
  
   
  }
  onSubmit()
  {
    alert('1');
    this.job=new Job();
    
    
    this.job.idjob=this.id;
    this.job.capBac=this.userform.value.CapBac;
    this.job.chucDanh=this.userform.value.ChucDanh;
    this.job.title=this.userform.value.TieuDe;
    this.job.kyNang=this.userform.value.KyNang;
    this.job.nganhNghe=this.userform.value.NganhNghe;
    this.job.maxSalary=this.userform.value.maxSalary;
    this.job.minSalary=this.userform.value.minSalary;

    this.job.moTa=this.userform.value.moTa;
    this.job.yeuCau=this.userform.value.yeuCau;
    this.job.loiIch=this.userform.value.loiIch;
    this.job.hoSo=this.userform.value.hoSo;
    this.job.lienHe=this.userform.value.lienHe;
    
    this.job.visible=true;
    console.log(this.job);
    alert(this.job.chucDanh);
    this.addpJob.emit(this.job);
  //  this.userform.reset();
}

  
  Edit()
  {
    this.EditJob=new Job();

    if(this.userform.controls['ChucDanh'].value=='')
    {
       this.EditJob.chucDanh=this.editJob.chucDanh;
    }
    else
    {
      this.EditJob.chucDanh=this.userform.value.ChucDanh;
      console.log('xx');
    }

    if(this.userform.controls['CapBac'].value==null)
    {
      this.EditJob.capBac=this.editJob.capBac;
    }
    else
    {
      this.EditJob.capBac=this.userform.value.CapBac;
    }

    if(this.userform.controls['KyNang'].value==null)
    {
      this.EditJob.kyNang=this.editJob.kyNang;
    }
    else
    {
      this.EditJob.kyNang=this.userform.value.KyNang;
    }

    if(this.userform.controls['NganhNghe'].value==null)
    {
      this.EditJob.nganhNghe=this.editJob.nganhNghe;
    }
    else
    {
      this.EditJob.nganhNghe=this.userform.value.NganhNghe;
    }


    if(this.userform.controls['NoiLamViec'].value==null)
    {
      this.EditJob.noiLamViec=this.editJob.noiLamViec;
    }
    else
    {
      this.EditJob.noiLamViec=this.userform.value.NoiLamViec;
    }

    if(this.userform.controls['minSalary'].value==null)
    {
      this.EditJob.minSalary=this.editJob.minSalary;
    }
    else
    {
      this.EditJob.minSalary=this.userform.value.minSalary;
    }


    if(this.userform.controls['maxSalary'].value==null)
    {
      this.EditJob.maxSalary=this.editJob.maxSalary;
    }
    else
    {
      this.EditJob.maxSalary=this.userform.value.maxSalary;
    }

    if(this.userform.controls['moTa'].value=='')
    {
     
      this.EditJob.moTa=this.editJob.moTa;
    }
    else
    {
      this.EditJob.moTa=this.userform.value.moTa;
    }

    if(this.userform.controls['yeuCau'].value=='')
    {
     
      this.EditJob.yeuCauCongViec=this.editJob.yeuCauCongViec;
    }
    else
    {
      this.EditJob.yeuCauCongViec=this.userform.value.yeuCau;
    }

    if(this.userform.controls['hoSo'].value==null)
    {
      this.EditJob.hoSo=this.editJob.hoSo;
    }
    else
    {
      this.EditJob.hoSo=this.userform.value.hoSo;
    }

    if(this.userform.controls['lienHe'].value=='')
    {
     
      this.EditJob.lienHe=this.editJob.lienHe;
    }
    else
    {
      this.EditJob.lienHe=this.userform.value.lienHe;
    }
    this.EditJob.idjob=this.editJob.idjob;
   // this.EditJob.capBac=this.userform.value.CapBac;
   // this.EditJob.kyNang=this.userform.value.KyNang;
   // this.EditJob.nganhNghe=this.userform.value.NganhNghe;
    //this.EditJob.maxSalary=this.userform.value.maxSalary;
    //this.EditJob.minSalary=this.userform.value.minSalary;
    //this.EditJob.moTa=this.userform.value.moTa;
   // this.EditJob.yeuCauCongViec=this.userform.value.yeuCau;
    //this.EditJob.hoSo=this.userform.value.hoSo;
    //this.EditJob.lienHe=this.userform.value.lienHe;
    console.log(this.EditJob);
    this.suaJob.emit(this.EditJob);
  }
  
  
  Sua()
  {
    //console.log(this.userform1.value.MoTa+"");
    //console.log(this.userform1.value.TieuDe+"");
    //console.log(this.userform1.controls['MoTa'].value);
    //console.log(this.userform1.value.MoTa);
    this.editjob=new Job();
    
    if(this.userform1.controls['MoTa'].value=='')
    {
      
       //this.EditJob.chucDanh=this.editJob.chucDanh;
       this.editjob.moTa=this.congViec.moTa; 
     // console.log('xuanvu'+this.editjob.moTa);
    }
    else
    {
      
      this.editjob.moTa=this.userform1.value.MoTa;
      console.log('XuanVu'+this.editjob.moTa);
    }

    if(this.userform1.controls['TieuDe'].value=='')
    {
       //this.EditJob.chucDanh=this.editJob.chucDanh;
       this.editjob.title=this.congViec.title; 
      console.log('xuanvu'+this.editjob.title);
      alert('1');
    }
    else
    {
      alert('2');
      this.editjob.title=this.userform1.value.TieuDe;
      //console.log('XuanVu'+this.editjob.moTa);
    }

    if(this.userform1.controls['maxSalary'].value=='')
    {
       //this.EditJob.chucDanh=this.editJob.chucDanh;
       this.editjob.maxSalary=this.congViec.maxSalary; 
      console.log('xuanvu'+this.editjob.maxSalary);
    }
    else
    {
      this.editjob.maxSalary=this.userform1.value.maxSalary;
      //console.log('XuanVu'+this.editjob.moTa);
    }

    if(this.userform1.controls['minSalary'].value=='')
    {
       //this.EditJob.chucDanh=this.editJob.chucDanh;
       this.editjob.minSalary=this.congViec.minSalary; 
      console.log('xuanvu'+this.editjob.minSalary);
    }
    else
    {
      this.editjob.minSalary=this.userform1.value.minSalary;
      //console.log('XuanVu'+this.editjob.moTa);
    }

    if(this.userform1.controls['yeuCau'].value=='')
    {
       //this.EditJob.chucDanh=this.editJob.chucDanh;
       this.editjob.yeuCau=this.congViec.yeuCau; 
      console.log('xuanvu'+this.editjob.yeuCau);
    }
    else
    {
      this.editjob.yeuCau=this.userform1.value.yeuCau;
      //console.log('XuanVu'+this.editjob.moTa);
    }

    if(this.userform1.controls['loiIch'].value=='')
    {
       //this.EditJob.chucDanh=this.editJob.chucDanh;
       this.editjob.loiIch=this.congViec.loiIch; 
      console.log('xuanvu'+this.editjob.loiIch);
    }
    else
    {
      this.editjob.loiIch=this.userform1.value.loiIch;
      //console.log('XuanVu'+this.editjob.moTa);
    }

    if(this.userform1.controls['quyenLoi'].value=='')
    {
       //this.EditJob.chucDanh=this.editJob.chucDanh;
       this.editjob.quyenLoi=this.congViec.quyenLoi; 
      console.log('xuanvu'+this.editjob.quyenLoi);
    }
    else
    {
      this.editjob.quyenLoi=this.userform1.value.quyenLoi;
      //console.log('XuanVu'+this.editjob.moTa);
    }
    this.editjob.idjob=this.congViec.idjob;
  //  console.log('xuanvu'+this.editjob.idjob);
  console.log('xuanvu'+this.editjob.moTa);
    this.suacongViec.emit(this.editjob);
  }


  Them()
  {
    this.addjob.Title=this.userform1.value.MoTa;
    this.addjob.Desciption=this.userform1.value.TieuDe;
    this.themcongViec.emit(this.addjob);
  }


}
