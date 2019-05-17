import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import { Find } from 'src/app/models/find';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss']
})
export class ListJobComponent implements OnInit {
  testcc = ['A','B','C'];
  skill:any;
  level:any;
  location;
  x:Find;
  listJob:any[]=[];
  constructor(private jobService: JobService,private _Activatedroute:ActivatedRoute) {}

  ngOnInit() {
    this.x=new Find();
    this.skill=this._Activatedroute.snapshot.params['id'];
    this.level=this._Activatedroute.snapshot.params['id2'];
    this.location=this._Activatedroute.snapshot.params['id1'];
    this.x.skill=this.skill;
    this.x.location=this.location;
    this.x.level=this.level;
    this.jobService.searchJobs(this.x)
    .subscribe(res =>{
      this.listJob=res;
      console.log(res);
    });
  }

}
