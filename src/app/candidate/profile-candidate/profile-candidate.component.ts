import { Component, OnInit, Input } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';
import { MessagesModule, KeyFilterModule } from 'primeng/primeng';
import { formatNumber } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobService } from 'src/app/service/job.service';
import { InforCandidate } from 'src/app/models/infoCandidate';

@Component({
  selector: 'app-profile-candidate',
  templateUrl: './profile-candidate.component.html',
  styleUrls: ['./profile-candidate.component.scss'],
  providers: [MessageService]
})
export class ProfileCandidateComponent implements OnInit {

  @Input() inforCandidate:any;
  candidate:InforCandidate;
  candidate2:InforCandidate;

  userform: FormGroup;
  userform1: FormGroup;
  submitted: boolean;
  capBac: SelectItem[];
  x:string;
  y:string;
  xuanvu:string;



  name:string;
  
  ho:any;
  ten:any;
  chucdanh:any;
  capbac:any;
  kinhnghiem:any;
  //co so du lieu
  HienThi:string;
  An:string;
  concac:any;
  //
  constructor(private fb: FormBuilder, private messageService: MessageService,private candidateService:CandidateService,private jobService: JobService) 
  { 

  }

  ngOnInit() {
   this.candidate=new InforCandidate();
   this.jobService.getInfoCandidate(this.candidateService.getId())
   .subscribe(res =>{
      this.candidate=res;
      //console.log("conCac"+res[0].nameSchool);
      console.log(res);
      this.candidate.Name=res[0].name;
      this.candidate.Phone=res[0].phone;
      this.candidate.Email=res[0].email;
      this.candidate.YearGraduation=res[0].yearGraduation;
      this.candidate.Faculty=res[0].faculty;
      this.candidate.NameSchool=res[0].nameSchool;
      this.candidate.idUser=this.candidateService.getId();


    
   });

  
    this.userform = this.fb.group({
      'Ho': new FormControl('', Validators.required),
      'Ten': new FormControl('', Validators.required),
      'ChucDanh': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'CapBac': new FormControl('',Validators.required),
      'KinhNghiem': new FormControl('', Validators.required)
    });
    this.userform1 = this.fb.group({
      'Name': new FormControl('', Validators.required),
      'Email': new FormControl('', Validators.required),
      'truong': new FormControl('',Validators.required),
      'chuyenhNganh': new FormControl('',Validators.required),
      'namHoc': new FormControl('',Validators.required),
      'soDienThoai': new FormControl('',Validators.required),
      'idUser':new FormControl(this.candidateService.getId())
    });
  //   this.capBac = [
  //     {label:'Vui lòng chọn cấp bấc', value:null},
  //     {label:'Mới tốt nghiệp', value:{id:1, name: 'Thailand', code: 'NY'}},
  //     {label:'Nhân viên', value:{id:2, name: 'Japanes', code: 'RM'}},
  //     {label:'Trưởng phòng', value:{id:3, name: 'English', code: 'LDN'}},
  // ];
  this.capBac = [];
  this.capBac.push({label:'Vui lòng chọn cấp bậc', value:null});
  this.capBac.push({label:'Mới tốt nghiệp', value:'Mới tốt nghiệp'});
  this.capBac.push({label:'Nhân viên', value:'Nhân viên'});
  this.capBac.push({label:'Trưởng phòng', value:'Trưởng phòng'});
  this.x="visible";
  this.y="hidden";
  
  }
  onSubmit(value: string) 
  {
    console.log('cc');
    this.submitted = true;
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'}); 
    //console.log(this.userform.value);
    console.log(this.ho);
    this.capbac=this.userform.value.CapBac;
    this.ho=this.userform.value.Ho;
    this.ten=this.userform.value.Ten;
    this.chucdanh=this.userform.value.ChucDanh;
    this.kinhnghiem=this.userform.value.KinhNghiem;
    
    console.log(this.capBac);
    // this.userform.controls['Ho'].reset({ value:this.ho, disabled: true });
    // this.userform.controls['Ten'].reset({ value:this.ten, disabled: true });
    // this.userform.controls['ChucDanh'].reset({ value:this.chucdanh, disabled: true });
    // this.userform.controls['KinhNghiem'].reset({ value:this.kinhnghiem, disabled: true });
    this.xuanvu=this.ho;
    this.x="hidden";
    this.y="visible";
    this.HienThi="visible";
    this.An="hidden";
  }
  onClear()
  {
    console.log('cc');
    this.userform.reset();
  }
  get diagnostic() 
  { 
    return ("Họ:"+this.ho+"-Tên:"+this.ten+"-Chức danh:"+this.chucdanh+"-Cấp bậc:"+this.capbac+"-Kinh nghiệm:"+this.kinhnghiem); 
  }
  Edit()
  {
    this.x="visible";

    this.y="hidden";
  }
  onSubmit1()
  {
   // alert(this.name);
  //  alert(this.userform1.get('email').value);
    
   // this.userform1.controls['idUser'].reset({ value:"cc", disabled: true });
    //console.log(this.userform1.value);
     if(this.userform1.value.Name!=null)
     {
       this.candidate.Name=this.userform1.get('Name').value;
     }
     if(this.userform1.value.Email!=null)
     {
       this.candidate.Email=this.userform1.get('Email').value;
     //  alert(this.candidate.Email);
     }
     if(this.userform1.value.Name!=null)
     {
       this.candidate.NameSchool=this.userform1.get('truong').value;
      // alert(this.candidate.NameSchool);
     }
     if(this.userform1.value.chuyenhNganh!=null)
     {
       this.candidate.Faculty=this.userform1.get('chuyenhNganh').value;
     }
     if(this.userform1.value.namHoc!=null)
     {
       this.candidate.YearGraduation=this.userform1.get('namHoc').value;
       alert(this.candidate.YearGraduation);
     }
     if(this.userform1.value.soDienThoai!=null)
     {
       this.candidate.Phone=this.userform1.get('soDienThoai').value;
     }  
     //alert('taisao'+this.candidate.Phone);
   //  console.log(this.candidate.)
     
      this.candidate2=new InforCandidate();
     this.candidate2.Name=this.candidate.Name;
     this.candidate2.Email=this.candidate.Email;
     
     this.candidate2.Faculty=this.candidate.Faculty;
     this.candidate2.Phone=this.candidate.Phone;
     this.candidate2.ScoreMedium=this.candidate.ScoreMedium;
     this.candidate2.idUser=this.candidate.idUser;
     

     this.concac=this.candidate;
      this.jobService.AddInforCandidate(this.candidate2)
      .subscribe(res =>{
      });




  //   if(this.userform1.value.Name=='')
  //   {
  //    // this.userform1.controls['Name'].setValue(this.inforCandidate.name);
  //     this.candidate.Name=this.inforCandidate.name;
  //   }
  //  // alert(this.userform1.value.Name);
  //   if(this.userform1.value.truong=='')
  //   {
  //     this.userform1.controls['truong'].setValue(this.inforCandidate.nameSchool);
  //     // alert(this.userform1.value.Name);
  //   }
  //   if(this.userform1.value.Email=='')
  //   {
  //     this.userform1.controls['Email'].setValue(this.inforCandidate.email);
  //     // alert(this.userform1.value.Name);
  //   }
  //   if(this.userform1.value.chuyenhNganh=='')
  //   {
  //     this.userform1.controls['chuyenhNganh'].setValue(this.inforCandidate.faculty);
  //     // alert(this.userform1.value.Name);
  //   }
  //   if(this.userform1.value.namHoc=='')
  //   {
  //     this.userform1.controls['namHoc'].setValue(this.inforCandidate.yearGraduation);
  //     // alert(this.userform1.value.Name);
  //   }
  //   if(this.userform1.value.soDienThoai=='')
  //   {
  //     this.userform1.controls['soDienThoai'].setValue(this.inforCandidate.phone);
  //     // alert(this.userform1.value.Name);
  //   }
    


    
  
    
  

    // this.jobService.AddInforCandidate(this.userform1.value)
    //  .subscribe(res =>{
    //    this.inforCandidate=res;
    //  });

  }
}
