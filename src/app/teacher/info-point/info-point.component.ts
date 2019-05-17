import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PointCandidateService } from 'src/app/service/point-candidate.service';

@Component({
  selector: 'app-info-point',
  templateUrl: './info-point.component.html',
  styleUrls: ['./info-point.component.scss']
})
export class InfoPointComponent implements OnInit {
  point:any[];
  point1:any[]=[

  ];
  id:string;
  MSSV:string;
  cols1:any[];
  @Input() infoStudent:any[];
  @Input() student:any[];
  student1:any[]=[];
  infoStudent1:any[]=[];


  ngOnInit() {
    this.cols1=[
      { field: 'STT', header: 'STT'},
      { field: 'TMH', header: 'Tên Môn Học'},
      { field: 'ML', header: 'Mã Lớp'},
      { field: 'TK', header: 'Tổng kết'},
      { field: 'GC', header: 'Ghi chú'},
    ]
  }
  constructor(private route:ActivatedRoute,private pointCandidate:PointCandidateService) { 
    this.id=this.route.snapshot.params['id'];
    this.student1=this.pointCandidate.getCandidate(this.id);
    this.infoStudent1=this.pointCandidate.getMonHoc(this.id);
    this.MSSV=this.pointCandidate.MSSV;
  }
}
