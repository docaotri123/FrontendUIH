import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router"
import { LoginService } from 'src/app/service/login.service';
import { AdminService } from 'src/app/service/admin.service';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/service/candidate.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  items: MenuItem[];
  username: 'abc';
  userInfo: any;
 
  constructor(
    private user: UserService,
    private router: Router,
    private loginService:LoginService,
    private adminService:AdminService,
    private candidateService:CandidateService
  ) { }

  ngOnInit() {
    
    this.items = [
      {
        label: '',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            icon: 'pi pi-fw pi-pencil',
            label: 'Open'
          },
          {
            icon: 'pi pi-fw pi-pencil',
            label: 'Đăng Xuất',
            command: (event) => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              this.router.navigate(['login']);
              this.user.setUserLogout();
            }
          }
        ]
      },
    ];
    
    if (this.user.getUser()) {
      this.userInfo = this.user.getUser();
      this.items[0].label = this.userInfo.userName;
    }


    
  }

  ngOnChanges() {
    debugger;
   
  }
  UngVien()
  {
    this.candidateService.SetLoggin(false);
    this.candidateService.setName("");
    this.router.navigate(['login']);
  }
}
