import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { LoginService } from 'src/app/service/login.service';
import { AdminService } from 'src/app/service/admin.service';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/service/candidate.service';
import { _Login } from 'src/app/service/_Login.service';
import { LogService } from 'src/app/service/log.service';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  list:any[]=[];
  constructor(private xx:LogService,private candidateService:CandidateService,private adminService:AdminService,private loginservice:LoginService,private router: Router,private user: UserService) 
  { 

  }

  ngOnInit( ) {
  }
  
  // login(form: NgForm) {
  //   let credentials = JSON.stringify(form.value);
  //   this.user.login(credentials)
  //   .subscribe(response => {
  //     const info = (<any>response);
  //     this.invalidLogin = false;
  //     this.user.setUser(info);      
  //     location.href = '/home';
  //     // this.router.navigate(["/"]);
  //   }, err => {
  //     this.invalidLogin = true;
  //   });
  // }
  login(form:NgForm)
  {
    let credentials = JSON.stringify(form.value);
    this.xx.logIn(credentials)
    .subscribe(res =>{
      console.log(res[0].name);
      if(res[0].rol=="UngVien")
      {
        this.candidateService.SetLoggin(true);
        this.candidateService.setName(res[0].name);
      //  alert(res[0].name);
        this.candidateService.setId(res[0].userID);
        console.log(res[0].name);
        console.log('cc');
        
        
        this.router.navigate(['home']);
       // this.router.navigate(['/candidate/thongTinCaNhan']);
      }
      if(res[0].rol=="Admin")
      {
          this.adminService.SetLoggin(true);
          this.adminService.setName('Tuan');
          this.router.navigate(['/admin']);
      }
    });

    // if(form.value.username=='admin'&& form.value.password=='123456')
    // {
    //   console.log('cc');
    //   this.loginservice.SetLoggin(true);
    //   if(this.loginservice.IsLogged()==true)
    //   {
    //     console.log('concac');
    //   }
    //   this.router.navigate(['/'])
    // }
    // var output=this.loginservice.Check(form.value.username,form.value.password);
    // var outputAdmin=this.adminService.Check(form.value.username,form.value.password);
    // var outputCandidate=this.candidateService.Check(form.value.username,form.value.password);  
    // if(output==true)
    // {
    //   this.loginservice.SetLoggin(true);
    //   //b1:se tim kiem cac thong tin cua nguoi do
    //   //b2:xem role cua ho la gi
    //   //b3:lay service add thong tin ho vao rui truyen cho trang thong tin nguoi dung
    //   this.loginservice.SetName('BTS');
    //   console.log('tsssssssssss');
    //   this.router.navigate(['/']);
    // }
    // if(outputAdmin==true)
    // {
    //   this.adminService.SetLoggin(true);
    //   this.adminService.setName('BlackPink');
    //   this.router.navigate(['/admin']);
    //   console.log('ccccccccccccc');
    // }
    // if(outputCandidate==true)
    // {
    //   this.candidateService.SetLoggin(true);
    //   this.candidateService.setName('BTS');
    //   this.router.navigate(['/candidate']);
    // }
    // else
    // {
    //   this.loginservice.SetLoggin(false);
    //   alert('khong co quyen');
    // }
  }
}

//b1:dang nhap cua candidate
//co user pw->tim trong kia xem co hay ko