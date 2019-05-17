import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-job',
  templateUrl: './info-job.component.html',
  styleUrls: ['./info-job.component.scss']
})
export class InfoJobComponent implements OnInit {
  @Input() item1:any;
  constructor() { }

  ngOnInit() {
  }

}
