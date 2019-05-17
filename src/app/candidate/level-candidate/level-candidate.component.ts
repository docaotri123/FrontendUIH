import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { JobService } from 'src/app/service/job.service';
import { SelectItem } from 'primeng/api';
import { Candidate_Skill } from 'src/app/models/candidate_skill';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-level-candidate',
  templateUrl: './level-candidate.component.html',
  styleUrls: ['./level-candidate.component.scss']
})
export class LevelCandidateComponent implements OnInit {
  @Input() candidateSkill:any;
  listSkil:any[]=[];//khai bao danh sach CandidateSkill
  danhSach:any[]=[1,2];
  
  candidate:Candidate_Skill;
  ngonNgu:SelectItem[];
  val:number;
  userform1: FormGroup;

  constructor(private fb: FormBuilder,private jobService: JobService,private candidateService:CandidateService) { }

  ngOnInit() {
    this.listSkil=this.candidateSkill;
    console.log(this.listSkil);
    this.val=0;
    this.danhSach.push(4);
    this.userform1=this.fb.group(
      {
        'Skill': new FormControl('', Validators.required),
      });

      this.ngonNgu = 
    [
      {label: 'C#', value: '1'},
      {label: 'C++', value: '2'},
      {label: 'Java', value: '3'},
      {label: 'Android', value: '4'},
    ];
    }
  onSubmit()
  {
    
  }
}


