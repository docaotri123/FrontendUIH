import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-favorite-job',
  templateUrl: './favorite-job.component.html',
  styleUrls: ['./favorite-job.component.scss']
})
export class FavoriteJobComponent implements OnInit {

  language: SelectItem[];
  degree: SelectItem[];
  citis: SelectItem[];
  constructor() 
  {
    this.language = [
      {label:'Language', value:null},
      {label:'Thailand', value:{id:1, name: 'Thailand', code: 'NY'}},
      {label:'Japanes', value:{id:2, name: 'Japanes', code: 'RM'}},
      {label:'English', value:{id:3, name: 'English', code: 'LDN'}},
  ];
  this.degree = [
    {label:'Vui lòng chọn bằng cấp', value:null},
    {label:'Cao đẳng', value:{id:1, name: 'Cao đẳng', code: 'NY'}},
    {label:'Đại học', value:{id:2, name: 'Đại học', code: 'RM'}},
    {label:'Trung cấp', value:{id:3, name: 'Trung cấp', code: 'LDN'}},
];
this.citis = [
  {label: 'Hà Nội', value: 'Hà Nội'},
  {label: 'Sài Gòn', value: 'Sài Gòn'},
  {label: 'Tây Ninh', value: 'Tây Ninh'},
  {label: 'Phú Yên', value: 'Phú Yên'},
  {label: 'An Giang', value: 'An Giang'},
  
];

}

  ngOnInit() {
    
  }

}
