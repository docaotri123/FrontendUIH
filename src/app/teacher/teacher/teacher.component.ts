import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  name:string;

  constructor(private loginServe:LoginService) { }

  ngOnInit() {
    this.name=this.loginServe.getName();
  }

}
