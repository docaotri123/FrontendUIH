import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { fromStringWithSourceMap } from 'source-list-map';


@Component({
  selector: 'app-detail-candidate',
  templateUrl: './detail-candidate.component.html',
  styleUrls: ['./detail-candidate.component.scss']
})
export class DetailCandidateComponent implements OnInit {
  data: any;
  data1: TreeNode[];
  ListJobApply:any[];
  cols2:any[];
  val1: number;
  val2:number;
  val3:number;
  val4: number;
  val5:number;


  listMonHoc:any[];

  point:any[];

//   public pieChartLabels = ['C#', 'Sql', 'NodeJs', 'Angular'];
//   public pieChartData = [120, 150, 180, 90];
//   public pieChartType = 'pie';
     public pieChartLabels=[];
     public pieChartData=[];
     public pieChartType = 'pie';

  files: TreeNode[];

  constructor() { 
      this.listMonHoc=[];
  }

  ngOnInit() {
    this.point = [
        { STT:'1',TMH:'Lập trình hướng đối tượng',ML:'123456',TK:3.0,GC:'Khá',MSSV:'15039131'},
        { STT:'2',TMH:'Lập trình Web',ML:'123123',TK:3.5,GC:'Gioi',MSSV:'15039131'},
        { STT:'3',TMH:'Sql',ML:'1231111',TK:2.0,GC:'Trung bình',MSSV:'15039131'},
        { STT:'4',TMH:'Đồ án 1',ML:'123321',TK:4.0,GC:'Xuất sắc',MSSV:'15039131'},
        { STT:'5',TMH:'Phân tích thiết kế hệ thống',ML:'1242123',TK:3.0,GC:'Khá',MSSV:'15039131'},
        { STT:'6',TMH:'Tiếng Anh chuyên ngành',ML:'521523',TK:2.0,GC:'Trung bình',MSSV:'1239131'},
        { STT:'7',TMH:'Công nghệ phần mềm',ML:'123423',TK:3.0,GC:'Khá',MSSV:'1239131'},
        { STT:'8',TMH:'Xây dựng phần mềm',ML:'1235222',TK:3.5,GC:'Gioi',MSSV:'1239131'},
      ];
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
      this.data1 = [{
        label: 'Nguyễn Đức Huy',
        expanded: true,
        children: [
            {
                label: 'C#',
                expanded: true,
                children: [
                    {
                        label: 'Lập trình C# căn bản'
                    },
                    {
                        label: 'Lập trình C# nâng cao'
                    }
                ]
            },
            {
                label: 'Sql',
                expanded: true,
                children: [
                    {
                        label: 'SQL căn bản'
                    },
                    {
                        label: 'Sql nâng cao'
                    }
                ]
            },
            {
              label: 'Lập trình hướng đối tượng',
              expanded: true
            },
            {
              label: 'Node Js',
              expanded: true,
          }
        ]
    }];


    this.ListJobApply = [
        {DateApply:'12-2-2019',Job:'Fresher C#'},
        {DateApply:'12-2-2019',Job:'Fresher Java'},
        {DateApply:'12-2-2019',Job:'Senior C++'}
    ];
    this.cols2=[
        { field: 'DateApply', header: 'DateApply' },
        { field: 'Job', header: 'Job' },
      ]

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
            for(var z=0;z<this.point.length;z++)
            {
                if(this.files[i].children[y].label==this.point[z].TMH)
                {
                    this.files[i].children[y].data=this.point[z].TK;
                    this.files[i].children[y].label+=":"+this.point[z].TK;
                    tong+=this.point[z].TK;
                }
            }
        }
        tong=tong/this.files[i].children.length;
        this.pieChartData.push(tong);
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
  }
  nodeSelect(event) 
  {
    console.log(event.node.data);
 }

}
