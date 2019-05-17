import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SaveWork } from 'src/app/models/saveWork';
import { CreateNotify } from 'src/app/models/createNotify';

@Component({
  selector: 'app-create-notify-work',
  templateUrl: './create-notify-work.component.html',
  styleUrls: ['./create-notify-work.component.scss']
})
export class CreateNotifyWorkComponent implements OnInit {
  capBac: SelectItem[];
  capBac1:SelectItem[];

  khuVuc:SelectItem[];
  khuVuc1:SelectItem[];

  nganhNghe:SelectItem[];
  nganhNghe1:SelectItem[];

  kyNang:SelectItem[];
  kyNang1:SelectItem[];
  job:CreateNotify;
  submitted: boolean;
  i:number;
  selectedCity3:string;
  

  userform: FormGroup;
  @Output() notyfyJob=new EventEmitter<CreateNotify>();
  @Output() editJob1=new EventEmitter<CreateNotify>();
  @Input() mgsChild:string;
  @Input() mgsChild1:CreateNotify;

  constructor(private fb: FormBuilder) { 
    this.capBac = [
      {label:'Vui lòng chọn cấp bậc', value:null},
      {label:'Mới tốt nghiệp', value:{id:1, name: 'Mới tốt nghiệp', code: 'NY'}},
      {label:'Nhân viên', value:{id:2, name: 'Nhân viên', code: 'RM'}},
      {label:'Trưởng phòng', value:{id:3, name: 'Trưởng phòng', code: 'LDN'}},
      {label:'Giam đốc', value:{id:4, name: 'Giám đốc', code: 'IST'}},
  ];
  this.capBac1 = [
    {label:'', value:{name:'x'}},
    {label:'Mới tốt nghiệp', value:{id:1, name: 'Mới tốt nghiệp', code: 'NY'}},
    {label:'Nhân viên', value:{id:2, name: 'Nhân viên', code: 'RM'}},
    {label:'Trưởng phòng', value:{id:3, name: 'Trưởng phòng', code: 'LDN'}},
    {label:'Giam đốc', value:{id:4, name: 'Giam đốc', code: 'IST'}},
];
  this.khuVuc = [
    {label:'Vui lòng chọn khu vực', value:null},
    {label:'Sài gòn', value:{id:1, name: 'Sài gòn', code: 'NY'}},
    {label:'Hà Nội', value:{id:2, name: 'Hà Nội', code: 'RM'}},
    {label:'Tây Ninh', value:{id:3, name: 'Tây Ninh', code: 'LDN'}},
    {label:'Hưng Yên', value:{id:4, name: 'Hưng Yên', code: 'IST'}},
  ];
  this.khuVuc1 = [
    {label:'', value:{name:''}},
    {label:'Sài gòn', value:{id:1, name: 'Sài gòn', code: 'NY'}},
    {label:'Hà Nội', value:{id:2, name: 'Hà Nội', code: 'RM'}},
    {label:'Tây Ninh', value:{id:3, name: 'Tây Ninh', code: 'LDN'}},
    {label:'Hưng Yên', value:{id:4, name: 'Hưng Yên', code: 'IST'}},
  ];
  this.nganhNghe = [
    {label:'Vui lòng chọn nganh nghe', value:null},
    {label:'IT', value:{id:1, name: 'IT', code: 'NY'}},
    {label:'Lập trình', value:{id:2, name: 'Lập trình', code: 'RM'}},
    {label:'Phần mềm', value:{id:3, name: 'Phần mềm', code: 'LDN'}},
    {label:'Quản ly', value:{id:4, name: 'Quản lý', code: 'IST'}},
  ];
  this.nganhNghe1 = [
    {label:'', value:{name:''}},
    {label:'IT', value:{id:1, name: 'IT', code: 'NY'}},
    {label:'Lập trình', value:{id:2, name: 'Lập trình', code: 'RM'}},
    {label:'Phần mềm', value:{id:3, name: 'Phần mềm', code: 'LDN'}},
    {label:'Quản ly', value:{id:4, name: 'Quản lý', code: 'IST'}},
  ];
  this.kyNang = [
    {label:'Vui lòng chọn Kỹ năng', value:null},
    {label:'C++', value:{id:1, name: 'C++', code: 'NY'}},
    {label:'C#', value:{id:2, name: 'C#', code: 'RM'}},
    {label:'Java', value:{id:3, name: 'Java', code: 'LDN'}},
    {label:'Node Js', value:{id:4, name: 'Node Js', code: 'IST'}},
  ];
  this.kyNang1 = [
    {label:'', value:{name:''}},
    {label:'C++', value:{id:1, name: 'C++', code: 'NY'}},
    {label:'C#', value:{id:2, name: 'C#', code: 'RM'}},
    {label:'Java', value:{id:3, name: 'Java', code: 'LDN'}},
    {label:'Node Js', value:{id:4, name: 'Node Js', code: 'IST'}},
  ];
  
  
  }

  ngOnInit() {
    if(this.mgsChild1)
    {
      this.userform = this.fb.group({
        'tenViecLam': new FormControl('', Validators.required),
        'CapBac': new FormControl('', Validators.required),
        'KhuVuc': new FormControl('', Validators.required),
        'NganhNghe': new FormControl('',Validators.required),
        'KyNang': new FormControl('', Validators.required),
        'mucLuong': new FormControl('yyy', Validators.required)
    });
    }
    else
    {
    this.userform = this.fb.group({
      'tenViecLam': new FormControl('', Validators.required),
      'CapBac': new FormControl('', Validators.required),
      'KhuVuc': new FormControl('', Validators.required),
      'NganhNghe': new FormControl('',Validators.required),
      'KyNang': new FormControl('', Validators.required),
      'mucLuong': new FormControl('', Validators.required)
    });
   
  
  }
  this.i=0;
  }
  onSubmit() {
    this.job=new CreateNotify();
    this.job.idJobNotify=this.i;
    this.job.nameJob=this.userform.value.tenViecLam;
    this.job.capBac=this.userform.value.CapBac.name;
    this.job.khuVuc=this.userform.value.KhuVuc.name;
    this.job.nganhNghe=this.userform.value.NganhNghe.name;
    this.job.kyNang=this.userform.value.KyNang.name;
    this.job.mucLuong=this.userform.value.mucLuong;

    this.job.dateCreate="7-4-2019"

    this.userform.controls['tenViecLam'].reset();
    this.userform.controls['CapBac'].reset({ value:""});
    this.userform.controls['KhuVuc'].reset({ value:""});
    this.userform.controls['NganhNghe'].reset({ value:""});
    this.userform.controls['KyNang'].reset({ value:""});
    this.userform.controls['mucLuong'].reset();
    console.log('xuanVu'+this.job.khuVuc);
    
    this.notyfyJob.emit(this.job);
    this.i++;
  }
  Huy()
  {
    this.userform.controls['tenViecLam'].reset();
    this.userform.controls['CapBac'].reset();
    this.userform.controls['KhuVuc'].reset();
    this.userform.controls['NganhNghe'].reset();
    this.userform.controls['KyNang'].reset();
    this.userform.controls['mucLuong'].reset();
  }

  suaTT(id:number)
  {
    this.userform.controls['CapBac'].reset({ value:id});
  }

  getJob(id:number)
  {
    console.log('tai sao');
  }

  onSubmitEdit()
  {
    this.job=new CreateNotify();
    this.job.idJobNotify=this.mgsChild1.idJobNotify;
    console.log('xxx'+this.userform.controls['tenViecLam'].value);
   // this.job.nameJob=this.userform.value.tenViecLam;
    if(this.userform.controls['tenViecLam'].value=='')
    {
      this.job.nameJob=this.mgsChild1.nameJob;
     console.log('cccc');
    }
    else
    {
      this.job.nameJob=this.userform.value.tenViecLam;
      console.log('lllllll'+this.job.nameJob);
      
    }

    if(this.userform.controls['CapBac'].value==null)
    {
      this.job.capBac=this.mgsChild1.capBac;
    }
    else
    {
      this.job.capBac=this.userform.value.CapBac.name;
      console.log('xuanVu'+this.job.capBac);
    }

    if(this.userform.controls['KhuVuc'].value==null)
    {
      this.job.khuVuc=this.mgsChild1.khuVuc;
    }
    else
    {
      this.job.khuVuc=this.userform.value.KhuVuc.name;
    }

    if(this.userform.controls['NganhNghe'].value==null)
    {
      this.job.nganhNghe=this.mgsChild1.nganhNghe;
    }
    else
    {
      this.job.nganhNghe=this.userform.value.NganhNghe.name;
    }

    if(this.userform.controls['KyNang'].value==null)
    {
      this.job.kyNang=this.mgsChild1.kyNang;
    }
    else
    {
      this.job.kyNang=this.userform.value.KyNang.name;
    }

    if(this.userform.controls['mucLuong'].value=='')
    {
      this.job.mucLuong=this.mgsChild1.mucLuong;
    }
    else
    {
      this.job.mucLuong=this.userform.value.mucLuong;
    }
    
    this.editJob1.emit(this.job);
  }
  
}
