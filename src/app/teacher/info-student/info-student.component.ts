import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CV } from 'src/app/models/cv';
import { KyNang } from 'src/app/models/kyNang';
import { KinhNghiemLamViec } from 'src/app/models/kinhnghiemlamviec';
import { NgonNgu } from 'src/app/models/ngonngu';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.scss']
})
export class InfoStudentComponent implements OnInit {
  @Input() infoStudent:any[];
  @Input() hanhKiem:string;
  @Input() student:any[];
  @Input() CV:any[];
  
  @Input() arrayKyNang:any[];
  @Input() arrayKinhNghiemLam:KinhNghiemLamViec[];
  @Input() arrayNgoaiNgu:NgonNgu[];

  xacNhan:string;
  cv:CV;

  @Output() confirm=new EventEmitter<String>();
  @Output() getCV=new EventEmitter<CV>();
  constructor() { }

  ngOnInit() {
    
  }
  Confirm(x:string)
  {
    this.xacNhan=x;
  }
  Dong()
  {
    this.confirm.emit(this.xacNhan);
    this.getCV.emit(this.cv);
  }
  GetCV(x:CV)
  {
    this.cv=x;
  }
}
