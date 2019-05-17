import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.scss']
})
export class DetailJobComponent implements OnInit {
  id:any;
  listJob:any[]=[];
  constructor(private jobService: JobService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
   // alert('xuanVu'+this.id);
    this.jobService.findJob(this.id)
    .subscribe(res =>{
      this.listJob=res;
      console.log(res);
   
    });
  }
}



//Android