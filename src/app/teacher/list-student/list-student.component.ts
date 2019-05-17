import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { from } from 'rxjs';
import { CV } from 'src/app/models/cv';
import { KyNang } from 'src/app/models/kyNang';
import { NgonNgu } from 'src/app/models/ngonngu';
import { KinhNghiemLamViec } from 'src/app/models/kinhnghiemlamviec';
import { ViTri } from 'src/app/models/vitri';
import { NganhNghe } from 'src/app/models/nganhnghe';
import { PhucLoi } from 'src/app/models/phucloi';
import { Cv_KyNang } from 'src/app/models/cv_kynang';
import { Cv_NgoNgu } from 'src/app/models/cv_ngonngu';
import { Cv_KinhNghiem } from 'src/app/models/cv_kinhnghiem';
import { Cv_ViTri } from 'src/app/models/cv_vitri';
import { Cv_PhucLoi } from 'src/app/models/cv_phucloi';
import { PointCandidateService } from 'src/app/service/point-candidate.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  
  listCV:CV[];
  info:any;
  cols1:any[];
  display: boolean = false;
  //khai bao mảng thong tin CV
  arrayKyNang:any[]=[];
  arrayDanhGiaKyNang:any[]=[];
  arrayNgoaiNgu:any[]=[];
  arrayDanhGiaNgonNgu:any[]=[];
  arrayKinhNghiemLam:KinhNghiemLamViec[]=[];

  //Tao CV
  kyNang:KyNang[]=[
    {idkyNang:1,namekiNang:'C++'},
    {idkyNang:2,namekiNang:'C#'},
    {idkyNang:3,namekiNang:'Java'},
  ];

  ngonNgu:NgonNgu[]=[
    {idNgonNgu:1,nameNgonNgu:'Trung Quóc'},
    {idNgonNgu:2,nameNgonNgu:'Thái Lan'},
    {idNgonNgu:3,nameNgonNgu:'Anh Văn'}
  ];
  kinhNghiem:KinhNghiemLamViec[]=[
    {idKinhNghiem:1,tenCongTy:'Fpt',startDate:'13/2/2019',endDate:'30/4/2019',moTa:'Thực tập sinh ở đây'},
    {idKinhNghiem:2,tenCongTy:'Bán hàng',startDate:'11/1/2018',endDate:'11/2/2018',moTa:'Nhân viên bán hàng quần áo'}
  ];
  noiLam:ViTri[]=[
    {idViTri:1,tenViTri:'Sài Gòn'},
    {idViTri:2,tenViTri:'Tây Ninh'},
    {idViTri:3,tenViTri:'Hà Nội'},
  ];
  nganhNghe:NganhNghe[]=[
    {idnganhNghe:1,nameNganhNghe:'Kỹ thuật phần mềm'},
    {idnganhNghe:2,nameNganhNghe:'Hệ thống thông tin'},
    {idnganhNghe:3,nameNganhNghe:'Mạng máy tính'},
    {idnganhNghe:4,nameNganhNghe:'Khoa học máy tính'},
  ]
  phucLoi:PhucLoi[]=[
    {idphucLoi:1,namephucLoi:'Tiền thưởng'},
    {idphucLoi:2,namephucLoi:'Giai thưởng'},
    {idphucLoi:3,namephucLoi:'Căn tin'}
  ]
  cv:CV={idCV:1,khoa:'Khoa học máy tính',chuyenNganh:'Kỹ thuật phần mềm',namHoc:4,ten:'Đức Huy',ho:'Nguyễn',gioiThieuBanThan:'Siên năng,ham học hỏi',email:'huynguyen131997@gmail.com',soDienThoai:'0967918945',ngaySinh:'13/2/1997',MSSV:'15039131',danhGia:'',nameTeacher:'',confirm:false}
  cv_Kynang:Cv_KyNang[]=[
    {idCV:1,idkyNang:1,danhGia:3},
    {idCV:1,idkyNang:2,danhGia:5}
  ]
  cv_Ngonngu:Cv_NgoNgu[]=[
    {idCV:1,idNgonNgu:1,danhGia:3},
    {idCV:1,idNgonNgu:2,danhGia:3},
    {idCV:1,idNgonNgu:3,danhGia:3},
  ]
 
  cv_Kinhnghiem:Cv_KinhNghiem[]=[
    {idCV:1,idKinhNghiem:1}
  ]
  vitri:ViTri[]=[
    {idViTri:1,tenViTri:'Sài gòn'},
    {idViTri:2,tenViTri:'Hà nội'},
    {idViTri:3,tenViTri:'Tây Ninh'}
  ]
  phucloi:PhucLoi[]=[
    {idphucLoi:1,namephucLoi:'Giai thưởng'},
    {idphucLoi:2,namephucLoi:'Tiền lương'},
    {idphucLoi:3,namephucLoi:'Căn tin'},
  ]
  cv_Vitri:Cv_ViTri[]=[
    {idCV:1,idViTri:1},
    {idCV:1,idViTri:2},
  ]
  cv_Phucloi:Cv_PhucLoi[]=[
    {idCV:1,idphucLoi:1},
    {idCV:1,idphucLoi:2}
  ]


 





  //


  point:any[];
  
  point1:any[];
  point2:any[]=[];
  point3:any[]=[];

  candidate:any[];
  Khoa:any[]=[];
  Lop:any[]=[];
  MonHoc:any[]=[];
  KetQua:any[]=[];



  CV:boolean;
  constructor(private pointCandidate:PointCandidateService) { }

  ngOnInit() {
    this.kyNang=[
      {idkyNang:1,namekiNang:'C++'},
      {idkyNang:2,namekiNang:'C#'},
      {idkyNang:3,namekiNang:'Java'},
    ];
    //array danh sach CV
    this.listCV=[
       {idCV:1,khoa:'Khoa học máy tinh',chuyenNganh:'Kỹ thuật phần mềm',namHoc:4,ten:'Huy',ho:'Nguyễn',gioiThieuBanThan:'Siêng năng học tập',email:'huynguyen131997@gmail.com',confirm:false,soDienThoai:'0967918945',ngaySinh:'13/2/1997',MSSV:'15039131',danhGia:'',nameTeacher:''},
      // {idCV:2,MSSV:'1239131',danhGia:'',nameTeacher:''},
      // {idCV:3,MSSV:'150123',danhGia:'',nameTeacher:''}
    ];

    
    this.cols1=[
      { field: 'Ten', header: 'Tên'},
      { field: 'MSSV', header: 'Mã số sinh viên'},
      { field: 'Khoa', header: 'Khoa'},
      { field: 'DTB', header: 'Điểm trung bình'},
      { field: 'HK', header: 'Hạnh kiểm'},
    ]



    //arraySinhVien
    // this.candidate = [
    //   { Ten:'Nguyen Duc Huy',MSSV:'15039131',Khoa:'Kỹ thuật phần mềm',DTB:'3.0',HK:'Tốt',nam:2015,img:"https://kenh14cdn.com/2018/10/16/photo-1-1539682628363989241519.jpg",Confirm:false},
    //   { Ten:'Nguyễn Thành Nhân',MSSV:'1239131',Khoa:'Kỹ thuật phần mềm',DTB:'3.1',HK:'Khá',nam:2015,img:"src=http://khamphukhoathaiha.com/media/images/bac-si-nguyen-phuong-thao.jpg",Confirm:false},
    //   { Ten:'Trần Anh Tuần',MSSV:'150123',Khoa:'Kỹ thuật phần mềm',DTB:'3.3',HK:'Tốt',nam:2016,img:"",Confirm:false},
    //   { Ten:'Nguyễn Công Phượng',MSSV:'1501244',Khoa:'Kỹ thuật phần mềm',DTB:'3.5',HK:'Tốt',nam:2017,img:"",Confirm:false},
    //   { Ten:'Đinh Ngọc Tiến',MSSV:'456112',Khoa:'Kỹ thuật phần mềm',DTB:'3.7',HK:'Tốt',nam:2016,img:"",Confirm:false},
    //   { Ten:'Võ Mình Cường',MSSV:'1234561',Khoa:'Kỹ thuật phần mềm',DTB:'3.1',HK:'Tốt',nam:2014,img:"",Confirm:false},
    //   { Ten:'Ngô Bá Khá',MSSV:'150241222',Khoa:'Kỹ thuật phần mềm',DTB:'3.9',HK:'Tốt',nam:2017,img:"",Confirm:false},
    // ];
    this.candidate=this.pointCandidate.candidate;
    this.Lop=[
      {MaLop:'ML123',TenLop:'Kỹ thuật phần mềm'},
      {MaLop:'ML124',TenLop:'Công nghệ thông tin'},
      {MaLop:'ML125',TenLop:'Hệ thống thông tin'},
      {MaLop:'ML126',TenLop:'Khoa học máy tính'},
    ]
    this.Khoa=[
      {MaKhoa:'MK142',TenKhoa:'Khoa học máy tinh'}
    ]
    this.MonHoc=[
      {MaMonHoc:'MH142',TenMonHoc:'Lập trình hướng đối tượng'}

    ]

    
    //Array Mon hoc
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
  showDialog(x:any) {
    this.display=true;
    this.point1=[];
    this.point2=[];
    this.point3=[];
    this.arrayKyNang=[];
    this.arrayNgoaiNgu=[];
    this.arrayKinhNghiemLam=[];
    this.display = true;
    this.info=x;
    

    for(var i=0;i<this.point.length;i++)
    {
      if(this.point[i].MSSV==this.info.MSSV)
      {
        this.point1.push(this.point[i]);
      }
    }
    for(var y=0;y<this.candidate.length;y++)
    {
      if(this.candidate[y].MSSV==this.info.MSSV)
      {
          this.point2.push(this.candidate[y]);
      }
    }
    //lay dc cai mảng thong tin de duyệt

    for(var z=0;z<this.listCV.length;z++)
    {
      if(this.listCV[z].MSSV==this.info.MSSV)
      {
          this.point3.push(this.listCV[z]);
          // //tim kiem danh sach ngon ngu
           for(var y=0;y<this.cv_Ngonngu.length;y++)
           {
             if(this.cv_Ngonngu[y].idCV==this.listCV[z].idCV)
             {
                for(var t=0;t<this.ngonNgu.length;t++)
                {
                  if(this.ngonNgu[t].idNgonNgu==this.cv_Ngonngu[y].idNgonNgu)
                {
                    this.arrayNgoaiNgu.push(this.ngonNgu[t]);
                }
                }
            }
            console.log(this.arrayNgoaiNgu);
           }
          // // //tim kiem danh sach kinh nghiem
          for(var y=0;y<this.cv_Kinhnghiem.length;y++)
           {
             if(this.cv_Kinhnghiem[y].idCV==this.listCV[z].idCV)
             {
               for(var t=0;t<this.kinhNghiem.length;t++)
               {
                 if(this.kinhNghiem[t].idKinhNghiem==this.cv_Kinhnghiem[y].idKinhNghiem)
                 {
                   this.arrayKinhNghiemLam.push(this.kinhNghiem[t]);
                 }
              }
             }
           }
          //tim kiem danh sach ki nang:

          for(var y=0;y<this.cv_Kynang.length;y++)
          {
            if(this.cv_Kynang[y].idCV==this.listCV[z].idCV)
            {
              for(var h=0;h<this.kyNang.length;h++)
              {
                if(this.kyNang[h].idkyNang==this.cv_Kynang[y].idkyNang)
                {
                  this.arrayKyNang.push(this.kyNang[h]);
                  //this.arrayKyNang.push(this.cv_Kynang[y]);
                }
              }
            }
          }

      }
    }
    console.log(this.arrayKyNang.length);
  }

  XacNhan(x:string)
  {
    //alert(x);
    var check:boolean;
    check=true;
    for(var i=0;i<this.candidate.length;i++)
    {
      if(this.candidate[i].MSSV==x)
      {
        console.log(this.candidate[i]);
        if(this.candidate[i].Confirm==false)
        {
          this.candidate[i].Confirm=true;
        }
      }
    }
    this.display=false;
    
  
  }
  getCV(x:CV)
  {
    for(var i=0;i<this.listCV.length;i++)
    {
      if(this.listCV[i].MSSV==x.MSSV)
      {
        this.listCV[i].danhGia=x.danhGia;
        this.listCV[i].nameTeacher=x.nameTeacher;
      }
    }
    console.log("ccc"+x.danhGia);
  }


}
