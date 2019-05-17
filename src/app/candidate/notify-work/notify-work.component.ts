import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { CreateNotify } from 'src/app/models/createNotify';

@Component({
  selector: 'app-notify-work',
  templateUrl: './notify-work.component.html',
  styleUrls: ['./notify-work.component.scss']
})
export class NotifyWorkComponent implements OnInit {
  @Input() notifyWork:CreateNotify;
  @Input() TEN:string;
  @Input() JOB:CreateNotify;
  @Output() editJob=new EventEmitter<Number>();
  @Output() job=new EventEmitter<CreateNotify>();
  @Output() deleteJobNotify=new EventEmitter<Number>();
  childMgs:string;
  
  display: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  Edit()
  {
    this.editJob.emit(this.notifyWork.idJobNotify);
    this.display=true;
  }


  SUA(id:number)
  {
    console.log('Chay ve notify rùi');
  }
  xuan(x:CreateNotify)
  {
   // console.log(job);
    this.job.emit(x);
    this.display=false;
  }

  Delete()
  { 
    this.deleteJobNotify.emit(this.notifyWork.idJobNotify);
  }
}
