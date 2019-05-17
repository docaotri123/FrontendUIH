import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name:string;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.name=this.loginService.getName();
    console.log("cc"+this.name);
  }
  ngOnChanges() {
    this.name=this.loginService.getName();
    console.log("cc"+this.name);
   
  }


}
