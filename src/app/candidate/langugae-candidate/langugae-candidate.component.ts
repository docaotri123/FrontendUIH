import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JobService } from 'src/app/service/job.service';
import { CandidateService } from 'src/app/service/candidate.service';
import { Candidate_Language } from 'src/app/models/candidate_language';

@Component({
  selector: 'app-langugae-candidate',
  templateUrl: './langugae-candidate.component.html',
  styleUrls: ['./langugae-candidate.component.scss']
})
export class LangugaeCandidateComponent implements OnInit {
  language: SelectItem[];
  userform: FormGroup;
  val1:string;
  val0:string;
  x:string;
  y:string;
  val:Number;
  listLanguage:any[]=[];
  addLanguage:Candidate_Language;
  

  @Input() candidateLanguage:any;

  constructor(private fb: FormBuilder,private jobService: JobService,private candidateService:CandidateService) 
  { 
    this.language = [
      {label:'Vui lòng chọn ngôn ngữ', value:null},
      {label:'Nhât Bản', value:{id:1, name: 'Trung Quốc', code: 'NY'}},
      {label:'Trung Quốc', value:{id:2, name: 'Nhật Bản', code: 'RM'}},
      {label:'Pháp', value:{id:3, name:'Hàn Quốc', code: 'LDN'}},
      {label:'Tây Ban Nha', value:{id:4, name: 'Trung Quốc', code: 'NY'}},
      {label:'Viêt Nam', value:{id:5, name: 'Nhật Bản', code: 'RM'}},
    ];
  }

  ngOnInit() {
     this.userform = this.fb.group({
       'ngonNgu': new FormControl('', Validators.required),
       'trinhDo': new FormControl( ['Option 1', ['Option 2']]),
     });
     
  }
  onSubmit(value:string)
  {
    this.val0=this.userform.value.ngonNgu.id;
   
    this.addLanguage=new Candidate_Language();
    this.addLanguage.idUser=this.candidateService.getId();
    this.addLanguage.idLanguage=this.userform.value.ngonNgu.id;
    this.addLanguage.sao=this.val;
    
    this.jobService.addLanguage(this.addLanguage)
    .subscribe(res =>{
      this.candidateLanguage=res;
    });
    this.val=0;

  }
  Edit()
  {
    this.x="visible";
     this.y="hidden";
  }

}
