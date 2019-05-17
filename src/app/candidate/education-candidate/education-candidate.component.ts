import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-education-candidate',
  templateUrl: './education-candidate.component.html',
  styleUrls: ['./education-candidate.component.scss']
})
export class EducationCandidateComponent implements OnInit {
  bangCap: SelectItem[];
  x:string;
  y:string;
  constructor() { 
    this.bangCap = [
      {label:'Vui lòng chọn bằng cấp', value:null},
      {label:'Đại học', value:{id:1, name: 'Đại học', code: 'NY'}},
      {label:'Cao đẳng', value:{id:2, name: 'Cao đẳng', code: 'RM'}},
      {label:'Trung cấp', value:{id:3, name: 'Trung cấp', code: 'LDN'}},
  ];
  }

  ngOnInit() {
    this.x="visible";
    this.y="hidden";

  }
  onClick()
  {
    this.x="hidden";
    this.y="visible";
  }
  Edit()
  {
    this.x="visible";
    this.y="hidden";
  }

}
