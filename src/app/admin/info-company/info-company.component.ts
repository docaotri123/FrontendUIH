import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-info-company',
  templateUrl: './info-company.component.html',
  styleUrls: ['./info-company.component.scss']
})
export class InfoCompanyComponent implements OnInit {
  quymo: SelectItem[];
  nganhnghe:SelectItem[];
  phucLoi:SelectItem[];
  constructor() { }

  ngOnInit() {
    this.quymo = [
      {label:'Vui lòng chọn', value:null},
      {label:'It hơn 10', value:{id:1, name: 'It hơn 10', code: 'NY'}},
      {label:'10-24', value:{id:2, name: '10-24', code: 'RM'}},
      {label:'25-29', value:{id:3, name: '25-29', code: 'LDN'}},
  ];
  this.nganhnghe = [
    {label: 'Phần mềm', value: 'Phần mềm'},
    {label: 'Mạng/Phần cứng', value: 'Mạng/Phần cứng'},
    {label: 'Quản trị', value: 'Quản trị'}
  ];
  this.phucLoi = [
    {label: 'Thưởng', value: 'Thưởng'},
    {label: 'Chăm sóc sức khỏe', value: 'Chăm sóc sức khỏe'},
    {label: 'Nghỉ phép có lương', value: 'Nghỉ phép có lương'},
    {label: 'Đào tạo', value: 'Đào tạo'},
    {label: 'Giai thưởng', value: 'Giai thưởng'},
    {label: 'Thư viện', value: 'Thư viện'}
  ];
  }

}
