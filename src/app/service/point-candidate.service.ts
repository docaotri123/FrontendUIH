import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointCandidateService {
  candidate:any[]=[];
  getC:any[]=[];
  getM:any[]=[];
  point:any[]=[];
  MSSV:string;
  constructor() 
  { 
    this.candidate = [
      { Ten:'Nguyen Duc Huy',MSSV:'15039131',Khoa:'Kỹ thuật phần mềm',DTB:'3.0',HK:'Tốt',nam:2015,img:"https://kenh14cdn.com/2018/10/16/photo-1-1539682628363989241519.jpg",Confirm:false},
      { Ten:'Nguyễn Thành Nhân',MSSV:'1239131',Khoa:'Kỹ thuật phần mềm',DTB:'3.1',HK:'Khá',nam:2015,img:"src=http://khamphukhoathaiha.com/media/images/bac-si-nguyen-phuong-thao.jpg",Confirm:false},
      { Ten:'Trần Anh Tuần',MSSV:'150123',Khoa:'Kỹ thuật phần mềm',DTB:'3.3',HK:'Tốt',nam:2016,img:"",Confirm:false},
      { Ten:'Nguyễn Công Phượng',MSSV:'1501244',Khoa:'Kỹ thuật phần mềm',DTB:'3.5',HK:'Tốt',nam:2017,img:"",Confirm:false},
      { Ten:'Đinh Ngọc Tiến',MSSV:'456112',Khoa:'Kỹ thuật phần mềm',DTB:'3.7',HK:'Tốt',nam:2016,img:"",Confirm:false},
      { Ten:'Võ Mình Cường',MSSV:'1234561',Khoa:'Kỹ thuật phần mềm',DTB:'3.1',HK:'Tốt',nam:2014,img:"",Confirm:false},
      { Ten:'Ngô Bá Khá',MSSV:'150241222',Khoa:'Kỹ thuật phần mềm',DTB:'3.9',HK:'Tốt',nam:2017,img:"",Confirm:false},
    ];
    this.point = [
      { STT:'1',TMH:'Lập trình hướng đối tượng',ML:'123456',TK:3.0,GC:'Khá',MSSV:'15039131'},
      { STT:'2',TMH:'Lập trình Web',ML:'123123',TK:3.5,GC:'Gioi',MSSV:'15039131'},
      { STT:'3',TMH:'Sql',ML:'1231111',TK:2.0,GC:'Trung bình',MSSV:'15039131'},
      { STT:'4',TMH:'Đồ án 1',ML:'123321',TK:4.0,GC:'Xuất sắc',MSSV:'15039131'},
      { STT:'5',TMH:'Phân tích thiết kế hệ thống',ML:'1242123',TK:'3.0',GC:'Khá',MSSV:'15039131'},
      { STT:'6',TMH:'Tiếng Anh chuyên ngành',ML:'521523',TK:2.0,GC:'Trung bình',MSSV:'1239131'},
      { STT:'7',TMH:'Công nghệ phần mềm',ML:'123423',TK:3.0,GC:'Khá',MSSV:'1239131'},
      { STT:'8',TMH:'Xây dựng phần mềm',ML:'1235222',TK:3.5,GC:'Gioi',MSSV:'1239131'},
    ];

  }
  getCandidate(obj:string):any{
    this.MSSV=obj;
    this.getC=[];
    for(var x=0;x<this.candidate.length;x++)
    {
      if(this.candidate[x].MSSV==obj)
      {
        this.getC.push(this.candidate[x]);
      }
    }
    return this.getC;
  }
  getMonHoc(obj:string)
  {
    this.getM=[];
    for(var y=0;y<this.point.length;y++)
    {
      if(this.point[y].MSSV==obj)
      {
        this.getM.push(this.point[y]);
      }
    }
    return this.getM;
  }


}
