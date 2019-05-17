import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  images = [];

  testcc = ['A','B','C'];
  constructor() { }

  ngOnInit() {
    this.images.push({source:'https://images.vietnamworks.com/logo/Banner-Vinhomes-CBN_Vietnamworks-01.03.19_102449.jpg', alt:'Description', title:'Title 1'})
    this.images.push({source:'https://images.vietnamworks.com/logo/Yuanta_101543.jpg', alt:'Description', title:'Title 1'})
    this.images.push({source:'https://images02.vietnamworks.com/companyprofile/VINHOMES/en/Cover-profile2_1_.jpg', alt:'Description', title:'Title 1'})
  }

}
