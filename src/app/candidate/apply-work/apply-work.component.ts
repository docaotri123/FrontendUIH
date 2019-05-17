import { Component, OnInit,Input} from '@angular/core';
import { SaveWork } from 'src/app/models/saveWork';

@Component({
  selector: 'app-apply-work',
  templateUrl: './apply-work.component.html',
  styleUrls: ['./apply-work.component.scss']
})
export class ApplyWorkComponent implements OnInit {
  @Input() applyWork:SaveWork;
  constructor() { }

  ngOnInit() {
  }

}
