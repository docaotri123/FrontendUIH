import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'admin-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() 
  {
      this.items = 
      [
        {label: 'Việc làm', icon: 'fa fa-fw fa-bar-chart'},
        {label: 'Đăng tuyển dụng', icon: 'fa fa-fw fa-calendar'},
        {label: 'Tìm ứng viên', icon: 'fa fa-fw fa-book'},
        {label: 'Tài khoản', icon: 'fa fa-fw fa-support'}
      ];
  }
  onTabChange(event) {
    console.log(event.index);  
  }

}
