import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  id:string;
  idJob:string;
  ListUserJob:any[]=[];
  colsJob:any[]=[];
  constructor(private route:ActivatedRoute,private jobService:JobService) { }

  ngOnInit() {
    this.colsJob=[
      { field: 'idJob', header: 'idCandidate' },
      { field: 'title', header: 'Title' },
      { field: 'skill', header: 'Skill' },
      { field: 'positions', header: 'Positions' },
    ]
    this.id=this.route.snapshot.params['id'];
    this.idJob=this.route.snapshot.params['idJob'];
    if(this.id!=null)
    {
     this.jobService.getUserJob(this.id)
     .subscribe(response => {
          this.ListUserJob=response;
      },err=>{
       alert('Error');
     });
    }
}

}
