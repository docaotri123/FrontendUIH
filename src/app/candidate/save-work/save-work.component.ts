import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { SaveWork } from 'src/app/models/saveWork';
import { SaveJob } from 'src/app/models/saveJob';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-save-work',
  templateUrl: './save-work.component.html',
  styleUrls: ['./save-work.component.scss']
})
export class SaveWorkComponent implements OnInit {
  @Output() deleteJob=new EventEmitter<Number>();
  @Input() saveWork:any;
  saveJob:SaveJob;
  
  constructor(private candidateService:CandidateService,private jobService: JobService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.deleteJob.emit(this.saveWork.idJob);
  }



}
