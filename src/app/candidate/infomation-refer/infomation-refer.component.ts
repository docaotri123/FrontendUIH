import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-infomation-refer',
  templateUrl: './infomation-refer.component.html',
  styleUrls: ['./infomation-refer.component.scss'],
  providers: [MessageService]
})
export class InfomationReferComponent implements OnInit {
  @Input() inforCandidate:any;
  userform2: FormGroup;
  submitted: boolean;
  x:string;
  y:string;
  mota:string;
  constructor(private fb: FormBuilder,private messageService: MessageService) { }

  ngOnInit() {
    this.userform2 = this.fb.group({
      'Decription': new FormControl('', Validators.required),
    });
    this.x="visible";
    this.y="hidden";
  }
  onSubmit()
  {
    this.submitted = true;
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    this.mota=this.userform2.value.Decription;
    this.x="hidden";
    this.y="visible";
  }
  Edit()
  {
    this.x="visible";
    this.y="hidden";
  }
  get diagnostic() { return JSON.stringify(this.userform2.value); }
  Cancel()
  {
    this.userform2.controls['Decription'].reset();
  }
}
