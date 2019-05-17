import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';
import { CreateNotify } from 'src/app/models/createNotify';

@Component({
  selector: 'app-list-notifywork',
  templateUrl: './list-notifywork.component.html',
  styleUrls: ['./list-notifywork.component.scss']
})
export class ListNotifyworkComponent implements OnInit {
  testcc = ['A','B','C'];
  testcc1 = ['A'];
  @Output() sua=new EventEmitter<Number>();
  ten:string;
  listJob: CreateNotify[] = [

  ];
  job:CreateNotify;


  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
}
  addJob(job:CreateNotify)
  {
      console.log('dang o day ne');
      this.listJob.push(job);
      console.log(this.listJob);
      this.display=false;
  }
  Edit(id:number)
  { 
    this.sua.emit(id);
    const index=this.listJob.findIndex(x=>x.idJobNotify==id);
    this.job=this.listJob[index];
    console.log(this.job);
    this.ten=id+"";
  }
  tri(x:CreateNotify)
  {
    const index=this.listJob.findIndex(y=>y.idJobNotify==x.idJobNotify);
    this.listJob[index].idJobNotify=x.idJobNotify;
    this.listJob[index].khuVuc=x.khuVuc;
    this.listJob[index].kyNang=x.kyNang;
    this.listJob[index].mucLuong=x.mucLuong;
    this.listJob[index].nameJob=x.nameJob;
    this.listJob[index].nganhNghe=x.nganhNghe;
    this.listJob[index].capBac=x.capBac;
    

  }
  deleteJob(id:Number)
  {
    const index=this.listJob.findIndex(x=>x.idJobNotify==id);
    this.listJob.splice(index, 1);
  }



}
