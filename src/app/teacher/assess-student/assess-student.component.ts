import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { CV } from 'src/app/models/cv';
import { PointCandidateService } from 'src/app/service/point-candidate.service';


@Component({
  selector: 'app-assess-student',
  templateUrl: './assess-student.component.html',
  styleUrls: ['./assess-student.component.scss']
})
export class AssessStudentComponent implements OnInit {
  val1: number;
  val2:number;
  val3:number;
  val4:number;
  val5:number;
  check:number;
  files: TreeNode[];
  x:string;
  y:string;
  h:string;
  u:string;
  data1:number[]=[
  ];
  property:string;
  cv:CV;
  nhanXet:string;


  selectedFiles2: TreeNode[];
  

  @Output() confirm=new EventEmitter<String>();
  @Output() CV=new EventEmitter<CV>();
  public pieChartLabels = [];
  
  public pieChartData =[];

  public pieChartType = 'pie';


  listMonHoc:any[]=[

  ];


  @Input() infoStudent:any[];
  infoStudent1:any[]=[];
  @Input() student:any[];
  @Input() info:any;
  @Input() infoCV:CV;

  data: any;

  MSSV:string;

  





  

  constructor(private pointCandidate:PointCandidateService) { 
  }

  ngOnInit() {
    this.MSSV=this.pointCandidate.MSSV;
    this.infoStudent1=this.pointCandidate.getMonHoc(this.MSSV);
    
    //this.h="visible";
    this.u="hidden";
    this.check=0;
    this.x="hidden";
   // this.x="visible";


    this.files=
    [
        {
            "label": ".Net",
            "children": [{
                    "label": "C#",
                    "data": "",
                },
                {
                    "label": "Lập trình hướng đối tượng",
                    "data": ""
                },
                {
                    "label": "Lập trình hướng sự kiện",
                    "data": ""
                },
            ]
        },
        {
            "label": "Desiner",
            "children": [
                {   
                    "label": "Lập trình web",  
                    "data": ""
                },
                {"label": "Lập trình web nâng cao","data": ""},
            ]
        },
        {
            "label": "Java",
            "data": "Movies Folder",
            "children": [{
                    "label": "Lập trình Java",
                    "data": "",
                },
                {
                    "label": "Lập trình hướng đối tượng",
                    "data": "",
                }]
        },
        {
            "label": "C/C++",
            "children": [{
                    "label": "Nhập môn lập trình",
                    "data": "",
                },
                {
                    "label": "Cấu trúc dữ liệu và giải thuật",
                    "data": "",
                },
                {
                    "label": "Lập trình C nâng cao",
                    "data": "",
                },
            ]
        },
        {
            "label": "Tester",
            "children": [{
                    "label": "Kiểm thử phần mềm",
                    "data": "",
                },
                {
                    "label": "Xây dựng phần mềm",
                    "data": "",
                },
                {
                    "label": "Công nghệ phần mềm",
                    "data": "",
                },
            ]
        },
    ]

    for(var i=0;i<this.files.length;i++)
    {
        this.listMonHoc.push(this.files[i].label);
        var tong=0;
        for(var y=0;y<this.files[i].children.length;y++)
        {
            for(var z=0;z<this.infoStudent1.length;z++)
            {
               if(this.files[i].children[y].label==this.infoStudent1[z].TMH)
                {
                    this.files[i].children[y].data=this.infoStudent1[z].TK;
                    this.files[i].children[y].label+=":"+this.infoStudent1[z].TK;
                    tong+=this.infoStudent1[z].TK;
                }
            }
        }
        
        tong=tong/this.files[i].children.length;
        if(tong==1)
        {
            this.files[i].label+="Yếu";
        }
        if(tong==2)
        {
            this.files[i].label+="Trung Bình";
        }
        if(tong==3)
        {
            this.files[i].label+="Khá";
        }
       // alert(tong);
        this.data1.push(tong);
        if(i==0)
        {
            this.val1=tong;
        }
        if(i==1)
        {
            this.val2=tong;
        }
        if(i==2)
        {
            this.val3=tong;
        }
        if(i==3)
        {
            this.val4=tong;
        }
        if(i==4)
        {
            this.val5=tong;
        }
    }


    this.pieChartLabels=this.listMonHoc;
    this.pieChartData=this.data1;


  }





  View()
  {
    for(var i=0;i<this.files.length;i++)
    {
        this.listMonHoc.push(this.files[i].label);
        var tong=0;
        for(var y=0;y<this.files[i].children.length;y++)
        {
            for(var z=0;z<this.infoStudent1.length;z++)
            {
               if(this.files[i].children[y].label==this.infoStudent1[z].TMH)
                {
                    this.files[i].children[y].data=this.infoStudent1[z].TK;
                    //this.files[i].children[y].label+=":"+this.infoStudent[z].TK;
                    tong+=this.infoStudent[z].TK;
                  
                }
            }
        }
        
        tong=tong/this.files[i].children.length;
        
        this.data1.push(2);
        if(i==0)
        {
            this.val1=tong;
        }
        if(i==1)
        {
            this.val2=tong;
        }
        if(i==2)
        {
            this.val3=tong;
        }
        if(i==3)
        {
            this.val4=tong;
        }
        if(i==4)
        {
            this.val5=tong;
        }
    }


    this.pieChartLabels=this.listMonHoc;
    this.pieChartData=this.data1;
      
    this.x="visible";
    this.y="hidden";
    this.h="visible";
    this.u="hidden";
  }
  Close()
  {
      this.x="hidden";
      this.y="visible";
      this.h="hidden";
      this.u="hidden";
      this.listMonHoc=[];
      this.data1=[];
  }
  XacNhan()
  {
      this.cv=new CV();
      this.confirm.emit(this.student[0].MSSV);
      this.cv.danhGia=this.nhanXet;
      this.cv.MSSV=this.student[0].MSSV;
      this.cv.nameTeacher="Nguyen Duc Huy";
      this.CV.emit(this.cv);
      
      this.property="";
      this.h="hidden";
      this.u="visible";
  }
  Sua()
  {
    this.u="hidden";
    this.h="visible";
  }
  nodeSelect(event) {
    //event.node = selected node
}
}


