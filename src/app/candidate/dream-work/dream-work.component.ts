import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dream-work',
  templateUrl: './dream-work.component.html',
  styleUrls: ['./dream-work.component.scss']
})
export class DreamWorkComponent implements OnInit {
  diadiem:SelectItem[];
  nganhNge:SelectItem[];
  phucLoi:SelectItem[];
  x:string;
  y:string;
  constructor() { 
    this.diadiem = [
      {label: 'Sài gòn', value: 'Sài gòn'},
      {label: 'Hà Nội', value: 'Hà Nội'},
    ];
    this.nganhNge = [
      {label: 'Phần mềm', value: 'Phần mềm'},
      {label: 'Phần cứng', value: 'Phần cứng'},
      {label: 'Quản viên', value: 'Quản viên'},
      {label: 'Mạng/IT', value: 'Mạng/IT'}
    ];
    this.phucLoi = [
      {label: 'Giai thưởng', value: 'Giai thưởng'},
      {label: 'Tiền thưởng', value: 'Tiền thưởng'},
      {label: 'Căn tin', value: 'Căn tin'},
      {label: 'Chăm sóc sức khỏe', value: 'Chăm sóc sức khỏe'},
      {label: 'Thư viện', value: 'Thư viện'},
      {label: 'Đào tạo', value: 'Đào tạo'},
      {label: 'Xe đưa đón', value: 'Xe đưa đón'},
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
